const express =require("express");
const app =express();
const mongooes =require("mongoose");

app.listen(8080, () => {    // nodemon app.js
    console.log("server is running at port 8080")
})