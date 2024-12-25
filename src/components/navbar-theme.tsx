"use client";

import { useEffect, useState } from "react";

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const NavBarTheme = () => {
    const [theme, setTheme] = useState<string>("bumblebee");

    useEffect(() => {
        const savedTheme =
            document.cookie.replace(/theme=(.*)/, "$1") || "bumblebee";
        setTheme(savedTheme);
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "bumblebee" ? "luxury" : "bumblebee";
        setTheme(newTheme);
        document.cookie = `theme=${newTheme}; max-age=${
            30 * 24 * 60 * 60
        }; path=/`;
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <label className="btn btn-ghost hover:bg-transparent hover:text-primary swap swap-rotate">
            <input
                type="checkbox"
                className="theme-controller"
                checked={theme === "luxury"}
                onChange={toggleTheme}
                onClick={() => {
                    console.log(theme);
                }}
            />

            <IoSunnyOutline className="swap-on fill-current" fontSize={30} />
            <IoMoonOutline className="swap-off fill-current" fontSize={30} />
        </label>
    );
};

export default NavBarTheme;
