import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { _readGoogleSheet, _getGoogleSheetClient } from "./sheets"

// When statistics are added
export const onNewStats = onDocumentCreated("stats/{docId}", async (event) => {

    // Add data to statistics sheet, using google sheets api

    let val 
    try {

        // Collect sheets data
        val = await _readGoogleSheet(
            await _getGoogleSheetClient(),
            "1e12hI7NS2p5UpRTGMnkxG3Spgkh63HrXmdToSrqnfQA", 
            "Sheet1",
            "A:E"
        )

        console.log("SPREADSHEAT VALUES:" + JSON.stringify(val))
    } catch (e) {

        console.error("CONSOLE ERROR: " + e)
    }
    
    return val
})

