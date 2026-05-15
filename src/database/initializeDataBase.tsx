import { SQLiteDatabase } from "expo-sqlite"

export async function initializeDateBase(dataBase: SQLiteDatabase) {
    await dataBase.execAsync(`
        CREATE TABLE IF NOT EXISTS prudutos(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nomeProduto TEXT NOT NULL,
        quantidade INTEGER NOT NULL, 
        );
        `)
}