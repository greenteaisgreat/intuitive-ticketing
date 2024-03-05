import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
    return (
        <div className="m-3 flex flex-col rounded-md bg-card-400 p-3 shadow-xl hover:bg-card-500">
            <div className="mb-3 flex">
                <PriorityDisplay />
                <div className="ml-auto">
                    <DeleteBlock />
                </div>
            </div>
            <h4>Ticket Title</h4>
            <hr className="mb-2 h-px border-0 bg-page-500" />
            {/* pre-wrap preserves \n, \r & spaces */}
            <p className="whitespace-pre-wrap">
                This is a description and I really need this fixed by the end of
                the day, please and thank-you. Please, I really need this fixed!
            </p>
            {/* this empty flex-grow div ensures that all ticket cards will be 
            the same size, regardless of how much text content they contain */}
            <div className="flex-grow"></div>
            <div className="mt-2 flex">
                <div className="flex flex-col">
                    <p className="my-1 text-xs">
                        {new Date().toDateString()} &nbsp; | &nbsp;
                        {new Date().toLocaleTimeString()}
                    </p>
                    <ProgressDisplay />
                </div>
                <div className="ml-auto flex items-end">
                    <StatusDisplay />
                </div>
            </div>
        </div>
    );
};

export default TicketCard;
