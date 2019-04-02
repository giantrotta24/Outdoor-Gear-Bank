const mongoose = require("mongoose");
const { Schema } = mongoose;

const CustomerSchema = new Schema({
    last_name: {
        type: String,
        required: true,
        description: "Customer's last name"
    },
    first_name: {
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
    items: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item',
            description: "Items currently rented out by customer. To be cleared out when items are returned."
        }
    ]
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;