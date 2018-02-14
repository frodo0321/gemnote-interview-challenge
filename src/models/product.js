const mongoose = require("mongoose");

const Product = new mongoose.Schema({

    name: {
        type: String
    },

    category: {
        type: String,
        enum: ["Drinkware", "Apparel - Women's", "Food/Beverage"]
    },

    tags: [{ // not really nessecary for the ui but good for searching
        type: String
    }],

    images: [{
        label: {
            type: String
        },
        url: {
            type: String
        }
    }],

    information: [{ // an array of string is used here to separate into bullet points
        type: String
    }],

    price: {
        amount: {
            type: Number
        },
        quantity: {
            type: Number
        }
    },

    types: { // for dropdown / color picker
        name: {
            type: String
        },
        values: [{
            type: String
        }],
        uiType: {
            type: String,
            enum: ["dropdown", "squares"]
        }
    }

}, {
    timestamps: true,
    versionKey: false
})





module.exports = Product;
