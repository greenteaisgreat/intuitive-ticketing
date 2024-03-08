import mongoose, { Schema } from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

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
const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', ticketModel);

export default Ticket;
