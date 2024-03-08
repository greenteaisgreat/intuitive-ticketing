import Link from 'next/link';
import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = ({ ticket }) => {
    const formatTimestamp = (timestamp) => {
        //takes advantage of toLocaleString's options; the values are recognized
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };

        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString('en-us', options);

        return formattedDate;
    };

    return (
        <div className="m-3 flex flex-col rounded-lg bg-card-400 p-3 shadow-xl hover:bg-card-500">
            <div className="mb-3 flex">
                <PriorityDisplay priority={ticket.priority} />
                <div className="ml-auto">
                    <DeleteBlock id={ticket._id} />
                </div>
            </div>
            <Link
                href={`/TicketPage/${ticket._id}`}
                //tells CSS to ignore <Link> and only display the URL
                style={{ display: 'contents' }}
            >
                <h4>{ticket.title}</h4>
                <hr className="mb-2 h-px border-0 bg-page-500" />
                {/* pre-wrap preserves \n, \r & spaces */}
                <p className="whitespace-pre-wrap">{ticket.description}</p>
                {/* this empty flex-grow div ensures that all ticket cards will be 
                the same size, regardless of how much text content they contain */}
                <div className="flex-grow"></div>
                <div className="mt-2 flex">
                    <div className="flex flex-col">
                        <p className="my-1 text-xs">
                            {formatTimestamp(ticket.createdAt)}
                        </p>
                        <ProgressDisplay progress={ticket.progress} />
                    </div>
                    <div className="ml-auto flex items-end">
                        <StatusDisplay status={ticket.status} />
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TicketCard;
