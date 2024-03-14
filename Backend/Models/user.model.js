const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); 
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    city: { type: String, required: true },
    Id: { type: String, required: true },
    role: { type: String, enum: ["student", "admin", "instructor"], required: true },
    password: { 
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(v); 
            },
            message: props => `${props.value} is not a valid password. It must contain at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character.`
        }
    },
    courses: { type: String, enum: ["backend", "frontend", "full stackweb development", "android developer", "data analytics"] }
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
