import React from 'react';

function Icon ({ username, maxHealth, currentHealth, deck }) {
    
    return (
        <section>
            <h3>Player Name: {username}</h3>
            <h3>Player maxHealth: {maxHealth}</h3>
            <h3>Player currentHealth: {currentHealth}</h3>
            <h3>Player deck: {deck}</h3>
        </section>
    )
};

export default Icon;