import mongoose, { Schema } from 'mongoose';

const ticketModel = new Schema(
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,
    },
    {
        timestamps: true,
    }
);

//the first statement is for a ticket that already exists;
//if not, it creates a new ticket
const NewTicket =
    mongoose.models.NewTicket || mongoose.model('Ticket', ticketModel);

export default NewTicket;
