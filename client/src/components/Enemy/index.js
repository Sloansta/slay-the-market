import React, { useEffect, useState } from "react";
import {
  LOSE_HEALTH,
  SELECTED_ENEMY,
  LOSE_HEALTH_ENEMY_1,
  LOSE_HEALTH_ENEMY_2,
  LOSE_HEALTH_ENEMY_3,
  LOSE_HEALTH_ENEMY_4,
  NEW_ROOM,
} from "../../utils/actions";
import { stat } from "fs";

import { useGameContext } from "../../utils/GlobalState";
import { reduceHealth } from "../../utils/helpers";
import boredApe from '../../assets/sprites/boredape.png'

function Enemy() {
  const [state, dispatch] = useGameContext();
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  let enemyHealth;
  let newRoom = state.currentRoom;
  // const [enemyHealth, setEnemyHealth] = useState(enemyHealth);
  // debugger;
  function selectedEnemy(index, e) {
    e.preventDefault();
    function changeEnemyHealth(room, enemyNumber, loseHealthNum) {
      if (state.selectedCard.length !== 0) {
        console.log(".5");
        enemyHealth = reduceHealth(
          state[`${enemyNumber}`],
          state.selectedCard.value
        );
        console.log("state.currentroom ", state.currentRoom);
        console.log("Room ", room);
        if (state.currentRoom === room) {
          // debugger;
          console.log("1");

          const dispatchObject = {};
          dispatchObject[`${enemyNumber}`] = enemyHealth;
          dispatchObject.type = loseHealthNum;
          dispatch(dispatchObject);
          if (enemyHealth <= 0) {
            console.log("2");
            let nextRoom = state.currentRoom + 1;
            // nextRoom = nextRoom + 1;

            console.log(nextRoom);
            dispatch({
              type: NEW_ROOM,
              currentRoom: nextRoom,
            });
          }
        }
      }


      // if (state.selectedCard.length !== 0) {
      //   enemyHealth = reduceHealth(
      //     state.enemyOneHealth,
      //     state.selectedCard.value
      //   );
      //   console.log("enemy health is now" + enemyHealth);

      // if (state.currentRoom === 0) {
      //   dispatch({
      //     type: LOSE_HEALTH_ENEMY_1,
      //     enemyOneHealth: enemyHealth,
      //   });
      //   if (enemyHealth <= 0) {
      //     console.log(newRoom);
      //     dispatch({
      //       type: NEW_ROOM,
      //       currentRoom: newRoom,
      //     });
      //   }
      // }
    }
    console.log(state);
    // Switch statements to call different rooms and enemies
    console.log("NewRoom: ", newRoom);
    switch (newRoom) {
      case 0:
        changeEnemyHealth(0, "enemyOneHealth", LOSE_HEALTH_ENEMY_1);
        break;

      case 1:
        changeEnemyHealth(1, "enemyTwoHealth", LOSE_HEALTH_ENEMY_2);
        break;
      case 2:
        changeEnemyHealth(2, "enemyThreeHealth", LOSE_HEALTH_ENEMY_3);
        break;

      case 3:
        changeEnemyHealth(3, "enemyFourHealth", LOSE_HEALTH_ENEMY_4);
        break;

      default:
      // changeEnemyHealth(3, "enemyFourHealth", LOSE_HEALTH_ENEMY_4);
    }
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
                <img src={boredApe} />
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
            {state.currentRoom === 3 ? (
              <div className="card-body">
                <h5>Name: {state.enemies[state.currentRoom].name}</h5>
                <h5>Health: {state.enemyFourHealth}</h5>
                <h5>Block: {state.enemies[state.currentRoom].blockVal}</h5>
              </div>
            ) : null}
            {state.currentRoom === 4 ? (
              <div className="card-body">
                <h1>YOU WIN!</h1>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Enemy;
