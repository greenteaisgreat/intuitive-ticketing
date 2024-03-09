import TicketForm from '@/app/(components)/TicketForm';

const getTicketById = async (id) => {
    const res = await fetch(`https://intuitive-ticketing.vercel.app/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('There was an error retrieving that ticket');
    }

    return res.json();
};

const TicketPage = async ({ params }) => {
    //EDITMODE depends on _id NOT being 'new'
    const EDITMODE = params.id === 'new' ? false : true;
    let updateTicketData = {};

    if (EDITMODE) {
        updateTicketData = await getTicketById(params.id);
        //'foundTicket' is in [id]/route.js
        updateTicketData = updateTicketData.foundTicket;
    } else {
        updateTicketData = {
            _id: 'new',
        };
    }

    return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
