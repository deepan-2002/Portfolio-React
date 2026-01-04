import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Deeban Yathiraja | Software Engineer",
    description: "Portfolio of Deeban Yathiraja, a Software Engineer specializing in React.js, React Native, Node.js, and NestJS.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300`}>
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}
