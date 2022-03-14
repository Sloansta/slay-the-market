const { gql } = require("apollo-server-express");

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
    attack: Int
    block: Int
    isBoss: Boolean
  }

  type Player {
    _id: ID
    userName: String
    email: String
    password: String
    maxHealth: Int
    currentHealth: Int
    cards: [Card]
  }

  type Stock {
    _id: ID
    name: String
    symbol: String
    quote: Float
    candleTrend: Float
  }

  type Room {
    _id: ID
    bgImage: String
    enemies: [Enemy]
  }

  type Auth {
    token: ID!
    player: Player
  }

  type Query {
    cards(_id: ID, name: String): [Card]
    card(_id: ID, name: String): Card
    enemies: [Enemy]
    enemy(enemy: ID, name: String): Enemy
    player: Player
    room(_id: ID): Room
    getEnemiesInRoom(_id: ID): [Enemy]
  }

  type Mutation {
    addEnemy(
      name: String!
      currentHealth: Int!
      maxHealth: Int!
      attack: Int!
      block: Int!
      isBoss: Boolean!
    ): Enemy
    addPlayer(userName: String!, email: String!, password: String!): Auth
    upgradeCard(_id: ID, name: String!, class: String!, value: Int!): Card
    login(email: String!, password: String!): Auth
    addStock(
      _id: ID!
      name: String!
      symbol: String!
      quote: Float!
      candleTrend: Float!
    ): Stock
    upgradeStock(
      _id: ID!
      name: String!
      symbol: String!
      quote: Float!
      percentChanged: Float!
    ): Stock
  }
`;

// guessing with mutations based on what makes sense
module.exports = typeDefs;
