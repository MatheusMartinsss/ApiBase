const express = require('express')
const routes = require('./routers')
require("dotenv").config();
require('./database')
const app = express();
app.listen(3333)
app.use(express.json())
app.use(routes)