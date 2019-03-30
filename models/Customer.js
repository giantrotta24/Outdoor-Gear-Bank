const mongoose = require("mongoose");
const { Schema } = mongoose;

const CustomerSchema = new Schema({
    lastName: {
        type: String,
        required: true,
        description: "Customer's last name"
    },
    firstName: {
        type: String,
        required: true,
        description: "Customer's first name"
    },
    email: {
        type: String,
        required: true,
        match: [/.+@\..+/, "Please enter valid email address."],
        description: "Customer email."
    },
    phone_number: {
        type: String,
        required: true,
        description: "Customer phone number."
    },
    member_number: {
        type: Number,
        description: "Customer's member number, not required."
    },
    items_rented: {
        type: [String],
        description: "Items currently rented out to customer stored in an array. Empty if no items rented out. This will contain the item's unique id from database."
    }
});

const Item = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;