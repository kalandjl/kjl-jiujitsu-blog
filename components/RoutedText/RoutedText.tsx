"use client"
import { capitalizeEachWord } from "@/lib/strings";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Props {
    
}

const RoutedText: FC<Props> = (props: Props) => {

    let path: string = usePathname().replace('/', '').charAt(0) + usePathname().slice(2).replace('/', ': ').replaceAll('_', ' ')
    path = capitalizeEachWord(path)

    return (
        <>
            {path ? path : "Home"}
        </>
    )
}

export default RoutedText