const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve("client", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("client", "index.html"));
})

app.listen(3000, () => console.log(`server is listening at localhost:3000`));