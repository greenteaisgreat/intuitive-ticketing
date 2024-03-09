import TicketCard from './(components)/TicketCard';

const getTickets = async () => {
    try {
        const res = await fetch('https://intuitive-ticketing.vercel.app/', {
            //doesn't store the fetched ticket data if no new tickets exist
            cache: 'no-store',
        });

        //if there is new ticket data, it will return the response
        return res.json();
    } catch (err) {
        console.log('There was an error retrieving the tickets ', err);
    }
};

const Dashboard = async () => {
    const { tickets } = await getTickets();
    const uniqueCategories = [
        //iterates over every ticket's category and returns it; Set() ensures
        //there are no duplicates so that there's an ordering scheme for every ticket,
        //based on the category
        ...new Set(tickets?.map(({ category }) => category)),
    ];
    return (
        <div className="p-5">
            <div>
                {tickets &&
                    uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                        <div key={categoryIndex} className="mb-8 mt-2">
                            <h2>{uniqueCategory}</h2>
                            <div className="grid-cols-2 lg:grid xl:grid-cols-4">
                                {tickets
                                    .filter(
                                        (ticket) =>
                                            ticket.category === uniqueCategory
                                    )
                                    .map((filteredTicket, _index) => (
                                        <TicketCard
                                            id={_index}
                                            key={_index}
                                            ticket={filteredTicket}
                                        />
                                    ))}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Dashboard;
