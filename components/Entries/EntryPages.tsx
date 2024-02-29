"use client"
import { useEffect, useMemo, useState } from "react";
import { EntryType } from "./types";
import { EntriesProps } from "./Entries";
import Entry from "../Entry/Entry";

interface Props {
    entries: EntryType[] // Data
    props: EntriesProps // Specific params
}

const EntryPages = (props: Props) => {

    // Defining params
    const { entries } = props 
    const { entriesCollapsed } = props.props
    const showTags  = props.props.showTags ?? false
    const entryLinked = props.props.entryLinked ?? false
    const pageLimit = props.props.pageLimit ?? 5

    // Memoize value of pages numbers
    const pageNumber = useMemo(() => {
        return Math.ceil((entries.length / pageLimit))
    }, [pageLimit, entries.length]) 

    // Memoized value of number which the last page will require
    const lastPageEntries = useMemo(() => {
        return entries.length % pageLimit || pageLimit
    }, [pageLimit, entries.length])

    // Current page
    let [page, setPage] = useState(1)
    let [pageChanges, setPageChanges] = useState(0)

    // Scroll to top of window on page change
    useEffect(() => {
        
        if (pageChanges > 0 && pageNumber > 1) window.scrollTo(0, 200)
        setPageChanges(pageChanges + 1)
    }, [page]);

    return (
        <>
            <div
            id="entries">
                {/* Itterate for every page requested */}
                {Array(pageNumber).fill(0).map((y, i) => 
                    <div 
                    key={i} 
                    id={`page-${i + 1}`}
                    // If current, show, if not hide
                    className={`${page === i + 1 ? "static": "hidden"}`}>
                        {
                            // Fills pages with entries
                            // Array for all entries needed in page, unless last page
                            Array(i === pageLimit - 1 ? pageLimit - lastPageEntries : pageLimit)
                                .fill(0)
                                .map((x, y) => {

                                    // Return sebsequent entry by indexx
                                    const index = ((i + 1) * pageLimit) - (pageLimit - y)
                                    return entries[index] ?? undefined
                                })
                                // Filter undefined entries
                                .filter((entry) => entry != undefined)
                                .map((entry, z) => {

                                    return (
                                        // Entry 
                                        <>
                                            <div
                                            className="hover:cursor-pointer"
                                            
                                            key={z}>
                                                <Entry
                                                entry={entry}
                                                showTags={showTags}
                                                entryLinked={entryLinked}
                                                entriesCollapsed={entriesCollapsed}
                                                />
                                            </div> 
                                            <div 
                                            className={`h-1 bg-gray-300 w-full
                                            ${z + 1 === pageLimit ||
                                            z + 1 === lastPageEntries && i + 1 === pageNumber
                                            ? "hidden" : ""}`}
                                            id="barier"></div>
                                        </>
                                    )
                                    
                                })
                        }
                    </div>
                )} 
                {/* Page selector (if more than 1 page) */}
                {pageNumber < 2 ? 
                <>
                </> : 
                    <div 
                    className="flex mt-5">
                        {
                            Array(pageNumber).fill(0).map((x, i) => 
                                <button 
                                key={i}
                                className={`mx-2 px-2 py-1 border-2 border-gray-100 
                                ${page === i + 1 ? "bg-sky-400" : "bg-sky-200"}`}
                                onClick={() => {

                                    // Set state
                                    setPage(i + 1)
                                }}>

                                    {/* Page number */}
                                    {i + 1}
                                </button>
                            )
                        }
                    </div>
                }   
            </div>
        </>
    )
}

export default EntryPages