import mongoose from 'mongoose';

export default async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to database!');
    } catch (err) {
        console.log('There was an error connecting to the database ', err);
    }
}
