import React, { useState } from 'react';

import Nav from '../components/Nav';
import Icon from '../components/Icon';
import Card from '../components/Card';

import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_PLAYER } from '../utils/queries';

function Player () {
    const { data, player } = useQuery(QUERY_PLAYER);

    console.log(player);

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
                    </div>
                </div>

            )} 
            </footer>

        </section>
    )
}

export default Player;