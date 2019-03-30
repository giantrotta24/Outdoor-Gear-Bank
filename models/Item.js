const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        description: "name of the product, ex. REI Passage 2"
    },
    category: {
        type: String,
        trim: true,
        required: true,
        description: "category the product falls under, ex. Tents"
    },
    status: {
        $in: ["Available", "Rented", "Maintenance"],
        default: "Available",
        required: true,
        description: "One of three potential statuses."
    },
    serial_number: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        description: "unique id for each item that is also physically on each item"
    },
    image: {
        type: String,
        required: true,
        description: "URL for image"
    },
    condition: {
        $in: ["New", "Good", "Fair", "Poor"],
        default: "New",
        required: true,
        description: "General descriptor of the items condition"
    },
    comments: {
        type: [String],
        description: "Comments are not required, comments are optional to put in each time an item is returned. These comments are stored in an array to save the comments."
    },
    number_of_times_rented: {
        type: Number,
        required: true,
        description: "Keeps track of the number of times an item has been rented out. Potential use for future statistics."
    },
    maintenance_comments: {
        type: [String],
        description: "Comments to be inputed when maintenance is performed on an item. Stored in an array to save previous comments."
    },
    dateRentedOut: {
        type: Date,
        description: "If not currently out for rent, this will be left empty. If out for rent, this will be the date it left with the customer."
    },
    dateDue: {
        type: Date,
        description: "The date the item is due back from rent"
    }
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;