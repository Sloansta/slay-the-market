const { AuthenticationError, ReplaceFieldWithFragment } = require('apollo-server-express');
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
        }
    }
};

module.exports = resolvers;