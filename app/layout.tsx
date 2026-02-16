import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './header';
import Footer from './footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Garage | Invoice PDF Generator',
    description:
        'Created by Benjamin Luckow for shopgarage.com. Not for production use.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="light">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-white text-zinc-900 antialiased`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
