import React, { useState } from "react";

import Nav from "../components/Nav";
import Icon from "../components/Icon";
import Card from "../components/Card";

import Auth from "../utils/auth";

import { useQuery } from "@apollo/client";
import { QUERY_PLAYER, QUERY_ALL_CARDS } from "../utils/queries";

function Player() {
  const { data } = useQuery(QUERY_PLAYER);
  let player;
  if (data) {
    player = data.player;
    console.log("Player: ", player);
  } 

  // const { cards, maxHealth, currentHealth } = player;
  
  const loggedIn = Auth.loggedIn();
 // console.log(data);
  return (
    <section>
      <footer>
        {/* {loggedIn && ( */}
          <div>
            <div>
              <Nav />
            </div>

            <div>
              <Icon />
            </div>
            {data ? (
              <div>
              {data.player.cards.forEach((card) => (
                <h1>{card.name}</h1>
              ))}
              </div>
            ) : null}
          </div>
        {/* // )} */}
      </footer>
    </section>
  );
}

export default Player;
