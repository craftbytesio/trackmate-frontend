import {apiClient} from '@/service/API'

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
            this.checkForUpdate();

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

        async saveTrack(track) {

            let db = await this.getDB();
    
            return new Promise(resolve => {
    
                let trans = db.transaction([TABLE_NAME],'readwrite');
                trans.oncomplete = () => {
                    resolve();
                };
    
                let store = trans.objectStore(TABLE_NAME);
                store.put(track)
                console.log('Save in real DB');
                //apiClient.post('/tracks', track)

            });
        
        },

        async deleteTrack(track) {

            let db = await this.getDB();
    
            return new Promise(resolve => {
    
                let trans = db.transaction([TABLE_NAME],'readwrite');
                trans.oncomplete = () => {
                    resolve();
                };
    
                let store = trans.objectStore(TABLE_NAME);
                store.delete(track.id);
            });	
        },

        async checkForUpdate() {
            return new Promise(resolve => {
                if(navigator.onLine) {
                    let onlineTracks = [];

                    apiClient
                        .get('/tracks')
                        .then((response) => {
                            onlineTracks = response.data.data
                            
                            onlineTracks.forEach(element => {
                                this.saveTrack(element);
                            });

                            resolve();
                        })

                } else {
                    console.log('App ist offline');
                }
            })
        }

}