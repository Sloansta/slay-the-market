import {
    UPDATE_DECK,
    LOSE_HEALTH,
    GAIN_HEALTH,
    UPGRADE_CARD,
    CREATE_ROOM,
    DISCARD,
    ADD_TO_DECK,
    SHUFFLE_DECK,
    IS_ALIVE,
    REMOVE_FROM_DECK
} from './actions';

import { isAlive, reduceHealth, gainHealth } from './helpers';

import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case LOSE_HEALTH:
            return {
                ...state,
                // currentHealth: reduceHealth()
            };
        case GAIN_HEALTH:
            return {
                ...state,
                // currentHealth: gainHealth()
            };
        case IS_ALIVE:
            // let newState = 
            return {
                ...state,
                // isAlive: isAlive(action.isAlive)
            };
        case UPDATE_DECK:
            return {
                ...state,
                deck: [...action.deck]
            };
        case UPGRADE_CARD:
            return {

            };
        case CREATE_ROOM:
            return {

            };
        case DISCARD:
            return {
                ...state,
                discardPile: [...state.discardPile, action.card]
            };
        case ADD_TO_DECK:
            return {
                ...state,
                deck: [...state.deck, action.card]
            };
        case REMOVE_FROM_DECK:
            let newState = state.deck.filter(card => {
                return card._id !== action._id;
            });
            return {
                ...state,
                deck: newState
            }
        default:
            return state
    }
};

export function useGameReducer(initialState) {
    return useReducer(reducer, initialState);
}