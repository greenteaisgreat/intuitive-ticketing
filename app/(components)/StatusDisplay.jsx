const StatusDisplay = ({ status }) => {
    return (
        <span
            className={`inline-block rounded-md ${status === 'Not Started' ? 'bg-slate-200' : status === 'In Progress' ? 'bg-yellow-400' : 'bg-green-400'} px-2 py-1 text-xs font-semibold text-black`}
        >
            {status}
        </span>
    );
};

export default StatusDisplay;
