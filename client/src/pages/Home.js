import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "../App.css";
import "../assets/page-css/home.css";

import Auth from "../utils/auth";
import { useGameContext } from "../utils/GlobalState";

import Login from "./Login";
import Signup from "./Signup";

import { useQuery } from "@apollo/client";
import {
  QUERY_PLAYER,
  QUERY_ALL_CARDS,
  QUERY_ROOMS,
  QUERY_ALL_ENEMIES,
} from "../utils/queries";

import { generateRoundData } from "../utils/helpers";

import { POPULATE_CARDS, CREATE_ENEMIES } from "../utils/actions";

function Home() {
  const [state, dispatch] = useGameContext();

  const { loading, data } = useQuery(QUERY_ALL_CARDS);
  const { loading: enemyLoad, data: enemyData } = useQuery(QUERY_ALL_ENEMIES);

  useEffect(() => {
    if (data) {
      let newCards = data.cards;

      const attackStuff = data.cards[Math.random() * 10];
      console.log("Attack stuff", attackStuff);

      const attackCards = newCards.slice(0, 13);
      const blockCards = newCards.slice(14, 20);
      const healCards = newCards.slice(21, 25);
      const attackShuffled = attackCards.sort(() => 0.5 - Math.random());
      const blockShuffled = blockCards.sort(() => 0.5 - Math.random());
      const healShuffled = healCards.sort(() => 0.5 - Math.random());
      let attackSelected = attackShuffled.slice(0, 5);
      let blockSelected = blockShuffled.slice(0, 4);
      let healSelected = healShuffled.slice(0, 1);
      let selectedCards = [];
      selectedCards = attackSelected.concat(blockSelected, healSelected);
      selectedCards = selectedCards.sort(() => 0.5 - Math.random());

      console.log("SELECTED ARDS", selectedCards);

      dispatch({
        type: POPULATE_CARDS,
        cards: selectedCards,
      });

      console.log(state.cards);
    }
  }, [loading]);

  useEffect(() => {
    if (enemyData) {
      // I have tried multiple forloops; doesn't work
      // I have tried to make the enemy values random; doesn't work
      // I do not know why, it has to be a timing issue with how useEffect works.
      // My goal is to get enemy data truly random to avoid this hard coded stuff

      let rooms = [];
      let generateEnemies = [
        enemyData.enemies[randomVal(0, 13)], enemyData.enemies[randomVal(0, 13)], enemyData.enemies[randomVal(0, 13)],
        enemyData.enemies[randomVal(0, 13)], enemyData.enemies[randomVal(0, 13)], enemyData.enemies[randomVal(0, 13)],
        enemyData.enemies[randomVal(0, 13)], enemyData.enemies[randomVal(0, 13)], enemyData.enemies[randomVal(0, 13)],
        enemyData.enemies[randomVal(14, 16)]];

      rooms.push(generateEnemies);

      dispatch({
        type: CREATE_ENEMIES,
        enemies: generateEnemies,
      });

      //console.log(rooms);
      console.log(enemyData);
    }
  }, [enemyLoad]);

  console.log(state);
  //console.log(enemies.data);

  /*try {
        if(player.data && card.data)
            roundInfo = generateRoundData(player.data.player, card.data.cards, room.data);
        console.log(roundInfo);
    } catch(e) {
        console.log(e)
    }*/

  const loggedIn = Auth.loggedIn();

  return (
    <section>
      <h2>Welcome to Slay the Market!</h2>
      <section className="auth-box">
        {!loggedIn && (
          <div>
            <Login />
            <Signup />
          </div>
        )}
        <Link to={`/Player`}>
          <button className="start">Start Game</button>
        </Link>
      </section>
    </section>
  );
}

function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default Home;
