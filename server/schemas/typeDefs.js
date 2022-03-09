const { gql } = require('apollo-server-express');

// making Enemy intents array a string since I am not sure what the array consists of

// making Player deck an array of Cards

const typeDefs = gql`
    type Card {
        _id: ID
        name: String 
        description: String
        class: String
        value: Int
        upgrade: Int
    }

    type Enemy {
        name: String
        currentHealth: Int
        maxHealth: Int
        intents: [String]
    }

    type Player {
        username: String
        email: String
        password: String
        maxHealth: Int
        currentHealth: Int
        deck: [Card]
    }

    type Room {
        _id: ID
        bgImage: String
        enemies: [Enemy]
    }

    type Auth {
        token: ID
        player: Player
    }

    type Query {
        cards: [Card]
        card(_id: ID, name: String): Card
        enemies: [Enemy]
        enemy(enemy: ID, name: String): Enemy
        player: Player
        room(_id: ID): Room
    }

    type Mutation {
        addEnemy(name: String!): Enemy
        addPlayer(username: String!, email: String!, password: String!): Player
        upgradeCard(name: String!, class: String!, value: Int!): Card
        login(email: String!, password: String!): Auth
    }
`;

// guessing with mutations based on what makes sense
module.exports = typeDefs;