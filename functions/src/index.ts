import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { _readGoogleSheet, _getGoogleSheetClient, _updateSessionRow } from "./sheets"

// Intializing admin SDK
const admin = require("firebase-admin")
admin.initializeApp()
const db = admin.firestore()

const sheetId = "1e12hI7NS2p5UpRTGMnkxG3Spgkh63HrXmdToSrqnfQA"

// When statistics are added
export const onNewEntry = onDocumentCreated("entries/{docId}", async (event) => {

    const data = event.data?.data()
    const id = event.data?.id

    if (!data || !id) return

    // Add data to statistics sheet using google sheets api

    // Get number of stats docs to find the correct range to insert rows
    const docs = await db.collection("entries").get()
    const statDocs = docs._size - 1
    const range = `A${statDocs + 2}:S${statDocs + 2}`

    let val 
    const stats = data.stats
    const { subs } = stats

    // Map objects into arrays
    const subsFor = [[
        id, 
        new Date(data.date._seconds).toString(), 
        ...Object.keys(subs.for).map((sub => subs.for[sub].toString()))
    ]]

    const subsAgainst = [[
        id, 
        new Date(data.date._seconds).toString(), 
        ...Object.keys(subs.against).map((sub => subs.against[sub].toString()))
    ]]

    try {

        // Get api client
        const client = await _getGoogleSheetClient()
        
        // Update sheets data
        await _updateSessionRow(
            client, 
            sheetId, 
            "SUBS FOR", 
            range, 
            subsFor
        )

        await _updateSessionRow(
            client, 
            sheetId, 
            "SUBS AGAINST", 
            range, 
            subsAgainst
        )

    } catch (e) {

        console.error("CONSOLE ERROR: " + e)
    }
    
    return val
})

