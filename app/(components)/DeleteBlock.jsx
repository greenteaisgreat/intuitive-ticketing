import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DeleteBlock = () => {
    return (
        <FontAwesomeIcon
            icon={faX}
            className="mb-1 text-red-400 hover:cursor-pointer hover:text-red-600"
        />
    );
};

export default DeleteBlock;
