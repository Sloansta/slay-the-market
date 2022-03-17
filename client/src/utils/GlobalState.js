import React, { createContext, useContext } from "react";
import { useGameReducer } from "./reducers";
import { randomVal } from "./helpers";

const GameContext = createContext();
const { Provider } = GameContext;

const GameProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useGameReducer({
    userName: "Temp Player",
    currentHealth: 100,
    maxHealth: 100,
    hand: [],
    cards: [],
    rewards: [],
    enemies: [],
    enemyOneHealth: 30,
    enemyTwoHealth: 20,
    enemyThreeHealth: 45,
    enemyFourHealth: 60,
    enemyOne: {
      name: "enemy1",
      attack: randomVal(4, 10),
      block: randomVal(0, 5),
      currentHealth: 20,
      maxHealth: 30,
    },
    enemyTwo: {
      name: "enemy2",
      attack: randomVal(4, 10),
      block: randomVal(0, 5),
      currentHealth: randomVal(10, 20),
      maxHealth: 45,
    },
    enemyThree: {
      name: "enemy3",
      attack: randomVal(4, 10),
      block: randomVal(0, 5),
      currentHealth: randomVal(15, 25),
      maxHealth: 30,
    },
    enemyFour: {
      name: "Boss",
      attack: randomVal(7, 15),
      block: randomVal(3, 6),
      currentHealth: 60,
      maxHealth: 60,
    },
    rooms: [],
    finalBoss: [],
    currentRoom: 0,
    playerTurn: true,
    inCombat: false,
    isAlive: true,
    discardPile: [],
    selectedCard: [],
    selectedEnemy: [],
    attackVal: 10,
    blockVal: 0,
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useGameContext = () => {
  return useContext(GameContext);
};

export { GameProvider, useGameContext };
