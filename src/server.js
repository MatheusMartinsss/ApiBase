const express = require('express')
const routes = require('./routers')
const cors = require('cors')
require("dotenv").config();
require('./database')
const app = express();
app.use(cors())

app.listen(3333)
app.use(express.json())
app.use(routes)