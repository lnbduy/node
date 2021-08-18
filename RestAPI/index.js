import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import jsonwebtoken from 'jsonwebtoken';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    userNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// JWT setup
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]==='JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', (err, decode) => {
            if (err) {
                req.user = undefined;
            }
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
})

routes(app);

app.get('/', (req, res) => 
    res.send(`Node and epxress server running on port ${PORT}`)
); 

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);
