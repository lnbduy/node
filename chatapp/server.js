const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(express.json());

var dbUrl = 'mongodb://localhost/learning-node';

app.use(express.urlencoded({ extended: true }));

const Message = mongoose.model('Message', {
    name: String,
    message: String
})

const messages = [
    {name: 'Tim', message: 'Hi'},
    {name: 'Jane', message: 'Hello'}
]

app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages);
    });
});

app.get('/messages/:user', (req, res) => {
    const user = req.params.user;
    Message.find({name: user}, (err, messages) => {
        res.send(messages);
    });
});

app.post('/messages', async (req, res) => {
    try {
        const message = new Message(req.body);
        const savedMessage = await message.save();
        console.log('save');
        const censored = await Message.findOne({message: 'badword'});
        if (censored) {
            await Message.remove({ _id: censored._id });
        } else {
            io.emit('message', req.body);
        }
        res.sendStatus(200);    
    } catch (error) {
        res.sendStatus(500);
        return console.error(error);
    } finally {
       console.log('Message post called');
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');
})

mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    console.log('mongo db connection', err ? err : '');
});

const server = http.listen(3000, () => {
    console.log('server is listening on port ', server.address().port);
});