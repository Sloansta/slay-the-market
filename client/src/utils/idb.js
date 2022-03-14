// host all data pertaining to game logic in local storage on the front end
export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('slay-the-market', 1);

        let db, tx, store;

        request.onupgradeneeded = function (e) {
            const db = request.result;

            db.createObjectStore('cards', { keyPath: '_id' });
            db.createObjectStore('enemies', { keyPath: '_id' });
            db.createObjectStore('rooms', { keyPath: '_id' });
            db.createObjectStore('player', { keyPath: '_id' });
        };

        request.onerror = function (e) {
            console.log('error', e);
        };

        request.onsuccess = function (e) {
            db = request.result;

            tx = db.transaction(storeName, 'readwrite');
            store = tx.objectStore(storeName);

            db.onerror = function (e) {
                console.log('error', e)
            };
            // switch case case checks value of method and resolves action
            switch (method) {
                case 'put':
                    store.put(object);
                    resolve(object);
                    break;
                case 'get':
                    const all = store.getAll();
                    all.onsuccess = function() {
                        resolve(all.result);
                    };
                    break;
                case 'delete':
                    store.delete(object._id);
                    break;
                default:
                    console.log('no method');
                    break;
            };
        };
    });
}