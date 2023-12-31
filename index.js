
const express = require('express');
const cors = require("cors");
const app = express();
const port = 8080;

// need the JSON middleware
app.use(express.json());

// by default, it allows from all origins
app.use(cors());

// echo back to the user
app.get("/*", (req, res) => {
    res.send(req.body);
});

app.post("/*", (req, res) => {
    res.send(req.body);
});

app.put("/*", (req, res) => {
    res.send(req.body);
});

app.delete("/*", (req, res) => {
    res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});