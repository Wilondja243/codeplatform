import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextSessionProvider } from '@/hooks/use-session-provider';
import { Provider } from '@/hooks/use-query-client-provider';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'CodePlatform',
    description: 'Apprenez le code par la pratique',
    icons: {
        icon: '/favicon.png?v=1',
        apple: '/favicon.png?v=1',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <NextSessionProvider>
                    <Provider>
                        {children}
                        <Toaster position="top-right" />
                    </Provider>
                </NextSessionProvider>
            </body>
        </html>
    );
}
