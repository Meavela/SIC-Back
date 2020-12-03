const express = require('express')
const cors = require('cors')


// EXPRESS SETUP
const app = express()
const port = 3005
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());


// IMPORTS
const { getUsers } = require('./routes/users');

app.get('/getUsers', async (req, res) => {
    try {
        let users = await getUsers();
        res.send(users);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
    // handleConnection();
})











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