const DB_NAME = 'TRACKMATE';
const DB_VERSION = 1;
const TABLE_NAME = 'tracks'
let DB;

export default {

        async getDB() {
            return new Promise((resolve, reject) => {
                if(DB){
                    // check if an BD is already existing
                    return resolve(DB);
                }
                // try to open DB connection
                let request = window.indexedDB.open(DB_NAME, DB_VERSION);

                // connection could not opened
                request.onerror = e => {
                    console.log('Error opening db', e);
                    reject('Error');
                };
                
                // connection successful
                request.onsuccess = e => {
                    DB = e.target.result;
                    resolve(DB);
                };
                
                request.onupgradeneeded = e => {
                    let db = e.target.result;
                    db.createObjectStore(TABLE_NAME, { keyPath:'id' });
                };

            });
        },

        async getAllTracks() {

            // open db connection
            let db = await this.getDB();

            return new Promise((resolve) => {
                
                let trans = db.transaction([TABLE_NAME],'readonly');
                trans.oncomplete = () => {
                    resolve(tracks);
                };

                let store = trans.objectStore(TABLE_NAME);
                let tracks = [];
                
                store.openCursor().onsuccess = e => {
                    let cursor = e.target.result;
                    if (cursor) {
                        tracks.push(cursor.value)
                        cursor.continue();
                    }
                };

            });
        },

        async saveCat(track) {

            let db = await this.getDb();
    
            return new Promise(resolve => {
    
                let trans = db.transaction([TABLE_NAME],'readwrite');
                trans.oncomplete = () => {
                    resolve();
                };
    
                let store = trans.objectStore(TABLE_NAME);
                store.put(track);
    
            });
        
        },

        async deleteCat(track) {

            let db = await this.getDb();
    
            return new Promise(resolve => {
    
                let trans = db.transaction([TABLE_NAME],'readwrite');
                trans.oncomplete = () => {
                    resolve();
                };
    
                let store = trans.objectStore(TABLE_NAME);
                store.delete(track.id);
            });	
        },

}