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

function Home () {
    const player = useQuery(QUERY_PLAYER);
    const card = useQuery(QUERY_ALL_CARDS);
    const room = useQuery(QUERY_ROOMS);
    

    
    let roundInfo;
    console.log(player.data);
    console.log(card.data);

    try {
        if(player.data && card.data)
            roundInfo = generateRoundData(player.data.player, card.data.cards, room.data);
        console.log(roundInfo);
    } catch(e) {
        console.log(e)
    }

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
