import type { Metadata } from "next";
import { cookies } from "next/headers";

import { koho } from "@/src/styles/fonts";
import "@/src/styles/globals.css";

import NavBar from "@/src/components/navbar";
import Footer from "@/src/components/footer";

export const metadata: Metadata = {
    title: "AtiCommunity",
    description: "AtiCommunity project showcase",
};

type LayoutProps = {
    children: React.ReactNode;
};

async function Theme() {
    const cookieStore = await cookies();
    return cookieStore.get("theme");
}

const Layout = ({ children }: LayoutProps) => {
    const theme = Theme() || "bumblebee";

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
