'use client';
import {useTheme} from 'next-themes';

export default function ThemedButton() {
    const {setTheme, resolvedTheme} = useTheme();

    console.log('resolvedTheme', resolvedTheme);

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            Cambiar a tema {resolvedTheme === 'dark' ? 'claro' : 'oscuro'}
        </button>
    );
}
