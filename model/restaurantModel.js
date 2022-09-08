var mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema([{
    name: String,
    description: String,
    address: String,
    location: String,
    image: String,
    cuisine: String,
    min_price: Number,
    contact: Number,
    locality: String,
    city: String,
}])

const restaurants = mongoose.model("restaurants", restaurantSchema);

module.exports = restaurants;