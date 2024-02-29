import { db } from "@/config/firebase"
import { Timestamp } from "@google-cloud/firestore"
import { addDoc, collection } from "firebase/firestore"

interface Stats {
    subs: {
        for: {
            [x: string]: number
        }
        against: {
            [x: string]: number
        }
    }
}

export const addEntry = async (entry: string, stats: Stats) => {

    const res = await addDoc(collection(db, "entries"), {
        date: Timestamp.now(),
        entry: entry,
        stats: stats
    })
}