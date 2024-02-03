const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/DrinksCollection');
const DrinkSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    advantages: {
        type: String,
    },
    disadvantages: {
        type: String,
    },
    characteristics: [{
        title: String,
        description: String
    }],
    image: String
});
const Drink = mongoose.model('drink', DrinkSchema);
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.post("/drinks", async (req: any, resp: any) => {
    req.body.image = req.body.image.slice(12);
    try {
        const drink = new Drink(req.body);
        let result = drink.save();
        result = result.toObject();
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.listen(5000);
