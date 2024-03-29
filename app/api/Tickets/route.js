//in next.js, the file MUST be named route.js in order for next to know that
//it needs to utilize it to make an api call
import Ticket from '@/app/(models)/Ticket';
import { NextResponse } from 'next/server';

//creates a new ticket
export async function POST(req) {
    try {
        const body = await req.json();
        const ticketData = body.formData;

        await Ticket.create(ticketData);

        return NextResponse.json(
            { message: 'Ticket successfully created!' },
            { status: 201 }
        );
    } catch (err) {
        return NextResponse.json(
            { message: 'There was an error posting the ticket ', err },
            { status: 500 }
        );
    }
}

//retrieves all tickets
export async function GET(req) {
    try {
        const tickets = await Ticket.find();

        return NextResponse.json({ tickets }, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { message: 'There was an error retrieving the tickets ', err },
            { status: 500 }
        );
    }
}
