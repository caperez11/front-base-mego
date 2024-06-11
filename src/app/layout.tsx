import type {Metadata} from 'next';
import {type ReactNode} from 'react';
import NextTopLoader from 'nextjs-toploader';
import '@uploadthing/react/styles.css';
import {Inter} from 'next/font/google';

import Providers from '@/components/main-layout/provider';
import {auth} from '@/auth';
import './globals.css';


const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
    title: 'App Base Mego',
    description: 'App Base Mego'
};

export default async function RootLayout({
                                             children
                                         }: {
    children: ReactNode;
}) {
    const session = await auth();
    return (
        <html lang="en"
              suppressHydrationWarning
        >
        <body className={`${inter.className} overflow-hidden`}>
        <NextTopLoader/>
        <Providers session={session}>
            {children}
        </Providers>
        </body>
        </html>
    );
}
