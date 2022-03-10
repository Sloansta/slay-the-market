import React from 'react';

import Nav from '../components/Nav';
import Icon from '../components/Icon';
import Card from '../components/Card';

function Player () {

    return (
        <section>
            <div>
                <Nav />
            </div>
            

            <footer>
                <div>
                    <Icon />
                </div>
            
                <div>
                    <Card />
                </div>
            </footer>

        </section>
    )
}

export default Player;