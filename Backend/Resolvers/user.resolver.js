const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../Config/db');
const UserModel = require('../Models/user.model');

const resolvers = {
    Query: {
        users: async () => {
            return await UserModel.find();
        },
        user: async (_, { id }) => {
            return await UserModel.findById(id);
        }
    },
    Mutation: {
        createUser: async (_, { input }) => {
            const { name, email, city, role, password, courses } = input;
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await UserModel.create({
                name,
                email,
                city,
                role,
                password: hashedPassword,
                courses
            });
            return user;
        },
        login: async (_, { email, password }) => {
            const user = await UserModel.findOne({ email });
            if (!user) {
                throw new Error('User not found!');
            }
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                throw new Error('Invalid password!');
            }
            const token = jwt.sign({ userId: user._id }, JWT_SECRET);
            return { token, user };
        }
    }
};

module.exports = resolvers;
