const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require(''mongoose);
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors());

