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

import { POPULATE_CARDS, CREATE_ROOM } from "../utils/actions";

function Home() {
  const [state, dispatch] = useGameContext();

  const { loading, data } = useQuery(QUERY_ALL_CARDS);
  const { loading: enemyLoad, data: enemyData } = useQuery(QUERY_ALL_ENEMIES);

  useEffect(() => {
    if (data) {
      let newCards = [
        data.cards[5],
        data.cards[6],
        data.cards[7],
        data.cards[8],
        data.cards[9],
        data.cards[18],
        data.cards[19],
        data.cards[20],
        data.cards[17],
        data.cards[22],
      ];
      dispatch({
        type: POPULATE_CARDS,
        cards: newCards,
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
        [enemyData.enemies[5], enemyData.enemies[3], enemyData.enemies[10]],
        [enemyData.enemies[10], enemyData.enemies[11], enemyData.enemies[0]],
        [enemyData.enemies[12], enemyData.enemies[2], enemyData.enemies[7]],
      ];

      rooms.push(generateEnemies);

      dispatch({
        type: CREATE_ROOM,
        rooms: rooms,
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
  return Math.floor(Math.random() * (min - max)) + min;
}

export default Home;
