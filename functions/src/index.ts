import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { _readGoogleSheet, _getGoogleSheetClient, _updateSessionRow } from "./sheets"

// Intializing admin SDK
const admin = require("firebase-admin")
admin.initializeApp()
const db = admin.firestore()

const client = _getGoogleSheetClient()
const sheetId = "1e12hI7NS2p5UpRTGMnkxG3Spgkh63HrXmdToSrqnfQA"
const tabs = ["SUBS FOR", "SUBS AGAINST", "SESSIONS"]

// When statistics are added
export const onNewEntry = onDocumentCreated("entries/{docId}", async (event) => {

    const data = event.data?.data()
    const id = event.data?.id

    if (!data || !id) return

    // Add data to statistics sheet using google sheets api

    // Get number of stats docs to find the correct range to insert rows
    const docs = await db.collection("entries").get()
    const statDocs = docs._size - 1
    
    let val 
    const stats = data.stats
    const { subs } = stats

    // Map objects into arrays
    const subsFor = [[
        id, 
        new Date(data.date._seconds * 1000).toLocaleString("en-us", {    weekday: 'long', // full name of the day
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true }), 
        ...Object.keys(subs.for).map((sub => subs.for[sub].toString()))
    ]]

    const subsAgainst = [[
        id, 
        new Date(data.date._seconds).toString(), 
        ...Object.keys(subs.against).map((sub => subs.against[sub].toString()))
    ]]

    try {

        // Get api client
        const updatedClient = await client
        
        // Update sheets data
        await _updateSessionRow(
            updatedClient, 
            sheetId, 
            "SUBS FOR", 
            `A${statDocs + 2}:S${statDocs + 2}`, 
            subsFor
        )

        await _updateSessionRow(
            updatedClient, 
            sheetId, 
            "SUBS AGAINST", 
            `A${statDocs + 2}:S${statDocs + 2}`, 
            subsAgainst
        )

        await _updateSessionRow(
            updatedClient,
            sheetId,
            "SESSIONS",
            `E${statDocs + 1}:F${statDocs + 1}`,
            [[stats.fatigue, stats.rolls]]
        )

    } catch (e) {

        console.error("CONSOLE ERROR: " + e)
    }
    
    return val
})

// Clear stats
export const onTriggered = onDocumentCreated("trigger/{docId}", async (event) => {
    
    const docs = await db.collection("entries").get()
    const size = docs._size

    docs.forEach((doc: any) => {

        if (doc.id === "8HVqPh92C74BsQrGhu1L") return

        db.collection("entries").doc(doc.id).delete()
    })

    try {

        const updatedClient = await client

        // For each entry doc clear a row
        let i = 0
        Array.from(Array(size - 1)).forEach(async () => {

            i++

            const range = `A${i + 2}:Z${i + 2}`

            const blankArr = Array.from(Array(26)).map(i => "")

            tabs.forEach(async (tab) => await _updateSessionRow(
                updatedClient, 
                sheetId, 
                tab, 
                tab === "SESSIONS" ? `E${i + 1}:F${i + 1}` : range, 
                tab === "SESSIONS" ? 
                ["", ""] : [blankArr]
            ))
        })
    } catch (e) {

        console.error("ERROR: " + e)
    }
})