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
  } 

  const loggedIn = Auth.loggedIn();


  return (
    <section>
      <footer>
        {loggedIn && ( 
          <div>
            <div>
              <Nav />
            </div>

            <div>
              <Icon />
            </div>

            <div>
              <Card />
              {data ? `${data.player.cards[0]._id}` : null}
            </div>
          </div>
        )} 
      </footer>
    </section>
  );
}

export default Player;
