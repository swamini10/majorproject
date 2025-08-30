const express =require("express");
const app =express();
const mongoose =require("mongoose");
const Listing = require("./models/listing.js");

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

app.get("/listings", async (req,res)   => {  // for check visit http://localhost:8080/listings
    let sampleListing = new Listing({
        title: "my New Villa",
        description: "By the beach",
        price: 1200,
        location: "Calangute, Goa",
        country: "India"
    });
    await sampleListing.save();
    console.log("Sample was Saved ");
    res.send("Successful testing");
});

app.listen(8080, () => {
    console.log("server is running at port 8080")
})