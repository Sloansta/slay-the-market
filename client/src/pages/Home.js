import React from 'react';

import '../App.css';
import '../assets/page-css/home.css';
import Login from './Login';
import Signup from './Signup';


function Home () {
    return (
        <section>
            <h2>Welcome to Slay the Market!</h2>
            <section class='auth-box'>
            <Login />
            <Signup />
            </section>
            <button class='start'>
                Start Game
            </button>
        </section>
    )
};

export default Home;
