import React from 'react';
import { dummyPlayer } from '../../utils/dummy';

function Icon ( /* { username, maxHealth, currentHealth, deck } */) {
    const {
        maxHealth,
        currentHealth,
        userName,
        deck
    } = dummyPlayer;
    return (
        <section>
            <h3>Player Name: {userName}</h3>
            <h3>Player maxHealth: {maxHealth}</h3>
            <h3>Player currentHealth: {currentHealth}</h3>
            {/* <h3>Player deck: {deck}</h3> */}
        </section>
    )
};

export default Icon;