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
    POPULATE_CARDS,
    REMOVE_FROM_DECK,
    NEW_HAND
} from './actions';

import { isAlive, reduceHealth, gainHealth } from './helpers';

import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case LOSE_HEALTH:
            return {
                ...state,
                currentHealth: state.currentHealth
            };
        case GAIN_HEALTH:
            return {
                ...state,
                currentHealth: gainHealth(...state.currentHealth, ...state.maxHealth)
            };
        case IS_ALIVE:
            // let newState = 
            return {
                ...state,
                isAlive: isAlive(...state.currentHealth, action.isAlive)
            };
        case UPDATE_DECK:
            return {
                ...state,
                cards: [...action.cards]
            };
        case UPGRADE_CARD:
            return {

            };
        case CREATE_ROOM:
            return {
                ...state,
                rooms: [...action.rooms]
            };
        case DISCARD:
            return {
                ...state,
                discardPile: [...state.discardPile, action.selectedCard]
            };
        case ADD_TO_DECK:
            return {
                ...state,
                cards: [...state.cards, action.selectedCard]
            };
        case REMOVE_FROM_DECK:
            let newState = state.cards.filter(card => {
                return card._id !== action._id;
            });
            return {
                ...state,
                deck: newState
            };

        case POPULATE_CARDS: 
            return {
                ...state,
                cards: [...action.cards]
            };
        case NEW_HAND:
            return {
                ...state,
                hand: [...action.hand]
            }
        default:
            return state
    }
};

export function useGameReducer(initialState) {
    return useReducer(reducer, initialState);
}