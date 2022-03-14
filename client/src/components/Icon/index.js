import React from 'react';
import { playerContext } from '../../utils/GlobalState';

function Icon () {
    const {playerStats, setPlayerStats} = useContext(playerContext);

    return (
        <section>
            <h3>Player Name: {username}</h3>
            <h3>Player Health: {health}</h3>

        </section>
    )
};

export default Icon;