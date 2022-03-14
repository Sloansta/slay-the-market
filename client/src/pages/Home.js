import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import '../assets/page-css/home.css';

import Auth from '../utils/auth';

import Login from './Login';
import Signup from './Signup';

import { useQuery } from '@apollo/client';
import { QUERY_PLAYER, QUERY_ALL_CARDS, QUERY_ROOMS } from '../utils/queries';

import { generateRoundData } from '../utils/helpers';

import { useGameContext } from '../utils/GlobalState';
import { POPULATE_CARDS } from '../utils/actions';

function Home () {

    const [state, dispatch] = useGameContext();

    const player = useQuery(QUERY_PLAYER);
    const { loading, data } = useQuery(QUERY_ALL_CARDS);
    //const// room = useQuery(QUERY_ROOMS);

    useEffect(() => {
        if(data) {
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
                cards: newCards
            });

            console.log(state.cards);
        }
    }, [loading]);
    

    console.log(state);
    //console.log(card.data);

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
            <section className='auth-box'>
                {!loggedIn &&
                    <div>
                        <Login />
                        <Signup />
                    </div>
                }
                <Link to={`/Player`}>
                    <button className='start'>
                        Start Game
                    </button>
                </Link>

            </section>

        </section>
    )
};

function randomVal(min, max) {
    return Math.floor(Math.random() * (min - max)) + min;
}

export default Home;
