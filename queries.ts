//Código de Daniel de Queiroz Cavalcanti
import { gql } from '@apollo/client'

export const SEARCH_USERS = gql`
    query searchUsers($query: String!, $type: SearchType!, $numOfResults: Int!){
        search(type: $type, query: $query, first: $numOfResults){
            nodes {
                ... on User {
                    id
                    login
                    avatarUrl
                    __typename
                }
            }
        }
    }
`;

export const GET_USER = gql`
    query get_user($login: String!){
        user(login: $login){
        name
        bio
        }
    }
`;
