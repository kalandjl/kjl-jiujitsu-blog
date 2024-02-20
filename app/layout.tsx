import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import RoutedText from "@/components/RoutedText";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jiu jitsu blog",
  description: "Kalan's jiu jitsu blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



    return (
        <html lang="en">
        <head>
          <meta name="google-site-verification" content="JVrd72YgeGKq3soomojEmELHqR31VA4SKqu6RZP43A0" />
        </head>
        <body style={{backgroundColor: "#E5D3B1"}} className={`${inter.className}`}>
            <main 
            style={{
            boxShadow: "0px 0px 10px rgba(50, 50, 50, 0.17)",
            backgroundColor: "#f9e4bc"}}
            className="px-32 py-10 h-screen mx-10 my-5"
            id="page-wrapper">
                <NavBar />
                <div 
                id="space" 
                className="h-5"></div>
                <section
                id="main-section"
                className="px-10">
                    <Header>
                        <RoutedText />
                    </Header>
                    {children}
                </section>
            </main>
        </body>
        </html>
    );
}
