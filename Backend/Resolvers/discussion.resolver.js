const DiscussionModel = require('../Models/discussion.model');

const resolvers = {
    Query: {
        discussions: async () => {
            return await DiscussionModel.find();
        },
        discussion: async (_, { id }) => {
            return await DiscussionModel.findById(id);
        }
    },
    Mutation: {
        createDiscussion: async (_, { input }) => {
            const { title, description } = input;
            const discussion = await DiscussionModel.create({
                title,
                description,
                status: 'Pending',
                creatorId: 'admin' 
            });
            return discussion;
        },
        updateDiscussion: async (_, { id, input }) => {
            const discussion = await DiscussionModel.findByIdAndUpdate(id, input, { new: true });
            return discussion;
        },
        deleteDiscussion: async (_, { id }) => {
            const discussion = await DiscussionModel.findByIdAndDelete(id);
            return discussion;
        }
    }
};

module.exports = resolvers;
