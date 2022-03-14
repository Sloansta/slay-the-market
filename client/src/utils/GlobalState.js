import React, { createContext, useContext } from 'react';
import { useGameReducer } from './reducers';

const GameContext = createContext();
const { Provider } = GameContext;

const GameProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useGameReducer({
        currentHealth: 100,
        maxHealth: 100,
        cards: [],
        rewards: [],
        rooms: [],
        currentRoom: '',
        inCombat: false,
        isAlive: true,
        discardPile: [],
        selectedCard: {},
        attackVal: 10,
        blockVal: 0
    });
    return <Provider value={[state, dispatch]}{...props} />
};

const useGameContext = () => {
    return useContext(GameContext);
};

export { GameProvider, useGameContext };