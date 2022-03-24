import User from '../models/User.model';

const resolvers = {
    Query: {
        getUsers: async () => {
            return await User.find();
        }
    },
    Mutation: {
        addUser: async (parent: any, args: any) => {
            const { userName, userAge, aboutUser } = args;
            const newUser = new User({ userName, userAge, aboutUser });
            await newUser.save();
            return newUser;
        },
        deleteUser: async (parent: any, args: any) => {
            const { id } = args;
            await User.findByIdAndDelete(id);
        },
        updateUser: async (parent: any, args: any) => {
            const { id, userName, userAge, aboutUser } = args;
            const updateUser = await User.findByIdAndUpdate(id, { userName, userAge, aboutUser });
            return updateUser;
        }
    }
}

export default resolvers;