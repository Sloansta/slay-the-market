import React from 'react';

import Login from './Login';
import Signup from './Signup';


function Home () {
    return (
        <section>
            <h2>Welcome to Slay the Market!</h2>
            <Login />
            <Signup />
        </section>
    )
};

export default Home;
