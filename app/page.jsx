import TicketCard from './(components)/TicketCard';

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
