import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export default async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        return NextResponse.json({
            message: 'Connected to the database!',
            status: 200,
        });
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
