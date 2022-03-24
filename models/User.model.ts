import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({        
    userName: {
        type: String
    },
    userAge: {
        type: Number
    },
    aboutUser: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);
export default User;