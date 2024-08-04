import type { Metadata } from "next";
import { cookies } from "next/headers";
import { koho } from "@/styles/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "AtiCommunity",
    description: "AtiCommunity project showcase",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
    const theme = cookies().get("theme")?.value || "bumblebee";

    return (
        <html data-theme={theme} lang="en">
            <body className={`${koho.className} bg-base-200 min-h-screen`}>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
