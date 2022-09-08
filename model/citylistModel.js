var mongoose = require("mongoose");

const citylistSchema = mongoose.Schema([{
    location_id: String,
    name: String,
    city: String
}])

const cityList = mongoose.model("citylists", citylistSchema);

module.exports = cityList;