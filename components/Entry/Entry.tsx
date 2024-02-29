import { FC, useState } from "react"
import { EntryType } from "../Entries/types"
import CloudLink from "../CloudLink"
import { useRouter } from "next/navigation"

interface Props {
    entry: EntryType
    showTags: boolean
    entryLinked: boolean
    entriesCollapsed?: boolean
}

const Entry:FC<Props> = (props: Props) => {

    let { entry, entryLinked, entriesCollapsed } = props

    const router = useRouter()

    return (
        <>
            {entry ? 
            // Entry
            <div
            className="grid grid-col-1 gap-1 bg-orange-100 p-3 hover:bg-orange-00 
            sm:text-sm md:text-base">
                {/* Date */}
                <p
                onClick={() => {

                    // Reroute to dedicated entry page
                    if (entryLinked)
                    router.replace(`/entry/${entry.id}`)
                }}
                className={`first-letter font-bold px-3 py-2 bg-orange-200 w-min 
                whitespace-nowrap 
                ${entryLinked ? "hover:underline" : ""}`}>
                    {new Date(entry.date.seconds * 1000).toLocaleDateString()}
                </p>
                {/* Lyrics */}
                <div
                className="grid grid-cols-1">
                    {entry.entry}
                    {/* Tags */}
                    {props.showTags ? 
                    <div className="w-1/2 mt-3">
                        {entry.tags.map((tag, i) => 
                        <CloudLink 
                        key={i}
                        href={`/tag/${tag}`}
                        text={tag}
                        template="entry"
                        />)}
                    </div> 
                    : <></>}
                </div>
            </div> : 
            // Not sufficient data
            <div className="grid">Sorry, couldn&apos;t load chant</div>
            }
        </>
    )
}

export default Entry