"use client"
import pages from "@/lib/res/pages";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface Props {

}


const NavBar: FC<Props> = (props: Props) => {

    let path: string = usePathname()
    let [current, setCurrent] = useState<string>(path)

    useEffect(() => {setCurrent(path)}, [path])

    return ( 
        <>
            <div id="nav-bar" className="w-full h-10 flex gap-6">
                {Object.keys(pages).map((page, i) => {

                    return (
                    <div key={i} className="text-black grid place-items-center font-mono">
                        <Link
                        //@ts-ignore
                        href={`${pages[page]["href"].toLowerCase()}`}
                        className={`px-2 py-1`}
                        style={{backgroundColor: `${// @ts-ignore
                        current === pages[page]["href"] ? "#D0BF9F" : ""
                        }`}}>
                            <p
                            className={`hover:underline hover:cursor-pointer`}>
                                {// @ts-ignore
                                pages[page]["name"]}
                            </p>
                        </Link>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default NavBar