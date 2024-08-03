"use client";

import { useEffect, useState } from "react";

import NavBar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import Content from "@/components/Content/content";

const Home = () => {
    const [theme, setTheme] = useState<string>("light");

    useEffect(() => {
        const savedTheme =
            document.cookie.replace(/theme=(.*)/, "$1") || "light";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.cookie = `theme=${newTheme}; max-age=${
            30 * 24 * 60 * 60
        }; path=/`;
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <>
            <NavBar theme={theme} toggleTheme={toggleTheme} />
            <Content />
            <Footer />
        </>
    );
};

export default Home;
