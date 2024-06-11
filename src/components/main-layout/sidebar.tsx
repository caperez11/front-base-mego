// components/layout/sidebar.tsx
'use client';
import {useState} from 'react';
import {ChevronLeft} from 'lucide-react';
import {navItems} from '@/constants/data';
import {cn} from '@/lib/utils';

import {useSidebar} from '@/hooks/useSidebar';
import {ItemsNav} from '@/components/main-layout/items-nav';

type SidebarProps = {
    className?: string;
};

export default function Sidebar({className}: SidebarProps) {
    const {isMinimized, toggle} = useSidebar();
    const [status, setStatus] = useState(false);

    const handleToggle = () => {
        setStatus(true);
        toggle();
        setTimeout(() => setStatus(false), 500);
    };
    return (
        <nav
            className={cn(
                `relative hidden h-screen flex-none border-r pt-20 md:block`,
                status && 'duration-500',
                !isMinimized ? 'w-72' : 'w-[72px]',
                className
            )}
        >
            <ChevronLeft
                className={cn(
                    'absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground',
                    isMinimized && 'rotate-180'
                )}
                onClick={handleToggle}
            />
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <div className="mt-3 space-y-1">
                        <ItemsNav items={navItems}/>
                    </div>
                </div>
            </div>
        </nav>
    );
}
