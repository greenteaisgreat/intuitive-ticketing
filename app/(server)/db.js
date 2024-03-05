import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export default async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to database!');
    } catch (err) {
        return NextResponse.json(
            {
                message: 'There was an error connecting to the database ',
                error: err,
            },
            {
                status: 500,
            }
        );
    }
}
