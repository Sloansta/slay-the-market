import React, { useEffect } from 'react';

import Nav from '../components/Nav';
import Icon from '../components/Icon';
import Card from '../components/Card';

import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_PLAYER, QUERY_ALL_CARDS } from '../utils/queries';
import { dummyCards, dummyPlayer } from '../utils/dummy';
import { useGameContext } from '../utils/GlobalState';
import { UPDATE_DECK, LOSE_HEALTH, GAIN_HEALTH, DISCARD } from '../utils/actions';

function Player () {
    // const [state, dispatch] = useGameContext();

    const { data: playerData } = useQuery(QUERY_PLAYER);
    const { data: cardData } = useQuery(QUERY_ALL_CARDS);

    const loggedIn = Auth.loggedIn();

    console.log('player data: ' + playerData);
    console.log('card data: ' + cardData);
    console.log(dummyCards, dummyPlayer);

    return (
        <section>           

            <footer>
            {/* {loggedIn && playerData ? ( */}
                <div>
                    <div>
                        <Nav />
                    </div>

                    <div>
                        <Icon />
                    </div>
                    <div>
                        <Card />
                    </div>
                </div>


            {/* ): null} */}
            </footer>

        </section>
    )
}

export default Player;