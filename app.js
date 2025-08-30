const express =require("express");
const app =express();
const mongooes =require("mongoose");

// start server we use  // nodemon app.js

app.get("/", (req,res)   => {  // for check visit http://localhost:8080/
    res.send("Hi, i am root ");
});

app.listen(8080, () => {
    console.log("server is running at port 8080")
})