const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const corsOptions = {
    origin: "http://localhost:3002"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require('./models');
db.mongoose.connect(db.url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => {
        console.log("Connected to database, YO!");
    })
    .catch(err => {
        console.log("Cannot connect to the fucking database... FUUUUUCK!!!!", err);
        process.exit();
    });

app.get('/', (req, res) => {
    res.json({message: "Hello, Friend...\nThis is my message to me!"});
});

require('./routes/login.routes')(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
