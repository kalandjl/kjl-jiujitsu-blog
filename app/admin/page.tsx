"use client"
import { db, functions } from "@/config/firebase"
import { addEntryDoc, clearEntriesCollection } from "@/lib/db/test"
import { addDoc, collection } from "firebase/firestore"
import { httpsCallable } from "firebase/functions"

const Home = () => {

    return (
        <>
            <div className="grid grid-flow-col gap-2 w-1/2">
                <button 
                onClick={(e) => {

                    e.preventDefault()
                    addEntryDoc()
                }}
                className="border-2 border-black p-2">
                    Add test document
                </button>
                <button 
                onClick={async (e) => {

                    e.preventDefault()
                    await addDoc(collection(db, "trigger"), {})
                }}
                className="border-2 border-black p-2">
                    Clear entries 
                </button>
            </div>
            <form className="px-6 py-4 bg-orange-200 mt-10">
                <input type="text" placeholder="title" />
            </form>
        </>
    )
}

export default Home