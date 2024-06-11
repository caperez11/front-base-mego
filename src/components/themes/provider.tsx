'use client';
import { ThemeProvider } from "next-themes";
import { CssBaseline } from "@mui/material";

export default function App({ children }: { children: React.ReactNode }) {


    return (
        <ThemeProvider attribute="class">
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}