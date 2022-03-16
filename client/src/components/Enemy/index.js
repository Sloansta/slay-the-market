import React, { useEffect, useState } from "react";
import {
  LOSE_HEALTH,
  SELECTED_ENEMY,
  CREATE_ENEMIES,
} from "../../utils/actions";

import { useGameContext } from "../../utils/GlobalState";
import { reduceHealth } from "../../utils/helpers";

function Enemy() {
  const [state, dispatch] = useGameContext();

  function selectedEnemy(index) {
    let selectedEnemy = state.enemies[index];
    console.log("Selected Enemy ", selectedEnemy);

    if (state.selectedCard.length !== 0) {
      let enemyHealth = reduceHealth(
        state.enemies[index].currentHealth,
        state.selectedCard.value
      );
      console.log("enemy health is now " + enemyHealth);

      if (state.selectedEnemy.length === 0) {
        dispatch({
          type: SELECTED_ENEMY,
          selectedEnemy: state.enemies[index],
        });
      }

      let monsterName = state.enemies[index].name;
      console.log("Enemy name: ", monsterName);

      const newArray = Array.from(state.enemies);
      console.log("new array: ", newArray);
      // const newArray = selectedEnemy.map((obj) => {
      //   if (obj.name === monsterName) {
      //     return { ...obj, currentHealth: enemyHealth };
      //   }
      // });
      //  console.log(newArray);
      // should not be needed
      let anotherTestArray = [];
      let i;
      // debugger;
      state.enemies.forEach((object) => {
        console.log("ENEMIES", object);
        if (selectedEnemy.name === object.name) {
          console.log("We have a match");
          ///selectedEnemy.health =
          // state.setState({selectedEnemy.currentHealth : 77});
          //  debugger;
          // const setEnemyHealth = (enemyHealth) => {
          //   setEnemyHealth({
          //     ...state.enemies.currentHealth,
          //     [selectedEnemy.currentHealth]: enemyHealth,
          //   });
          // };

          this.setState((prevState) => ({
            enemies: {
              ...prevState.state.enemies,
              currentHealth: enemyHealth,
            },
          }));
        } // end of forEach

        //   anotherTestArray[i] = {
        //     __typename: "Enemy",
        //     name: "I am a fricken test",
        //     attack: 77,
        //     block: 77,
        //     currentHealth: 77,
        //     isBoss: false,
        //     maxHealth: 77,
        //   };
        i++;
      });

      //console.log("AnotherTest", anotherTestArray);
      newArray.push({
        __typename: "Enemy",
        name: "I am a fricken test",
        attack: 77,
        block: 77,
        currentHealth: 77,
        isBoss: false,
        maxHealth: 77,
      });
      // newArray[0].currentHealth = 7777;
      // state.setState({state.enemies[index].currentHealth : 77});
      //state.enemies[index].setState({ currentHealth: 777 });

      dispatch({
        type: CREATE_ENEMIES,
         enemies: newArray,
       // enemies: state.enemies,
      });

      // console.log(selectedEnemy);
    }
    if (state.enemies[index].currentHealth <= 0) {
      document.getElementById("target").style.opacity = "25%";
    }

    /// console.log(state);
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
