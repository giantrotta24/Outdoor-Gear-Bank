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
        type: String,
        default: "Available",
        required: true,
        description: "One of three potential statuses. 'Available', 'Out for Rent', or 'In Maintenance'"
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
        type: String,
        default: "New",
        required: true,
        description: "General descriptor of the items condition. Options: 'New', 'Good', 'Fair', 'Poor'"
    },
    comments: [
        {
            //Store ObjectIds of the comments in the array
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    number_of_times_rented: {
        type: Number,
        required: true,
        description: "Keeps track of the number of times an item has been rented out. Potential use for future statistics."
    },
    maintenance_comments: [
        {
            //Store ObjectIds of the maintenance comments in the array
            type: Schema.Types.ObjectId,
            ref: "MaintenanceComment"
        }
    ],
    date_rented_out: {
        type: Date,
        description: "If not currently out for rent, this will be left empty. If out for rent, this will be the date it left with the customer."
    },
    date_due: {
        type: Date,
        description: "The date the item is due back from rent"
    },
    rented_by: {
        type: Schema.Types.ObjectId,
        ref: "Customer"
    }
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;