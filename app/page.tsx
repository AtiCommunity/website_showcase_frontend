"use client";

import { useEffect, useState } from "react";

import NavBar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import ProfileCard from "@/components/ProfileCard/profilecard";

import { nabla } from "@/styles/fonts";

const Home = () => {
    const [theme, setTheme] = useState<string>("fantasy");

    useEffect(() => {
        const savedTheme =
            document.cookie.replace(/theme=(.*)/, "$1") || "fantasy";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "fantasy" ? "luxury" : "fantasy";
        setTheme(newTheme);
        document.cookie = `theme=${newTheme}; max-age=${
            30 * 24 * 60 * 60
        }; path=/`;
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <>
            <NavBar theme={theme} toggleTheme={toggleTheme} />
            <div className="min-h-screen max-w-screen content-center">
                <div className="flex w-full flex-col lg:flex-row py-10">
                    <div className="container mx-auto max-w-md text-center content-center">
                        <h1 className={`${nabla.className} text-7xl font-bold`}>
                            Hello there
                        </h1>
                        <p className="py-6">
                            This website is a project showcase. Here is exposed
                            every funny projects I&apos;ve made.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <ProfileCard />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
