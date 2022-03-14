import React from 'react';
import { useGameContext } from '../../utils/GlobalState';
import playerIcon from '../../assets/player/player-icon.png';

function Icon () {
    const [state, dispatch] = useGameContext();

    console.log(state);
    return (
        <section>
            <div className="card" style={{"width": "18rem"}}>
                <img className="card-img-top" src={playerIcon} alt="Card image cap" style={{"height": "15rem"}} />
                <div className="card-body">
                    <h5>Name: {state.userName}</h5>
                    <h5>Health: {state.currentHealth}</h5>
                </div>
            </div>
        </section>
    )
};

export default Icon;