"use client"
import { addEntryDoc, clearEntriesCollection } from "@/lib/db/test"

const Home = () => {

    return (
       <>
            <button 
            onClick={(e) => {

                e.preventDefault()
                addEntryDoc()
            }}
            className="border-2 border-black p-2">
                Add test document
            </button>
            <button 
            onClick={(e) => {

                e.preventDefault()
                clearEntriesCollection()
            }}
            className="border-2 border-black p-2">
                Clear entries collection
            </button>
        </>
    )
}

export default Home