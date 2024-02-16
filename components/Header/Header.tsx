import { FC } from "react";

interface Props {
    children: React.ReactElement
}

const Header: FC<Props> = (props: Props) => {

    return (
        <>
            <div 
            className="mb-4 px-8 py-4 bg-orange-200 w-1/3 font-mono font-bold"
            id="text-wrap">
                <p
                className="font-lg"
                id="text">
                    {props.children}
                </p>
            </div>
        </>
    )
}

export default Header