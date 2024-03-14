const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Discussion {
        _id: ID!
        title: String!
        description: String!
        status: DiscussionStatus!
        creatorId: ID!
    }

    enum DiscussionStatus {
        Pending
        Resolved
        Reopened
    }

    input CreateDiscussionInput {
        title: String!
        description: String!
    }

    input UpdateDiscussionInput {
        title: String
        description: String
        status: DiscussionStatus
    }

    extend type Query {
        discussions: [Discussion!]!
        discussion(id: ID!): Discussion
    }

    extend type Mutation {
        createDiscussion(input: CreateDiscussionInput!): Discussion!
        updateDiscussion(id: ID!, input: UpdateDiscussionInput!): Discussion!
        deleteDiscussion(id: ID!): Discussion!
    }
`;

module.exports = typeDefs;
