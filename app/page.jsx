import TicketCard from './(components)/TicketCard';

const getTickets = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/Tickets', {
            //doesn't store the fetched ticket data if no new tickets exist
            cache: 'no-store',
        });

        //if there is new ticket data, it will return the response
        return res.json();
    } catch (err) {
        console.log('There was an error retrieving the tickets ', err);
    }
};

const Dashboard = () => {
    return (
        <div className="p-5">
            {/* anything over a large screen, 2col grid; anything over xl screen, 4col grid.
             must set the initial breakpoint (lg:grid) for any additional formatting to happen*/}
            <div className="grid-cols-2 lg:grid xl:grid-cols-4">
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
            </div>
        </div>
    );
};

export default Dashboard;
