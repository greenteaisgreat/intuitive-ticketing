import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className="flex justify-between bg-nav-950 p-4">
            <div className="flex items-center space-x-4">
                <Link href="/">
                    <FontAwesomeIcon icon={faHome} className="icon" />
                </Link>
                <Link href="/TicketPage/new">
                    <FontAwesomeIcon icon={faTicket} className="icon" />
                </Link>
            </div>
            <div>
                <p className="text-2xl font-bold text-default-100">
                    I.T. (Intuitive Ticketing)
                </p>
            </div>
        </nav>
    );
};

export default Nav;
