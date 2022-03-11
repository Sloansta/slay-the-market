import { gql }  from '@apollo/client';
/* 

could potentially query cards based on values?

*/
export const QUERY_ALL_CARDS = gql`
    {
        cards {
            _id
            name
            description
            class
            value
            upgrade
        }
    }
`;

export const QUERY_ALL_ENEMIES = gql`
    {
        enemies {
            name
            currentHealth
            maxHealth
            intents
        }
    }
`;

export const QUERY_PLAYER = gql`
    {
        player {
            username
            email
            maxHealth
            currentHealth
            deck
        }
    }
`;

export const QUERY_ROOMS = gql`
    {
        rooms {
            _id
            bgImage
            enemies
        }
    }
`;