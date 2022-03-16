import React, { useEffect, useState } from "react";
import { LOSE_HEALTH, SELECTED_ENEMY, CREATE_ENEMIES } from "../../utils/actions";
import { stat } from "fs";

import { useGameContext } from "../../utils/GlobalState";
import { reduceHealth } from "../../utils/helpers";

function Enemy() {
  const [state, dispatch] = useGameContext();
  // const [enemyHealth, setEnemyHealth] = useState(enemyHealth);
  //debugger;
  function selectedEnemy(index) {
    let selectedEnemy = state.enemies;

    // console.log(selectedEnemy);

    if (state.selectedCard.length !== 0) {
      let enemyHealth = reduceHealth(
        state.enemies[index].currentHealth,
        state.selectedCard.value
      );
      console.log('enemy health is now ' + enemyHealth);
 
      // if (state.selectedEnemy.length === 0) {
      //   dispatch({
      //   type: SELECTED_ENEMY,
      //   selectedEnemy: state.enemies[index],
      //   });
      // }
      // selectedEnemy[index].currentHealth = enemyHealth

      let monsterId = state.enemies[index].name

      console.log('test')
      const newArray = selectedEnemy.map( obj => {
        if (obj.name === monsterId) {
          return {...obj, 
            currentHealth: enemyHealth
          }
        }
      })
      console.log(newArray);

        dispatch({
        type: CREATE_ENEMIES,
        enemies: newArray,
      });

      console.log(selectedEnemy);

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
            <h5>Name: {state.enemies[0].name}</h5>
            <h5>Health: {state.enemies[0].currentHealth}</h5>
            <h5>Block: {state.enemies[0].blockVal}</h5>
          </div>
        </div>
      </div>

      <div className="card-deck">
        <div
          className="enemy card"
          key="1"
          style={{ width: "25rem", height: "10rem" }}
          onClick={() => selectedEnemy(1)}
        >
          <div className="card-body">
            <h5>Name: {state.enemies[1].name}</h5>
            <h5>Health: {state.enemies[1].currentHealth}</h5>
            <h5>Block: {state.enemies[1].blockVal}</h5>
          </div>
        </div>
      </div>

      <div className="card-deck">
        <div
          className="enemy card"
          key="2"
          style={{ width: "25rem", height: "10rem" }}
          onClick={() => selectedEnemy(2)}
        >
          <div className="card-body">
            <h5>Name: {state.enemies[2].name}</h5>
            <h5>Health: {state.enemies[2].currentHealth}</h5>
            <h5>Block: {state.enemies[2].blockVal}</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enemy;
