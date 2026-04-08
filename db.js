// db.js
const DB_NAME = "FinancialDB";
const DB_VERSION = 1;
const STORE_NAME = "records";

let db = null;

// connection to indexedDB
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            db = request.result;
            resolve(db);
        }
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
                store.createIndex("date", "date", { unique: false });
            }
        }
    })
}

// get all the records from indexedDB storage
function getRecordFromDB() {
    return new Promise((resolve, reject) => {
        if (!db) {
            reject("Data is not initialized");
            return; 
        }
        const tx = db.transaction(STORE_NAME, "readonly");
        const store = tx.objectStore(STORE_NAME);
        const request = store.getAll();
        request.onsuccess = () => {
            let records = request.result || [];
            records.sort((a, b) => a.date.localeCompare(b.date));
            resolve(records);
        }
        request.onerror = () => reject(request.error);
    })
}

// add record into storage
function addRecordToDB(record) {
    return new Promise((resolve, reject) => {
        if (!db) {
            reject("Data is not initialized");
            return;
        }
        const tx = db.transaction(STORE_NAME, "readwrite");
        const store = tx.objectStore(STORE_NAME);
        const request = store.add(record);
        request.onsuccess = () => resolve(record);
        request.onerror = () => reject(request.error);
    })
}

// delete all the data and records in the indexedDB storage
function deleteAllDataFromDB() {
    return new Promise((resolve, reject) => {
        if (!db) {
            reject("Data is not initialized");
            return;
        }
        const tx = db.transaction(STORE_NAME, "readwrite");
        const store = tx.objectStore(STORE_NAME);
        const request = store.clear();
        request.onsuccess = () => resolve();
        request.onerror = () => reject(reject.error);
    })
}

// globalize the functions, used to run in HTML
window.openDB = openDB;
window.getRecordFromDB = getRecordFromDB;
window.addRecordToDB = addRecordToDB;
window.deleteAllDataFromDB = deleteAllDataFromDB;