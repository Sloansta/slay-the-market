const db = require("./connection");
const { Card, Enemy, Player, Room, Stock } = require("../models");

db.once("open", async () => {
  await Card.deleteMany();

  const cards = await Card.insertMany([
    {
      // Attack Cards
      name: "Apple APPL",
      description: "Apple Corporation",
      id: 1,
      class: "Attack",
      value: 7,
      upgrade: 1,
    },
    {
      name: "TSLA Tesla",
      description: "Tesla Corporation",
      id: 1,
      class: "Attack",
      value: 7,
      upgrade: 1,
    },
    {
      name: "GameStop GME",
      description: "GameStop Corporation",
      id: 1,
      class: "Attack",
      value: 7,
      upgrade: 1,
    },
    {
      name: "Lockheed Martin LMT",
      description: "Lockheed Martin Corporation",
      id: 1,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Raytheon RTX",
      description: "Raytheon Technologies Corporation",
      id: 1,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Northrop Grumman NOC",
      description: "Northro Grumman Corporation",
      id: 1,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    // Defense Cards
    {
      name: "Bayer BAYRY",
      description: "Bayer AG Corporation",
      id: 1,
      class: "Heal",
      value: 1,
      upgrade: 1,
    },
    {
      name: "Moderna MRNA",
      description: "Moderna Inc.",
      id: 1,
      class: "Block",
      value: 3,
      upgrade: 1,
    },
    {
      name: "Pfizer Inc.",
      description: "Pfizer Inc.",
      id: 1,
      class: "Block",
      value: 3,
      upgrade: 1,
    },
    {
      name: "Johnson & Johnson JNJ",
      description: "Johnson & Johnson",
      id: 1,
      class: "Block",
      value: 3,
      upgrade: 1,
    },
    {
      name: "Eli Lilly and Co LLY",
      description: "Eli Lilly and Co",
      id: 1,
      class: "Heal",
      value: 1,
      upgrade: 1,
    },
    {
      name: "Novo Nordisk A/S NVO",
      description: "Novo Nordisk A/S",
      id: 1,
      class: "Heal",
      value: 1,
      upgrade: 1,
    },
    {
      name: "Merck & Co Inc  MRK",
      description: "Merck & Co Inc",
      id: 1,
      class: "Heal",
      value: 1,
      upgrade: 1,
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
      percentChange: -7,
    },
    {
      id: 2,
      name: "Tesla",
      symbol: "TSLA",
      quote: 831.12,
      percentChange: -18,
    },
  ]);
  console.log("Stocks seeded");

  process.exit();
});
