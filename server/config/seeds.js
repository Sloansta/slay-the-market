const db = require("./connection");
const { Card, Enemy, Player, Room } = require("../models");

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
    userName: "PlayerName2",
    email: "player2@test.com",
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
    deck: ["Card1", "Card2"],
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

  process.exit();
});
