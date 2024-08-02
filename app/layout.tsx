import type { Metadata } from "next";
import { inter } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "AtiCommunity",
    description: "AtiCommunity project showcase",
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
