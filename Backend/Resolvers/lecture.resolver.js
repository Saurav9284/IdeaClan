const LectureModel = require('../Models/lecture.model');

const resolvers = {
    Query: {
        lectures: async () => {
            return await LectureModel.find();
        },
        lecture: async (_, { id }) => {
            return await LectureModel.findById(id);
        }
    },
    Mutation: {
        createLecture: async (_, { input }) => {
            const { name, course, url } = input;
            const lecture = await LectureModel.create({
                name,
                creator: 'admin', 
                course,
                url
            });
            return lecture;
        },
        updateLecture: async (_, { id, input }) => {
            const lecture = await LectureModel.findByIdAndUpdate(id, input, { new: true });
            return lecture;
        },
        deleteLecture: async (_, { id }) => {
            const lecture = await LectureModel.findByIdAndDelete(id);
            return lecture;
        }
    }
};

module.exports = resolvers;
