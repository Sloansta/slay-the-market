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
    REMOVE_FROM_DECK,
    CHECK_ENEMY_HEALTH,
    NEW_ROOM
} from '../utils/actions';

import { reducer } from '../utils/reducers';
import { reduceHealth, gainHealth, isAlive, newRoom } from '../utils/helpers'

const initialState = {
    currentHealth: 100,
    deck: [{ name: 'card1', _id: '1' }, 
    { name: 'card2', _id: '2' },
    { name: 'card3', _id: '3' }],
    cards: [{ name: 'card4'},
    { name: 'card5' },
    { name: 'card6' }],
    rooms: [{
        enemyName: 'one',
        enemyHealth: 15
    }, {
        enemyName: 'two',
        enemyHealth: 0
    }, 'room3'],
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
        currentHealth: reduceHealth(100, 20)
    });

    expect(newState.currentHealth).toEqual(80);
    expect(initialState.currentHealth).toEqual(100);
});

test('GAIN_HEALTH', () => {
    let newState = reducer(initialState, {
        type: GAIN_HEALTH,
        currentHealth: gainHealth(100)
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
});

test('CHECK_ENEMY_HEALTH', () => {
    let newState = reducer(initialState, {
        type: CHECK_ENEMY_HEALTH,
        rooms: isAlive(rooms[1].enemyHealth)
    });

    expect(newState.rooms).toBe(true);
    expect(initialState.rooms).toBe(true);
});

test('NEW_ROOM', () => {
    let newState = reducer(initialState, {
        type: NEW_ROOM,
        rooms: newRoom(rooms)
    })

    expect(newState.rooms).toBe(1);
    expect(initialState.rooms).toBe(1);
})