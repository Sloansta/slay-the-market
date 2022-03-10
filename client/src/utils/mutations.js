import { gql } from '@apollo/client';

// login an existing user, currently uses email to login (maybe change to just username instead?)
export const LOGIN_PLAYER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password)
            token
            user {
                _id
                username
            }
    }
`;

export const ADD_PLAYER = gql`
    mutation addPlayer($username: String!, $email: String!, $password: String!) {
        addPlayer(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_ENEMY = gql`
    mutation addEnemy($name: String!, $currentHealth: Number!, $maxHealth: Number!) {
        addEnemy(name: $name, currentHealth: $currentHealth, maxHealth: $maxHealth) {
            enemy {
                name
                currentHealth
                maxHealth
            }
        }
    }
`;