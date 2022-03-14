import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import '../assets/page-css/home.css';

import Auth from '../utils/auth';

import Login from './Login';
import Signup from './Signup';

import { useQuery } from '@apollo/client';
import { QUERY_PLAYER, QUERY_ALL_CARDS, QUERY_ROOMS } from '../utils/queries';

function handleDataGeneration(player, cards, room) {

    if(player.cards.length <= 0) {
        // a test to see if a card will get added to the player data
        // will finish getting this working tomorrow
        player.cards.push(randomVal(0, cards.length));
        console.log(room);
    }
}

function Home () {
    const player = useQuery(QUERY_PLAYER);
    const card = useQuery(QUERY_ALL_CARDS);
    const room = useQuery(QUERY_ROOMS);

    
    console.log(player.data);
    console.log(card.data);
    console.log(room.data);

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
                    <button className='start' onClick={handleDataGeneration}>
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
