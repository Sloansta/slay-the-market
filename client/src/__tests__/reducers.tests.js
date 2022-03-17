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
    cards: [{ name: 'card1', _id: '1' }, 
    { name: 'card2', _id: '2' },
    { name: 'card3', _id: '3' }],
    rooms: [{
        enemyName: 'one',
        enemyHealth: 15
    }, {
        enemyName: 'two',
        enemyHealth: 0
    }],
    currentRoom: 1,
    inCombat: false,
    isAlive: true,
    card: [{ name: 'card' }],
    discardPile: [{ name: 'card7', name: 'card8' }]
};

test('UPDATE_DECK', () => {
    let newState = reducer(initialState, {
        type: UPDATE_DECK,
        cards: [{}, {}, {}, {}]
    });

    expect(newState.cards.length).toBe(4);
    expect(initialState.cards.length).toBe(3);
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
        currentHealth: gainHealth(100, 100)
    });

    expect(newState.currentHealth).toEqual(100);
    expect(initialState.currentHealth).toEqual(100);
});

test('IS_ALIVE', () => {
    let newState = reducer(initialState, {
        type: IS_ALIVE,
        isAlive: isAlive(100)
    });

    expect(newState.isAlive).toBe(true);
    expect(initialState.isAlive).toBe(true);
});

test('ADD_TO_DECK', () => {
    let newState = reducer(initialState, {
        type: ADD_TO_DECK,
        cards: [{}, {}, {}, {}]
    })

    expect(newState.cards.length).toBe(4);
    expect(initialState.cards.length).toBe(3);
});

test('REMOVE_FROM_DECK', () => {
    let newState = reducer(initialState, {
        type: REMOVE_FROM_DECK,
        _id: '1'
    });

    expect(newState.cards.length).toBe(2);
    expect(initialState.cards.length).toBe(3);

    let newState2 = reducer(initialState, {
        type: REMOVE_FROM_DECK,
        _id: '2'
    });

    expect(newState2.cards.length)
});

test('CHECK_ENEMY_HEALTH', () => {
    let newState = reducer(initialState, {
        type: CHECK_ENEMY_HEALTH,
        isAlive: isAlive(15)
    });

    expect(newState.isAlive).toBe(true);
    expect(initialState.isAlive).toBe(true);
});

test('NEW_ROOM', () => {
    let enemies = [{ enemyName: 'brian',
                    enemyHealth: 15 },
                    { enemyName: 'steve',
                    enemyHealth: 10 },
                    { enemyName: 'gary',
                    enemyHealth: 18 },
                    { enemyName: 'jimbo',
                    enemyHealth: 9 },
                    { enemyName: 'boss',
                    enemyHealth: 50 }]

    let newState = reducer(initialState, {
        type: NEW_ROOM,
        currentRoom: newRoom(enemies)
    })

    expect(newState.rooms).toBe(1);
    expect(initialState.rooms).toBe(1);
});

