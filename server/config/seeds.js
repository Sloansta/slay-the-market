const db = require("./connection");
const { Card, Enemy, Player, Room, Stock } = require("../models");

db.once("open", async () => {
  await Card.deleteMany();

  const cards = await Card.insertMany([
    {
      // Attack Cards 1-40
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
      id: 2,
      class: "Attack",
      value: 7,
      upgrade: 1,
    },
    {
      name: "eBay Inc.  EBAY",
      description: "eBay Inc.",
      id: 3,
      class: "Attack",
      value: 7,
      upgrade: 1,
    },
    {
      name: "UWM Holdings Corp. UWMC",
      description: "UWM Holdings Corp.",
      id: 4,
      class: "Attack",
      value: 7,
      upgrade: 1,
    },
    {
      name: "United States Steel Corp. X",
      description: "United States Steel Corp.",
      id: 5,
      class: "Attack",
      value: 7,
      upgrade: 1,
    },
    {
      name: "Best Buy Co Inc  BBY",
      description: "Best Buy Co Inc.",
      id: 6,
      class: "Attack",
      value: 7,
      upgrade: 1,
    },
    {
      name: "MicroSoft Corporation MSFT",
      description: "MicroSoft Corporation",
      id: 7,
      class: "Attack",
      value: 7,
      upgrade: 1,
    },
    {
      name: "Sony Group Corp SONY",
      description: "Sony Group Corp",
      id: 8,
      class: "Attack",
      value: 7,
      upgrade: 1,
    },

    {
      name: "Nintendo NTDOY",
      description: "Nintendo ",
      id: 9,
      class: "Attack",
      value: 7,
      upgrade: 1,
    },
    {
      name: "GameStop GME",
      description: "GameStop Corporation",
      id: 10,
      class: "Attack",
      value: 7,
      upgrade: 1,
    },
    {
      name: "Lockheed Martin LMT",
      description: "Lockheed Martin Corporation",
      id: 11,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Raytheon RTX",
      description: "Raytheon Technologies Corporation",
      id: 12,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Northrop Grumman NOC",
      description: "Northro Grumman Corporation",
      id: 13,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "CACI International Inc. CACI",
      description: "CACI International Inc.",
      id: 14,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },

    // Block Cards 41-60

    {
      name: "Moderna MRNA",
      description: "Moderna Inc.",
      id: 41,
      class: "Block",
      value: 3,
      upgrade: 1,
    },
    {
      name: "Pfizer Inc.",
      description: "Pfizer Inc.",
      id: 42,
      class: "Block",
      value: 3,
      upgrade: 1,
    },
    {
      name: "Johnson & Johnson JNJ",
      description: "Johnson & Johnson",
      id: 43,
      class: "Block",
      value: 3,
      upgrade: 1,
    },
    {
      name: "BioNTech BNTX",
      description: "BioNTech ",
      id: 44,
      class: "Block",
      value: 3,
      upgrade: 1,
    },
    {
      name: "AstraZeneca AZN",
      description: "AstraZeneca",
      id: 45,
      class: "Block",
      value: 3,
      upgrade: 1,
    },
    {
      name: "Novavax NVAX",
      description: "Novavax",
      id: 46,
      class: "Block",
      value: 3,
      upgrade: 1,
    },

    // Heal Cards   61-80
    {
      name: "Eli Lilly and Co LLY",
      description: "Eli Lilly and Co",
      id: 61,
      class: "Heal",
      value: 1,
      upgrade: 1,
    },
    {
      name: "Novo Nordisk A/S NVO",
      description: "Novo Nordisk A/S",
      id: 62,
      class: "Heal",
      value: 1,
      upgrade: 1,
    },
    {
      name: "Merck & Co Inc  MRK",
      description: "Merck & Co Inc",
      id: 63,
      class: "Heal",
      value: 1,
      upgrade: 1,
    },

    {
      name: "Bayer BAYRY",
      description: "Bayer AG Corporation",
      id: 64,
      class: "Heal",
      value: 1,
      upgrade: 1,
    },
    // UTIL Cards 81-100

    //  Upgraded Attack Cards 101-140
    {
      name: "Upgraded Apple APPL",
      description: "Apple Corporation",
      id: 101,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Upgraded TSLA Tesla",
      description: "Tesla Corporation",
      id: 102,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Upgraded eBay Inc.  EBAY",
      description: "eBay Inc.",
      id: 103,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Upgraded UWM Holdings Corp. UWMC",
      description: "UWM Holdings Corp.",
      id: 104,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Upgraded United States Steel Corp. X",
      description: "United States Steel Corp.",
      id: 105,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Upgraded Best Buy Co Inc  BBY",
      description: "Best Buy Co Inc.",
      id: 106,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Upgraded MicroSoft Corporation MSFT",
      description: "MicroSoft Corporation",
      id: 107,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Upgraded Sony Group Corp SONY",
      description: "Sony Group Corp",
      id: 108,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },

    {
      name: "Upgraded Nintendo NTDOY",
      description: "Nintendo ",
      id: 109,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Upgraded GameStop GME",
      description: "GameStop Corporation",
      id: 110,
      class: "Attack",
      value: 9,
      upgrade: 1,
    },
    {
      name: "Upgraded Lockheed Martin LMT",
      description: "Lockheed Martin Corporation",
      id: 111,
      class: "Attack",
      value: 11,
      upgrade: 1,
    },
    {
      name: "Upgraded Raytheon RTX",
      description: "Raytheon Technologies Corporation",
      id: 112,
      class: "Attack",
      value: 11,
      upgrade: 1,
    },
    {
      name: "Upgraded Northrop Grumman NOC",
      description: "Northro Grumman Corporation",
      id: 113,
      class: "Attack",
      value: 11,
      upgrade: 1,
    },
    {
      name: "Upgraded CACI International Inc. CACI",
      description: "CACI International Inc.",
      id: 114,
      class: "Attack",
      value: 11,
      upgrade: 1,
    },

    // Upgraded Block Cards 141-160

    {
      name: "Upgraded Moderna MRNA",
      description: "Moderna Inc.",
      id: 141,
      class: "Block",
      value: 5,
      upgrade: 1,
    },
    {
      name: "Upgraded Pfizer Inc.",
      description: "Pfizer Inc.",
      id: 142,
      class: "Block",
      value: 5,
      upgrade: 1,
    },
    {
      name: "Upgraded Johnson & Johnson JNJ",
      description: "Johnson & Johnson",
      id: 143,
      class: "Block",
      value: 5,
      upgrade: 1,
    },
    {
      name: "Upgraded BioNTech BNTX",
      description: "BioNTech ",
      id: 144,
      class: "Block",
      value: 5,
      upgrade: 1,
    },
    {
      name: "Upgraded AstraZeneca AZN",
      description: "AstraZeneca",
      id: 145,
      class: "Block",
      value: 5,
      upgrade: 1,
    },
    {
      name: "Upgraded Novavax NVAX",
      description: "Novavax",
      id: 146,
      class: "Block",
      value: 5,
      upgrade: 1,
    },

    // Upgraded Heal Cards   161-180
    {
      name: "Upgraded Eli Lilly and Co LLY",
      description: "Eli Lilly and Co",
      id: 161,
      class: "Heal",
      value: 3,
      upgrade: 1,
    },
    {
      name: "Upgraded Novo Nordisk A/S NVO",
      description: "Novo Nordisk A/S",
      id: 162,
      class: "Heal",
      value: 3,
      upgrade: 1,
    },
    {
      name: "Upgraded Merck & Co Inc  MRK",
      description: "Merck & Co Inc",
      id: 163,
      class: "Heal",
      value: 3,
      upgrade: 1,
    },

    {
      name: "Upgraded Bayer BAYRY",
      description: "Bayer AG Corporation",
      id: 164,
      class: "Heal",
      value: 3,
      upgrade: 1,
    },
    //  Upgraded UTIL Cards181-200
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
    deck: [
      cards[5]._id,
      cards[6]._id,
      cards[7]._id,
      cards[8]._id,
      cards[9]._id,
      cards[18]._id,
      cards[19]._id,
      cards[20]._id,
      cards[17]._id,
      cards[22]._id,
    ],
  });

  await Player.create({
    userName: "PlayerName2",
    email: "player2@test.com",
    password: "password12345",
    maxHealth: 100,
    currentHealth: 90,
    deck: [
      cards[0]._id,
      cards[1]._id,
      cards[2]._id,
      cards[3]._id,
      cards[4]._id,
      cards[14]._id,
      cards[15]._id,
      cards[16]._id,
      cards[17]._id,
      cards[21]._id,
    ],
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
