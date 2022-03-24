import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type User {
        userName: String!
        userAge: Int!
        aboutUser: String!
    }

    type Query {
        getUsers: [User!]!
    }

    type Mutation {
        addUser(userName: String!, userAge: Int!, aboutUser: String!): User!
        deleteUser(id: String!): String
        updateUser(id: String!, userName: String!, userAge: Int!, aboutUser: String!): User!
    }
`;

export default typeDefs;