import type { Metadata } from "next";
import { cookies } from "next/headers";

import { koho } from "@/styles/fonts";
import "@/styles/globals.css";

import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "AtiCommunity",
    description: "AtiCommunity project showcase",
};

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const theme = cookies().get("theme")?.value || "bumblebee";

    return (
        <html data-theme={theme} lang="en">
            <body className={`${koho.className}`}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default Layout;
