import type { Metadata } from "next";
import { cookies } from "next/headers";
import { inter } from "@/styles/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "AtiCommunity",
    description: "AtiCommunity project showcase",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
    const theme = cookies().get("theme")?.value || "fantasy";

    return (
        <html data-theme={theme} lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
