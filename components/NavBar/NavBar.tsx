import pages from "@/lib/res/pages";
import { FC } from "react";

interface Props {

}


const NavBar: FC<Props> = (props: Props) => {

    return ( 
        <>
            <div id="nav-bar" className="w-full h-10 flex gap-6">
                {pages.map((page, i) => {

                    return (
                    <div key={i} className="text-black grid place-items-center font-mono">
                        <p
                        className="hover:underline hover:cursor-pointer">
                            {page}
                        </p>
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default NavBar