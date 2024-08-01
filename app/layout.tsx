import type { Metadata } from "next";
import { inter } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
    title: "AtiCommunity",
    description: "AtiCommunity project showcase",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html data-theme="light" lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
