/**
 * @author arman
 * @since 3/23/17
 *
 */

let db;
let request;
const version = 1;
const dbConfig = {
    init: () => {
        //prefixes of implementation that we want to test
        window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

        //prefixes of window.IDB objects
        window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
        window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange

        if (!window.indexedDB) {
            window.alert("Your browser doesn't support a stable version of IndexedDB.")
        }

        request = window.indexedDB.open("smartPlayer", version)
            .success((event) => {
                db = request.result;
                console.log("success: "+ db);
            })
            .error((event) => {
                console.log("error: ");
            })
            .onupgradeneeded((event) => {
                db = event.target.result;
                db.createObjectStore("tracks", {keyPath: "key"});
            });

    },
    add: ({title, album, artist, genre, path}) => {
        db
            .transaction(["tracks"], "readwrite")
            .objectStore("tracks")
            .add({ key: `${title}-${artist}-${album}`, title: title, artist: artist, album: album, genre: genre, path: path})
            .onsuccess((event) => {
                console.log(`${title} has been added to the database`);
            })
            .onerror((event) => {
                console.log(`${arguments} \n ${title} already exists in the database.`);
            });
    },
    getOne: (key) => {
        db
            .transaction(["tracks"])
            .objectStore("tracks")
            .get(key)
            .onsuccess((event) => {
                if(event.result) {
                    return event.result;
                }
                else {
                    console.log(`${key} couldn't be found in the database.`);
                }
            })
            .onerror((event) => {
                console.log(`${arguments} \n couldn't fetch data from the database.`);
            });
    },
    getAll: () => {
        db
            .transaction("tracks")
            .objectStore("tracks")
            .openCursor()
        
    }
};