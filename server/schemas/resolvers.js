const { AuthenticationError, ReplaceFieldWithFragment, UserInputError } = require('apollo-server-express');
const { Card, Enemy, Player, Room } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe');

const resolvers = {
    Query: {

        // grabs all the cards. 
        // we will want to use this query to find out what cards 
        // the player currently has possesion of later
        cards: async () => {
            return await Card.find();
        },


        // grabs specific card based on id and name
        card: async ({ _id, cardName }) => {
            const newCard = Card.findOne({ _id: _id, name: cardName });
            if(newCard) 
                return await newCard;

            throw new AuthenticationError('Card with that name not found');
        },

        // returns all of the enemies
        // do we want a query to get the room enemies as well? 
        enemies: async () => {
            return await Enemy.find();
        },

        // TODO: as of now, we require the id and the name when getting a single enemy
        // is this all we will need in the future? 
        enemy: async ({ _id, enemyName }) => {
            const newEnemy = Enemy.findOne({ _id: _id, name: enemyName });

            if(newEnemy)
                return await newEnemy;
            
            throw new AuthenticationError('Enemy with that _id/name not found');
        },

        // giving the player these values until further information is given
        player: async (parent, args, context) => {
            if(context.player) {
                const player = await Player.findById(context.player._id)
                    .populate({
                        path: 'player.deck',
                        populate: 'cards'
                    });
                
                return player;
            }

            throw new AuthenticationError('Player not found (not logged in)');
        },

        // room takes in id as of now.
        room: async ({ _id }) => {
            const newRoom = Room.findById({ _id: _id });
            if(newRoom)
                return newRoom;
            
            throw new AuthenticationError('Room with that id not found');
        },

        getEnemiesInRoom: async ({ _id }) => {
            const newRoom = Room.findById({ _id: id });
            if(newRoom)
                return await newRoom.enemies;
            
            throw new AuthenticationError('Room with that ID not found');
        }
    },

    Mutation: {
        addPlayer: async (parent, args) => {
            const player = await Player.create(args);
            const token = signToken(player);

            return { token, player };
        },

        addEnemy: async (parent, args) => {
            const enemy = await Enemy.create(args);

            if(enemy)
                return enemy;
            
            throw new AuthenticationError('Something went wrong when trying to create enemy');

        },

        upgradeCard: async (parent, {_id}, args) => {
             const upgradedCard = await Card.findByIdAndUpdate(_id, args, { new: true });

             if(upgradedCard)
                return upgradedCard;
            
            throw new AuthenticationError('Something went wrong when updating the card');
        },

        login: async (parent, { email, password }) => {
            const player = await Player.findOne({ email });

            if(!player)
                throw new AuthenticationError('Incorrect credentials');
            
            const playerPw = await player.isCorrectPassword(password);

            if(!playerPw)
                throw new AuthenticationError('Incorrect password');
            
            const token = signToken(player);

            return { token, player };
        }
    }
};

module.exports = resolvers;