const express = require('express');
const cors = require('cors');

const port = process.env.PORT;
const messagesRouter = require("./routers/messagesRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(messagesRouter);

app.listen(port, () => console.log("Server connected, port:", port));