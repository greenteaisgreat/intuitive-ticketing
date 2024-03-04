import './globals.css';
import { Inter } from 'next/font/google';
import Nav from './(components)/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Ticketing App',
    description: 'Next.js Introductory Project by Nathan Bornstein',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Nav />
            </body>
        </html>
    );
}
