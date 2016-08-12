import * as sqlite3 from "sqlite3";
var db = new sqlite3.Database('memory');

namespace File {
    function createTable(): void {
        db.serialize(function() {
            let statement =
                `CREATE TABLE files (
                pk       INTEGER PRIMARY KEY,
                filename TEXT,
                path     TEXT,
              );`
            db.run(statement);
        });
    }

    class File {
        id: number;
        filename: string;
        path: string;

        constructor(id: number, filename: string) {
            this.id = id;
        }
    }

}
