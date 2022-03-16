import React, { useEffect, useState } from "react";
import { LOSE_HEALTH, SELECTED_ENEMY, LOSE_HEALTH_ENEMY_1, LOSE_HEALTH_ENEMY_2, LOSE_HEALTH_ENEMY_3, NEW_ROOM } from "../../utils/actions";
import { stat } from "fs";

import { useGameContext } from "../../utils/GlobalState";
import { reduceHealth } from "../../utils/helpers";

function Enemy() {
  const [state, dispatch] = useGameContext();
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), [])
  let enemyHealth;
  let newRoom = 1;
  // const [enemyHealth, setEnemyHealth] = useState(enemyHealth);
  // debugger;
  function selectedEnemy(index, e) {
    e.preventDefault();
    if (state.selectedCard.length !== 0) {
      enemyHealth = reduceHealth(
        state.enemyOneHealth,
        state.selectedCard.value
      );
      console.log('enemy health is now' + enemyHealth);

      if (state.currentRoom === 0) {
          dispatch({
          type: LOSE_HEALTH_ENEMY_1,
          enemyOneHealth: enemyHealth
        });
        if (enemyHealth <= 0) {
          dispatch({
            type: NEW_ROOM,
            currentRoom: newRoom
          })
        }
      }
    }
    console.log(state);
  }

    // switch (state.currentRoom) {
    //   case 0:
    //     dispatch({
    //       type: LOSE_HEALTH_ENEMY_1,
    //       enemyOneHealth: enemyHealth
    //     });
    //     break;
    //   case 1:
    //     dispatch({
    //     type: LOSE_HEALTH_ENEMY_2,
    //     enemyTwoHealth: enemyHealth
    //   });
    //     break;
    //   case 2:
    //     dispatch({
    //       type: LOSE_HEALTH_ENEMY_3,
    //       enemyThreeHealth: enemyHealth
    //     });
    //     break;
    // }
      // dispatch({
      //   type: SELECTED_ENEMY,
      //   selectedEnemy: state.enemies[index],
      // });
      // dispatch({
      //   type: LOSE_HEALTH,
      //   currentHealth: enemyHealth,
      // });
    // }
    // if (state.enemies[index].currentHealth <= 0) {
    //   document.getElementById('target').style.opacity = "25%";
    // }

  //   console.log(state);
  // }

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
          onClick={(e) => selectedEnemy(0, e)}
          onChange={forceUpdate}
        >
          <div>
            {state.currentRoom === 0 ? (
              <div className="card-body">
                <h5>Name: {state.enemies[state.currentRoom].name}</h5>
                <h5>Health: {state.enemyOneHealth}</h5>
                <h5>Block: {state.enemies[state.currentRoom].blockVal}</h5>
              </div>
            ) : null}
            {state.currentRoom === 1 ? (
              <div className="card-body">
                <h5>Name: {state.enemies[state.currentRoom].name}</h5>
                <h5>Health: {state.enemyTwoHealth}</h5>
                <h5>Block: {state.enemies[state.currentRoom].blockVal}</h5>
              </div>
            ) : null}
            {state.currentRoom === 2 ? (
              <div className="card-body">
                <h5>Name: {state.enemies[state.currentRoom].name}</h5>
                <h5>Health: {state.enemyThreeHealth}</h5>
                <h5>Block: {state.enemies[state.currentRoom].blockVal}</h5>
              </div>
            ) : null}
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Enemy;
