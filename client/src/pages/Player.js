import React, { useEffect } from "react";

import Nav from "../components/Nav";
import Icon from "../components/Icon";
import Card from "../components/Card";
import { useGameContext } from '../utils/GlobalState';
import { UPDATE_DECK, LOSE_HEALTH, IS_ALIVE, POPULATE_CARDS } from '../utils/actions';
import Auth from "../utils/auth";

import { useQuery } from "@apollo/client";
import { QUERY_PLAYER, QUERY_ALL_CARDS } from "../utils/queries";
import { idbPromise } from '../utils/idb';
import { reduceHealth, isAlive, gainHealth, useBlock } from "../utils/helpers";

function Player() {
  const [state, dispatch] = useGameContext();
  // query player object for health // starting deck
  console.log(state);
  const { loading, data } = useQuery(QUERY_PLAYER);
  // update deck in local storage and global state
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_DECK,
        cards: data.player.cards,
      });
      data.player.cards.forEach(card => {
        idbPromise('cards', 'put', card);
      });
    } else if (!loading) {
      idbPromise('cards', 'get').then(cards => {
        dispatch({
          type: UPDATE_DECK,
          cards: cards
        });
      });
    }
  }, [data, dispatch, loading]);
  // check to see if user is alive whenever user state changes
  useEffect(() => {
    isAlive(state.currentHealth);
    console.log(isAlive());
  }, [state.currentHealth, dispatch, loading, data]);
  // reduce player health based on global state attack value
  useEffect(() => {
    reduceHealth(state.currentHealth, state.attackVal);
    console.log(state.currentHealth)
  }, [state.attackVal, dispatch, loading, data])

  // const handleFormSubmit = async (event) => {
  //   try {
  //      add logic here to make isPlayerTurn = false
  //   } catch (e) {
          // console.error(e)
  //   }
  // }

  // check if user is logged in
  // const loggedIn = Auth.loggedIn();
  return (
    <section>
      <footer>
          <div>
            <div>
              <Nav />
            </div>

        <div className="player-info">
          <div>
            <Icon />
          </div>

          <div>
            <Card />
          </div>

          <button type="submit">
              End Turn
          </button>
        </div>





          </div>
      </footer>
    </section>
  );
}

export default Player;
