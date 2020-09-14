const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/FullStack-Todo-App");
const app = express();

app.listen(4000, () => console.log("Sunucu port 4000'de çalıştı"));
