const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Lecture {
        _id: ID!
        name: String!
        creator: String!
        course: String!
        url: String!
    }

    input CreateLectureInput {
        name: String!
        course: String!
        url: String!
    }

    input UpdateLectureInput {
        name: String
        course: String
        url: String
    }

    extend type Query {
        lectures: [Lecture!]!
        lecture(id: ID!): Lecture
    }

    extend type Mutation {
        createLecture(input: CreateLectureInput!): Lecture!
        updateLecture(id: ID!, input: UpdateLectureInput!): Lecture!
        deleteLecture(id: ID!): Lecture!
    }
`;

module.exports = typeDefs;
