import type { Metadata } from "next";
import { cookies } from "next/headers";

import { koho } from "@/styles/fonts";
import "@/styles/globals.css";

import NavBar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";

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
            <body className={`${koho.className} bg-base-200 min-h-screen`}>
                <NavBar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default Layout;
