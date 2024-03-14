const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Assignment {
        _id: ID!
        title: String!
        category: AssignmentCategory!
        creator: String!
        deadline: String!
    }

    enum AssignmentCategory {
        DSA
        coding
        CSBT
    }

    input CreateAssignmentInput {
        title: String!
        category: AssignmentCategory!
        deadline: String!
    }

    input UpdateAssignmentInput {
        title: String
        category: AssignmentCategory
        deadline: String
    }

    extend type Query {
        assignments: [Assignment!]!
        assignment(id: ID!): Assignment
    }

    extend type Mutation {
        createAssignment(input: CreateAssignmentInput!): Assignment!
        updateAssignment(id: ID!, input: UpdateAssignmentInput!): Assignment!
        deleteAssignment(id: ID!): Assignment!
    }
`;

module.exports = typeDefs;
