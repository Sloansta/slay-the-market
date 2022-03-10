import {
    UPDATE_CARDS,
    UPDATE_DECK,
    LOSE_HEALTH,
    GAIN_HEALTH,
    UPGRADE_CARD,
    CREATE_ROOM
} from './actions';

import { useReducer } from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case LOSE_HEALTH:
            return {

            };
        case GAIN_HEALTH:
            return {

            };
        case UPDATE_CARDS:
            return {

            };
        case UPDATE_DECK:
            return {

            };
        case UPGRADE_CARD:
            return {

            };
        case CREATE_ROOM:
            return {

            };
        default:
            return state
    }
};

export function useGameReducer(initialState) {
    return useReducer(reducer, initialState);
}