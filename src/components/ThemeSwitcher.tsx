import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; 

export default function Header() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Set initial theme based on system or local storage
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Theme"
        >
            {isDark ? <Sun className="w-5 h-5 text-yellow-400 pointer" /> : <Moon className="w-5 h-5 text-gray-800" />}
        </button>
    );
}
