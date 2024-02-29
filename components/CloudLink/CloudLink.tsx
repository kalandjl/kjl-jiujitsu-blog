import { capitalizeEachWord } from "@/lib/strings";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";

interface Props {
    href: string
    text: string
    template: string
}

const templates = {
    "footer": {
        bg: "black",
        color: "white", 
        hover: "sky-400"
    },
    "entry": {
        bg: "orange-200",
        color: "black",
        hover: "orange-300",
    }
}

const CloudLink: FC<Props> = (props: Props) => {

    const { href, text, template} = props
    // @ts-ignore
    const { bg, color, hover } = templates[template]

    return (
        <>
            <Link
            href={href}>
                <div 
                className={classNames(`inline-block  py-1 px-2 mr-1 mb-2 text-sm 
                font-open-sans font-bold hover:cursor-pointer
                bg-${bg} text-${color} hover:bg-${hover}`)}>
                    {capitalizeEachWord(text.replaceAll("_", " "))}
                </div>
            </Link>
        </>
    )
}

export default CloudLink