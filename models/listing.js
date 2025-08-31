
const mongoose =require("mongoose");
const Schema = mongoose.Schema;


const ListingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default:
            "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib",
        set :(v) => v ==="" 
        ? "https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib" : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;