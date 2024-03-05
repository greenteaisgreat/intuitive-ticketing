import TicketCard from './(components)/TicketCard';

const Dashboard = () => {
    return (
        <div className="p-5">
            {/* anything over a large screen, 2col grid; 
            anything over xl screen, 4col grid */}
            <div className="lg:grid-cols-2 xl:grid-cols-4">
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
            </div>
        </div>
    );
};

export default Dashboard;
