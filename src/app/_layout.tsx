import { Slot } from "expo-router"
import { SQLiteProvider } from "expo-sqlite"

import { initializeDateBase } from "@/database/initializeDataBase"

export default function Layout (){
    return(
        <SQLiteProvider databaseName="sqlite.db" onInit={initializeDateBase}>
            <Slot/>
        </SQLiteProvider>
    )
}