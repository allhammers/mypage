const express = require('express');
const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 8080;

app.get("/yeah", (req, res) => {
    res.send("yeah!!!");
});

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})