import Ticket from '@/app/(models)/Ticket';
import { NextResponse } from 'next/server';

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
