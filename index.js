const express = require('express');
const app = express();

app.use(express.static("public"));

const port = process.env.port || 3000;

app.get("/yeah", (req, res) => {
    res.send("nöfwii.");
});

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})