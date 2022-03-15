import React from 'react';
import { useGameContext } from '../../utils/GlobalState';

function Enemy () {
  const [state, dispatch] = useGameContext();
  
  const renderEnemies = state.rooms[0][0].map((enemy, index) =>
    <div className="enemy card" style={{"width": "25rem", "height": "10rem"}}>
            <div className="card-body">
                <h5 key={index}>Name: {enemy.name}</h5>
                <h5>Health: {enemy.currentHealth}</h5>
            </div>
    </div>
    // <div className="enemies">
    //     <h2 key={index}>{enemy.name}</h2>
    //     <h2>Health: {enemy.currentHealth}</h2>
    // </div>
  );

  return (
    <section>
        <div className="card-deck">
            {renderEnemies}
        </div>
    </section>
    )
};

export default Enemy;