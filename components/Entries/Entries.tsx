import { FC } from "react";
import { WhereFilterOp } from "firebase/firestore";
import EntryPages from "./EntryPages";
import { EntryType } from "./types";
import getEntries from "@/utils/getEntries";

export interface EntriesProps {
    limit: number
    queryProps?: [string, WhereFilterOp, string],
    pageLimit?: number
    manualEntries?: EntryType[]
    entryLinked?: boolean
    showTags?: boolean
    entriesCollapsed?: boolean
}

export const revalidate = 3600

const Entries: FC<EntriesProps> = async (props: EntriesProps) => {

    const { queryProps, limit } = props

    const entries: any = props.manualEntries ?? (await getEntries(limit, queryProps ?? undefined))
        .map(entry => ({...entry.data(), id: entry.id}))

    return (
        <EntryPages props={props} entries={entries ?? []} />
    )
}

export default Entries