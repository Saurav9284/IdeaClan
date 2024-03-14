const CourseModel = require('../Models/course.model');

const resolvers = {
    Query: {
        courses: async () => {
            return await CourseModel.find();
        },
        course: async (_, { id }) => {
            return await CourseModel.findById(id);
        }
    },
    Mutation: {
        createCourse: async (_, { input }) => {
            const { name, description, fees, duration } = input;
            const course = await CourseModel.create({
                name,
                description,
                fees,
                duration
            });
            return course;
        },
        updateCourse: async (_, { id, input }) => {
            const course = await CourseModel.findByIdAndUpdate(id, input, { new: true });
            return course;
        },
        deleteCourse: async (_, { id }) => {
            const course = await CourseModel.findByIdAndDelete(id);
            return course;
        }
    }
};

module.exports = resolvers;
