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
                <div className="grid grid-cols-5">
                        <div className="m-5 mt-10 ml-11
                        2sm:col-span-5 1sm:col-span-5 sm:col-span-5 md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-3">
                            <div 
                            className="mb-10 static 
                            ">
                                <div 
                                id="header-container"
                                className='w-full'>
                                    <Header>
                                        <RoutedText />
                                    </Header>
                                </div>
                                <div 
                                id="margin"
                                className="h-16"></div>
                                {children}
                            </div>
                        </div>
                        <div 
                        id="ads"
                        className="flex flex-col gap-5 p-10 
                        2xsm:col-span-2 xsm:col-span-0 sm:col-span-0 md:col-span-2 lg:col-span-2 xl:col-span-2 2xl:col-span-2
                        2xsm:block xsm:block sm:hidden md:block lg:block xl:block 2xl:block">
                            { /* <div className="h-64 bg-red-600 opacity-30"></div>
                            <div className="bg-green-600 h-72 opacity-30"></div>
                            <div className="bg-yellow-600 h-24 opacity-30"></div>
                            <div className="bg-blue-600 h-72 opacity-30"></div> */}
                        </div>
                    </div>
            </main>
        </body>
        </html>
    );
}
