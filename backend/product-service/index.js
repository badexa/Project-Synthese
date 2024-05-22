const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api', router);

const PORT = process.env.PORT || 8082;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to Product Service DB");
        console.log("Product Service running on port " + PORT);
    });
});
