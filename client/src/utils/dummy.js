// dummy play, card and enemy data for testing gameplay elements
// import into components
const dummyCards = [
    {
        name: 'card1',
        value: 6
    },
    {
        name: 'card2',
        value: 12
    },
    {
        name: 'card3',
        value: 7
    },
    {
        name: 'card4',
        value: 8
    },
    {
        name: 'card5',
        value: 9
    },
    {
        name: 'card6',
        value: 3
    },
    {
        name: 'card7',
        value: 9
    }
];

const dummyPlayer = {
    userName: 'testName',
    maxHealth: 100,
    currentHealth: 90,
    deck: [
        dummyCards[0],
        dummyCards[1],
        dummyCards[2],
        dummyCards[3],
        dummyCards[4],
        dummyCards[5],
        dummyCards[6]
    ]
};

const dummyEnemy = {
    currentHealth: 30,
    maxHealth: 40,
    isBoss: false,
    attack: 7,
    block: 12
}

export { dummyCards, dummyPlayer, dummyEnemy }