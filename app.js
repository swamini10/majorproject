const express =require("express");
const app =express();
const mongoose =require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"

main()
    .then(() => { 
        console.log("connected to db");
    })
    .catch((err) => {console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

// start server we use  // nodemon app.js

app.get("/", (req,res)   => {  // for check visit http://localhost:8080/
    res.send("Hi, i am root ");
});

app.listen(8080, () => {
    console.log("server is running at port 8080")
})