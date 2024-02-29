import { Timestamp } from "firebase/firestore"

export interface EntryType {
    date: Timestamp
    entry: string
    tags: string[]
    id: string
    stats: Stats
}

interface Stats {
    fatigue: number
    rolls: number
    subs: {
        against: Subs
        for: Subs
    }
}

interface Subs {
    "RNC": number
    "Armbar": number
    "Triangle": number
    "Guillotine": number
    "Kimura": number
    "Americana": number
    "Bow and Arrow": number
    "Ezekiel": number
    "Arm Triangle": number
    "Omoplata": number
    "Kneebar": number
    "Ankle Lock": number
    "Heel Hook": number
    "Toe Hold": number
    "D'Arce": number
    "Gogoplata": number
    "Paper Cutter": number
}