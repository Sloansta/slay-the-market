const db = require("./connection");
const { Card, Enemy, Player, Room, Stock } = require("../models");

db.once("open", async () => {
  await Card.deleteMany();

  const cards = await Card.insertMany([
    {
      name: "Card1",
      description: "Card1 description",
      id: 1,
      class: "Class1",
      value: 1,
      upgrade: 1,
    },
    {
      name: "Card2",
      description: "Card2 description",
      id: 1,
      class: "Class2",
      value: 2,
      upgrade: 2,
    },
  ]);

  console.log("Cards seeded");

  await Enemy.deleteMany();

  const enemies = await Enemy.insertMany([
    {
      name: "Enemy1",
      currentHealth: 10,
      maxHealth: 20,
      intents: ["Intent1", "Intent2"],
    },
    {
      name: "Enemy2",
      currentHealth: 30,
      maxHealth: 60,
      intents: ["Intent3", "Intent4"],
    },
  ]);

  console.log("enemies seeded");

  await Player.deleteMany();

  await Player.create({
    userName: "PlayerName1",
    email: "player1@test.com",
    password: "password12345",
    maxHealth: 100,
    currentHealth: 90,
    deck: ["Card1", "Card2"],
  });

  await Player.create({
    userName: "PlayerName2",
    email: "player2@test.com",
    password: "password12345",
    maxHealth: 100,
    currentHealth: 90,
    deck: ["Card3", "Card4"],
  });

  console.log("Players seeded");

  const rooms = await Room.insertMany([
    {
      id: 1,
      bgImage: "./assets/bgImage1",
      enemies: ["Enemy1", "Enemy2"],
    },
    {
      id: 2,
      bgImage: "./assets/bgImage2",
      enemies: ["Enemy3", "Enemy4"],
    },
  ]);
  console.log("Rooms seeded");

  const stocks = await Stock.insertMany([
    {
      id: 1,
      name: "Apple",
      symbol: "APPL",
      quote: 151.18,
      candleTrend: -7,
    },
    {
      id: 2,
      name: "Tesla",
      symbol: "TSLA",
      quote: 831.12,
      candleTrend: -18,
    },
  ]);
  console.log("Stocks seeded");

  process.exit();
});

function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}