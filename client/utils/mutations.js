import { gql } from '@apollo/client';

export const LOGIN = gql`
    mutation login(
        $email: String!,
        $password: String!
    ) {
        login(
            email: $email,
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_PLAYER = gql`
    mutation addPlayer(
        $userName: String!
        $email: String!
        $password: String!
    ) {
        addPlayer(
            userName: $userName
            email: $email
            password: $password
        ) {
            token
            player {
                _id
            }
        }
    }
`;