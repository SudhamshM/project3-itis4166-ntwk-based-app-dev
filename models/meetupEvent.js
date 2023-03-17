const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');

const app = express();

const meetupSchema = new Schema(
    {
        category: {type: String, enum: ['Action', 'Romance', 'Comedy', 'Horror', 'Other'], default: 'Other', required: [true, "Category is required"]},
        title: {type: String, required: [true, "Title is required"]},
        details: {type: String, required: [true, "Details are required"]},
        location: {type: String, required: [true, "Location is required"]},
        hostName: {type: String, required: [true, "Host name is required"]},
        startTime: {type: Date, required: [true, "Start date is required"]},
        endTime: {type: Date, required: [true, "End date is required"]},
        image: {type: String, required: [true, "Image is required"]},
    },
    {timestamps: true}
)

// collection name in db is meetups
module.exports = mongoose.model('Meetup', meetupSchema);
