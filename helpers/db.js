import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('app.db')

export const dbTables = ['tools']
