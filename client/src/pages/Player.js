import React, { useState } from "react";

import Nav from "../components/Nav";
import Icon from "../components/Icon";
import Card from "../components/Card";

import { useQuery } from "@apollo/client";
import { QUERY_PLAYER } from "../utils/queries";
import { playerContext } from '../utils/GlobalState';

function Player() {
  const [playerStats, setPlayerStats] = useState('');

  const { data } = useQuery(QUERY_PLAYER);

  let player;
  let health;

  if (data) {
    player = data.player.userName;
    health = data.player.maxHealth;
  }

  return (
    <section>
      <footer>
          <div>
            <div>
              <Nav />
            </div>

            <div>
              <playerContext.Provider value={playerStats}>
                <Icon />
              </playerContext.Provider>
            </div>

            <div>
              <Card />
              {data ? `${data.player.cards.map( card => card._id)}` : null}
            </div>
          </div>
      </footer>
    </section>
  );
}

export default Player;
