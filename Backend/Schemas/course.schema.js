const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Course {
        _id: ID!
        name: String!
        description: String!
        fees: Float!
        duration: Int!
    }

    input CreateCourseInput {
        name: String!
        description: String!
        fees: Float!
        duration: Int!
    }

    input UpdateCourseInput {
        name: String
        description: String
        fees: Float
        duration: Int
    }

    extend type Query {
        courses: [Course!]!
        course(id: ID!): Course
    }

    extend type Mutation {
        createCourse(input: CreateCourseInput!): Course!
        updateCourse(id: ID!, input: UpdateCourseInput!): Course!
        deleteCourse(id: ID!): Course!
    }
`;

module.exports = typeDefs;
