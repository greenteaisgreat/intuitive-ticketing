import Nav from './(components)/Nav';
import './globals.css';
import { Inter } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

//prevents icon "jumping" for fortawesome icons
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Intuitive Ticketing',
    description: 'The classiest ticketing application ever!',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex h-screen max-h-screen flex-col bg-page-900">
                    <Nav />
                    <div className="flex-grow overflow-y-auto bg-page-900 text-default-100">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
