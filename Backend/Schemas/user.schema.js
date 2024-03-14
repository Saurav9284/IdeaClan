const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String!
        city: String!
        role: UserRole!
        courses: [String!]!
    }

    enum UserRole {
        student
        admin
        instructor
    }

    input CreateUserInput {
        name: String!
        email: String!
        city: String!
        role: UserRole!
        password: String!
        courses: [String!]!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        login(email: String!, password: String!): AuthPayload!
    }

    type AuthPayload {
        token: String!
        user: User!
    }
`;

module.exports = typeDefs;
