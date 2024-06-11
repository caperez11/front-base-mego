import {type ReactNode} from 'react';
import type {Metadata} from 'next';
import Header from '@/components/main-layout/header';
import Sidebar from '@/components/main-layout/sidebar';


export const metadata: Metadata = {
    title: 'Home',
    description: 'Home Page'
};

export default function DashboardLayout({
                                            children
                                        }: {
    children: ReactNode;
}) {
    return (
        <>
            <Header/>
            <div className="flex h-screen overflow-hidden">
                <Sidebar/>
                <main className="flex-1 overflow-hidden pt-16">{children}</main>
            </div>
        </>
    );
}
