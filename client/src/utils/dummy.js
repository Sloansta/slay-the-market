const Cards = [
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

const Player = {
    userName: 'testName',
    maxHealth: 100,
    currentHealth: 90,
    deck: [
        Cards[0],
        Cards[1],
        Cards[2],
        Cards[3],
        Cards[4],
        Cards[5],
        Cards[6]
    ]
};

const Enemy = {
    currentHealth: 30,
    maxHealth: 40,
    isBoss: false,
    attack: 7,
    block: 12
}

export default { Cards, Player, Enemy }