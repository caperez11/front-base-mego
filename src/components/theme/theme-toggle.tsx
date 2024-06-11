'use client';
import {useTheme} from 'next-themes';
import {MoonIcon, SunIcon} from '@radix-ui/react-icons';
import {Button} from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

type CompProps = {};

export default function ThemeToggle({}: CompProps) {
    const {setTheme, theme} = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <SunIcon
                        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                    <MoonIcon
                        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
                    <span className="sr-only">Tema</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}
                                  className={theme === 'light' ? 'bg-blue-500 text-white' : ''}>
                    Claro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}
                                  className={theme === 'dark' ? 'bg-blue-500 text-white' : ''}>
                    Oscuro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}
                                  className={theme === 'system' ? 'bg-blue-500 text-white' : ''}>
                    Automático
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}