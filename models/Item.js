const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    serial_number: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    comments: {
        type: [String],
    },
    number_of_times_rented: {
        type: Number,
        required: true
    },
    maintenance_comments: {
        type: [String]
    },
    dateRentedOut: {
        type:
    },
    dateDue: {

    }
})