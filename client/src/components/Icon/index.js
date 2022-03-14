import React from 'react';

function Icon ({username, health}) {
    
    return (
        <section>
            <h3>Player Name: {username}</h3>
            <h3>Player Health: {health}</h3>

        </section>
    )
};

export default Icon;