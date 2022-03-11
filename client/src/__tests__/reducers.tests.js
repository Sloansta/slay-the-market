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
} from '../utils/actions';

import { reducer } from '../util/reducers';
import { reduceHealth, gainHealth, isAlive } from '../utils/helpers'

const initialState = {
    currentHealth: 100,
    deck: [{ name: 'card1', _id: '1' }, 
    { name: 'card2', _id: '2' },
    { name: 'card3', _id: '3' }],
    cards: [{ name: 'card4'},
    { name: 'card5' },
    { name: 'card6' }],
    rooms: ['room1', 'room2', 'room3'],
    currentRoom: 'room1',
    inCombat: false,
    isAlive: true,
    card: [{ name: 'card' }],
    discardPile: [{ name: 'card7', name: 'card8' }]
};

test('UPDATE_DECK', () => {
    let newState = reducer(initialState, {
        type: UPDATE_DECK,
        deck: [{}, {}, {}, {}]
    });

    expect(newState.deck.length).toBe(4);
    expect(initialState.deck.length).toBe(3);
});

test('LOSE_HEALTH', () => {
    let newState = reducer(initialState, {
        type: LOSE_HEALTH,
        currentHealth: reduceHealth(currentHealth, 20)
    });

    expect(newState.currentHealth).toEqual(80);
    expect(initialState.currentHealth).toEqual(100);
});

test('GAIN_HEALTH', () => {
    let newState = reducer(initialState, {
        type: GAIN_HEALTH,
        currentHealth: gainHealth(currentHealth)
    });

    expect(newState.currenHealth).toEqual(100);
    expect(initialState.currentHealth).toEqual(100);
});

test('IS_ALIVE', () => {
    let newState = reducer(initialState, {
        type: IS_ALIVE,
        isAlive: isAlive(currentHealth, isAlive)
    });

    expect(newState.isAlive).toBe(true);
    expect(initialState.isAlive).toBe(true);
});

test('ADD_TO_DECK', () => {
    let newState = reducer(initialState, {
        type: ADD_TO_DECK,
        deck: [{}, {}, {}, {}]
    })

    expect(newState.deck.length).toBe(4);
    expect(initialState.deck.length).toBe(3);
});

test('REMOVE_FROM_DECK', () => {
    let newState = reducer(initialState, {
        type: REMOVE_FROM_DECK,
        _id: '1'
    });

    expect(newState.deck.length).toBe(2);
    expect(initialState.deck.length).toBe(3);
})