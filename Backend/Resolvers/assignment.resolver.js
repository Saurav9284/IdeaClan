const AssignmentModel = require('../Models/assignment.model');

const resolvers = {
    Query: {
        assignments: async () => {
            return await AssignmentModel.find();
        },
        assignment: async (_, { id }) => {
            return await AssignmentModel.findById(id);
        }
    },
    Mutation: {
        createAssignment: async (_, { input }) => {
            const { title, category, deadline } = input;
            const assignment = await AssignmentModel.create({
                title,
                category,
                creator: 'admin', 
                deadline
            });
            return assignment;
        },
        updateAssignment: async (_, { id, input }) => {
            const assignment = await AssignmentModel.findByIdAndUpdate(id, input, { new: true });
            return assignment;
        },
        deleteAssignment: async (_, { id }) => {
            const assignment = await AssignmentModel.findByIdAndDelete(id);
            return assignment;
        }
    }
};

module.exports = resolvers;
