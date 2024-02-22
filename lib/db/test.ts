import { db } from "@/config/firebase"
import { Timestamp, addDoc, collection, deleteDoc, getDocs, doc } from "firebase/firestore"

function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const addEntryDoc = () => {

    addDoc(collection(db, "entries"), {
        date: Timestamp.now(),
        stats: {
            "subs": {
                "for": {
                    "RNC": randomIntFromInterval(8, 10),
                    "Armbar": randomIntFromInterval(8, 10),
                    "Triangle": randomIntFromInterval(7, 9),
                    "Guillotine": randomIntFromInterval(6, 8),
                    "Kimura": randomIntFromInterval(5, 7),
                    "Americana": randomIntFromInterval(4, 6),
                    "Bow and Arrow": randomIntFromInterval(6, 8),
                    "Ezekiel": randomIntFromInterval(3, 5),
                    "Arm Triangle": randomIntFromInterval(5, 7),
                    "Omoplata": randomIntFromInterval(4, 6),
                    "Kneebar": randomIntFromInterval(3, 5),
                    "Ankle Lock": randomIntFromInterval(4, 6),
                    "Heel Hook": randomIntFromInterval(5, 7),
                    "Toe Hold": randomIntFromInterval(3, 5),
                    "D'Arce": randomIntFromInterval(5, 7),
                    "Gogoplata": randomIntFromInterval(2, 4),
                    "Paper Cutter": randomIntFromInterval(3, 5)
                },
                "against": {
                    "RNC": randomIntFromInterval(8, 10),
                    "Armbar": randomIntFromInterval(8, 10),
                    "Triangle": randomIntFromInterval(7, 9),
                    "Guillotine": randomIntFromInterval(6, 8),
                    "Kimura": randomIntFromInterval(5, 7),
                    "Americana": randomIntFromInterval(4, 6),
                    "Bow and Arrow": randomIntFromInterval(6, 8),
                    "Ezekiel": randomIntFromInterval(3, 5),
                    "Arm Triangle": randomIntFromInterval(5, 7),
                    "Omoplata": randomIntFromInterval(4, 6),
                    "Kneebar": randomIntFromInterval(3, 5),
                    "Ankle Lock": randomIntFromInterval(4, 6),
                    "Heel Hook": randomIntFromInterval(5, 7),
                    "Toe Hold": randomIntFromInterval(3, 5),
                    "D'Arce": randomIntFromInterval(5, 7),
                    "Gogoplata": randomIntFromInterval(2, 4),
                    "Paper Cutter": randomIntFromInterval(3, 5)
                }
            }
        },
        entry: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    })
}

export const clearEntriesCollection = async () => {

    let docs = await getDocs(collection(db, "entries"))
    
    docs.forEach((document) => {
        
        if (document.id === "2TQtZUtRrVm9f2SCsFP3") return
        
        deleteDoc(doc(db, "entries", document.id))
    })
}
