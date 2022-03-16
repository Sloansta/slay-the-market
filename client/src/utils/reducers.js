import {
    UPDATE_DECK,
    LOSE_HEALTH,
    GAIN_HEALTH,
    UPGRADE_CARD,
    CREATE_ENEMIES,
    DISCARD,
    ADD_TO_DECK,
    SHUFFLE_DECK,
    IS_ALIVE,
    POPULATE_CARDS,
    REMOVE_FROM_DECK,
    NEW_HAND,
    SELECTED_CARD,
    SELECTED_ENEMY,
    NEW_ROOM
} from './actions';

import { isAlive, reduceHealth, gainHealth } from './helpers';

import { useReducer } from 'react';

export const reducer = (state, action) => {
    
    switch (action.type) {
        case LOSE_HEALTH:
            return {
                ...state,
                currentHealth: action.currentHealth
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
        case CREATE_ENEMIES:
            return {
                ...state,
                enemies: [...action.enemies]
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
            };
        case SELECTED_CARD:
            let thisCard = action.selectedCard
            return {
                ...state,
                selectedCard: thisCard
            };
        case SELECTED_ENEMY:
            return {
                ...state,
                selectedEnemy: action.selectedEnemy
            }
        case NEW_ROOM: 
            return {
                ...state,
                currentRoom: action.newRoom
            };
        default:
            return state
    }
};

export function useGameReducer(initialState) {
    return useReducer(reducer, initialState);
}