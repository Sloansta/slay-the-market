import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import '../assets/page-css/home.css';

import Auth from '../utils/auth';

import Login from './Login';
import Signup from './Signup';

function Home () {
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

export default Home;
