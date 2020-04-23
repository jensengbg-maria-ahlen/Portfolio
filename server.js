//Database
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);

//Express
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

//HTTP
const http = require('http').createServer(app);

//Socket.io
const io = require('socket.io')(http);
io.on('connection', (socket) => {
    socket.on('join', () => {
        console.log(socket);
    });
});


//Add info to the database
db.defaults({ person: [] }).write();
//db.get('person').push({ FirstName: 'Maria', LastName: 'Åhlén', YearOfBirth: 1993, MonthOfBirth: 'November', DayOfBirth: 13 }).write();


http.listen(8000, () => {
    console.log('Server started...');
});