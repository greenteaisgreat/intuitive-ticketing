import Ticket from '@/app/(models)/Ticket';
import { NextResponse } from 'next/server';

//finds a specific ticket
export async function GET(req, { params }) {
    try {
        const { id } = params;

        const foundTicket = await Ticket.findOne({ _id: id });

        return NextResponse.json({ foundTicket }, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { message: 'There was an error finding that ticket', err },
            { status: 500 }
        );
    }
}

//deletes a specfic ticket
export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        await Ticket.findByIdAndDelete(id);

        return NextResponse.json(
            { message: 'Ticket successfully deleted!' },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { message: 'There was an error deleting the ticket ', err },
            { status: 500 }
        );
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = params;
        const body = await req.json();
        const ticketData = body.formData;

        const updateTicket = await Ticket.findByIdAndUpdate(id, {
            ...ticketData,
        });

        return NextResponse.json(
            { message: 'Ticket successfully updated!' },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json(
            { message: 'There was an error updating the ticket', err },
            { status: 500 }
        );
    }
}
