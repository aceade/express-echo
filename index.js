
const express = require('express');
const app = express();
const port = 3000;

// need the JSON middleware
app.use(express.json());

// echo back to the user
app.post("/*", (req, res) => {
    res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});