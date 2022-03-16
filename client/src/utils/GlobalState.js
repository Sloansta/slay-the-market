import React, { createContext, useContext } from 'react';
import { useGameReducer } from './reducers';

const GameContext = createContext();
const { Provider } = GameContext;

const GameProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useGameReducer({
        userName: 'Temp Player',
        currentHealth: 100,
        maxHealth: 100,
        hand: [],
        cards: [],
        rewards: [],
        rooms: [],
        enemies: [],
        finalBoss: [],
        currentRoom: 0,
        playerTurn: true,
        inCombat: false,
        isAlive: true,
        discardPile: [],
        selectedCard: [],
        selectedEnemy: [],
        attackVal: 10,
        blockVal: 0
    });
    return <Provider value={[state, dispatch]}{...props} />
};

const useGameContext = () => {
    return useContext(GameContext);
};

export { GameProvider, useGameContext };