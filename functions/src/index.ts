import {
  onDocumentWritten,
  onDocumentCreated,
  onDocumentUpdated,
  onDocumentDeleted,
  Change,
  FirestoreEvent
} from "firebase-functions/v2/firestore";


export const onNewStats = onDocumentCreated("stats/{docId}", (event) => {

    // Run google sheets stuff
})