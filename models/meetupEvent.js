const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const express = require('express');

const app = express();

const meetupSchema = new Schema(
    {
        category: {type: String, required: [true, "Category is required"]},
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
// const events = [
//     {
//         id: '1',
//         title: 'Free Guy (2021)',
//         details: "A bank teller discovers that he's \
//         actually an NPC inside a brutal, open world video game",
//         hostName: 'Sudhamsh Mondrati',
//         category: 'Action',
//         startTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:10, minute: 30})
//         .toLocaleString(DateTime.DATETIME_MED),
//         endTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:13, minute: 0})
//         .toLocaleString(DateTime.DATETIME_MED),
//         image: 'images/free-guy.jpg',
//         location: 'Woodward Hall'
//     },
//     {
//         id: '2',
//         title: 'Venom: Let There Be Carnage (2021)',
//         details: "Tom Hardy returns to the big screen as the lethal protector Venom, one of MARVEL's greatest and most complex characters.        ",
//         hostName: 'Eddie Brock',
//         startTime: DateTime.fromObject({year: 2022, month:2, day: 24, hour:7, minute: 30})
//         .toLocaleString(DateTime.DATETIME_MED),
//         category: 'Romance',
//         endTime: DateTime.fromObject({year: 2022, month:2, day: 24, hour:9, minute: 30})
//         .toLocaleString(DateTime.DATETIME_MED),
//         image: 'images/venom-2.jpg',
//         location: 'San Francisco'
//     },
//     {
//         id: '3',
//         title: 'Venom (2018)',
//         details: "A failed reporter is bonded to an alien entity, one of many symbiotes who have \
//         invaded Earth. But the being takes a liking to Earth and decides to protect it.",
//         hostName: 'Tom Hardy',
//         category: 'Action',
//         startTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:10, minute: 30})
//         .toLocaleString(DateTime.DATETIME_MED),
//         endTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:13, minute: 0})
//         .toLocaleString(DateTime.DATETIME_MED),
//         image: 'images/venom.jpg',
//         location: 'Life Foundation'
//     },
//     {
//     id: '4',
//     title: 'Paper Towns (2015)',
//     details: "After an all-night adventure, Quentin's lifelong crush, Margo, disappears, leaving behind clues \
//      that Quentin and his friends follow on the journey of a lifetime.",
//     hostName: 'Quentin',
//     category: 'Romance',
//     startTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:10, minute: 30})
//     .toLocaleString(DateTime.DATETIME_MED),
//     endTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:13, minute: 0})
//     .toLocaleString(DateTime.DATETIME_MED),
//     image: 'images/paper-towns.jpg',
//     location: 'New York'
//     },
//     {id: '5',
//         title: 'Inception (2010)',
//         details: "A thief who steals corporate secrets through the use of dream-sharing \
//         technology is given the inverse task of planting an idea into the mind of a C.E.O., \
//         but his tragic past may doom the project and his team to disaster.",
//         hostName: 'Cobb & Mal',
//         category: 'Action',
//         startTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:10, minute: 30})
//         .toLocaleString(DateTime.DATETIME_MED),
//         endTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:13, minute: 0})
//         .toLocaleString(DateTime.DATETIME_MED),
//         image: 'images/inception.jpg',
//         location: 'Limbo'
//     },
//     {id: '6',
//         title: 'Most Eligible Bachelor (2021)',
//         details: "A bachelor living in the U.S. returns to India determined to find a wife and\
//          falls for a stand-up comedian who appears uninterested in being romantically pursued.",
//         hostName: 'Harsha',
//         category: 'Romance',
//         startTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:10, minute: 30})
//         .toLocaleString(DateTime.DATETIME_MED),
//         endTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:13, minute: 0})
//         .toLocaleString(DateTime.DATETIME_MED),
//         image: 'images/meb.jpg',
//         location: 'India'
//     },
// ]

