import React, { useEffect, useState } from "react";
import { LOSE_HEALTH, SELECTED_ENEMY } from "../../utils/actions";
import { stat } from "fs";

import { useGameContext } from "../../utils/GlobalState";
import { reduceHealth } from "../../utils/helpers";

function Enemy() {
  const [state, dispatch] = useGameContext();
  // const [enemyHealth, setEnemyHealth] = useState(enemyHealth);
  //debugger;
  function selectedEnemy(index) {
    if (state.selectedEnemy && state.selectedCard.length !== 0) {
      let enemyHealth = reduceHealth(
        state.enemies[index].currentHealth,
        state.selectedCard.value
      );
      console.log('enemy health is now' + enemyHealth);
      dispatch({
        type: SELECTED_ENEMY,
        selectedEnemy: state.enemies[index],
      });
      dispatch({
        type: LOSE_HEALTH,
        currentHealth: enemyHealth,
      });
    }
    if (state.enemies[index].currentHealth <= 0) {
      document.getElementById('target').style.opacity = "25%";
    }

    console.log(state);
  }

  // const renderEnemies = state.enemies.map((enemy, index) =>
  //   <div className="enemy card" style={{"width": "25rem", "height": "10rem"}} onClick={() => selectedEnemy(index)}>
  //           <div className="card-body">
  //               <h5>Name: {enemy.name}</h5>
  //               <h5>Health: {enemy.currentHealth}</h5>
  //               <h5>Block: {enemy.blockVal}</h5>
  //           </div>
  //   </div>
  // );

  return (
    <section>
      <div className="card-deck">
        <div
          className="enemy card"
          id="target"
          key="0"
          style={{ width: "25rem", height: "10rem" }}
          onClick={() => selectedEnemy(0)}
        >
          <div className="card-body">
            <h5>Name: {state.enemies[state.currentRoom].name}</h5>
            <h5>Health: {state.enemies[state.currentRoom].currentHealth}</h5>
            <h5>Block: {state.enemies[state.currentRoom].blockVal}</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enemy;
