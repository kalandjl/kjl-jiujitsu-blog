import pages from "@/lib/res/pages";
import Link from "next/link";
import { FC } from "react";

interface Props {

}


const NavBar: FC<Props> = (props: Props) => {

    return ( 
        <>
            <div id="nav-bar" className="w-full h-10 flex gap-6">
                {Object.keys(pages).map((page, i) => {

                    return (
                    <div key={i} className="text-black grid place-items-center font-mono">
                        <Link
                        //@ts-ignore
                        href={`${pages[page]["href"].toLowerCase()}`}>
                            <p
                            className="hover:underline hover:cursor-pointer">
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