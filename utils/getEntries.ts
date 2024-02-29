import { db } from "@/config/firebase"
import { collection, query, getDocs, where, limit, WhereFilterOp } from "firebase/firestore"
import { cache } from "react"

const getEntries = cache(async (limitProps: number, queryProps? : [string, WhereFilterOp, string]) => {

    const chantsRef = collection(db, "entries")
    let docsRef

    if (queryProps && limitProps) {
        
        docsRef = query(
            chantsRef, 
            where(queryProps[0], queryProps[1], queryProps[2]), 
            limit(limitProps))
    } else if (!queryProps && limitProps) {

        docsRef = query(
            chantsRef, 
            limit(limitProps)
        )
    } else {

        docsRef = query(chantsRef)
    }

    const docs = await getDocs(docsRef)

    return docs.docs.filter(doc => doc.id != "8HVqPh92C74BsQrGhu1L")
})

export default getEntries