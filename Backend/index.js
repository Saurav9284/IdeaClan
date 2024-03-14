const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { connection, PORT } = require('./Config/db');

const userSchema = require('./Schemas/user.schema');
const assignmentSchema = require('./Schemas/assignment.schema');
const discussionSchema = require('./Schemas/discussion.schema'); 
const lectureSchema = require('./Schemas/lecture.schema'); 
const courseSchema = require('./Schemas/course.schema'); 
const userResolver = require('./Resolvers/user.resolver');
const assignmentResolver = require('./Resolvers/assignment.resolver');
const discussionResolver = require('./Resolvers/discussion.resolver'); 
const lectureResolver = require('./Resolvers/lecture.resolver'); 
const courseResolver = require('./Resolvers/course.resolver'); 

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({msg:'API is live'});
});


const server = new ApolloServer({
    typeDefs: [userSchema, assignmentSchema, discussionSchema, lectureSchema, courseSchema], 
    resolvers: [userResolver, assignmentResolver, discussionResolver, lectureResolver, courseResolver], 
});


server.start().then(() => {
    server.applyMiddleware({ app });
}).catch((error) => {
    console.error('Error starting Apollo Server:', error);
});

app.listen(PORT, async () => {
    try {
        await connection;
        console.log('Connected to DataBase');
    } catch (error) {
        console.log('Error connecting to database:', error);
    }
    console.log(`Listening on PORT: ${PORT}`);
});
