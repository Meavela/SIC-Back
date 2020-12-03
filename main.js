var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/db.sqlite', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

db.serialize(() => {
    db.each("SELECT * FROM Votes", function (err, row) {
        if (err) {
            console.error(err.message);
        }
        console.log(row);
    });
});

db.close();