import { FuturaRegular } from "@/lib/fonts";

import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/navigation/nav";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={FuturaRegular.className}>
                <Nav />
                <div className="p-6 md:px-12 max-w-7xl mx-auto h-[1000px]">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
