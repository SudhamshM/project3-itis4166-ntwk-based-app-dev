const {DateTime} =  require('luxon');
const {v4: uuidv4} = require('uuid');

const events = [
    {
        id: '1',
        title: 'Free Guy (2021)',
        details: "A bank teller discovers that he's \
        actually an NPC inside a brutal, open world video game",
        hostName: 'Sudhamsh Mondrati',
        category: 'Action',
        startTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:10, minute: 30})
        .toLocaleString(DateTime.DATETIME_MED),
        endTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:13, minute: 0})
        .toLocaleString(DateTime.DATETIME_MED),
        image: 'images/free-guy.jpg',
        location: 'Woodward Hall'
    },
    {
        id: '2',
        title: 'Venom: Let There Be Carnage (2021)',
        details: "Tom Hardy returns to the big screen as the lethal protector Venom, one of MARVEL's greatest and most complex characters.        ",
        hostName: 'Eddie Brock',
        startTime: DateTime.fromObject({year: 2022, month:2, day: 24, hour:7, minute: 30})
        .toLocaleString(DateTime.DATETIME_MED),
        category: 'Romance',
        endTime: DateTime.fromObject({year: 2022, month:2, day: 24, hour:9, minute: 30})
        .toLocaleString(DateTime.DATETIME_MED),
        image: 'images/venom-2.jpg',
        location: 'San Francisco'
    },
    {
        id: '3',
        title: 'Venom (2018)',
        details: "A failed reporter is bonded to an alien entity, one of many symbiotes who have \
        invaded Earth. But the being takes a liking to Earth and decides to protect it.",
        hostName: 'Tom Hardy',
        category: 'Action',
        startTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:10, minute: 30})
        .toLocaleString(DateTime.DATETIME_MED),
        endTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:13, minute: 0})
        .toLocaleString(DateTime.DATETIME_MED),
        image: 'images/venom.jpg',
        location: 'Life Foundation'
    },
    {
    id: '4',
    title: 'Paper Towns (2015)',
    details: "After an all-night adventure, Quentin's lifelong crush, Margo, disappears, leaving behind clues \
     that Quentin and his friends follow on the journey of a lifetime.",
    hostName: 'Quentin',
    category: 'Romance',
    startTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:10, minute: 30})
    .toLocaleString(DateTime.DATETIME_MED),
    endTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:13, minute: 0})
    .toLocaleString(DateTime.DATETIME_MED),
    image: 'images/paper-towns.jpg',
    location: 'New York'
    },
    {id: '5',
        title: 'Inception (2010)',
        details: "A thief who steals corporate secrets through the use of dream-sharing \
        technology is given the inverse task of planting an idea into the mind of a C.E.O., \
        but his tragic past may doom the project and his team to disaster.",
        hostName: 'Cobb & Mal',
        category: 'Action',
        startTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:10, minute: 30})
        .toLocaleString(DateTime.DATETIME_MED),
        endTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:13, minute: 0})
        .toLocaleString(DateTime.DATETIME_MED),
        image: 'images/inception.jpg',
        location: 'Limbo'
    },
    {id: '6',
        title: 'Most Eligible Bachelor (2021)',
        details: "A bachelor living in the U.S. returns to India determined to find a wife and\
         falls for a stand-up comedian who appears uninterested in being romantically pursued.",
        hostName: 'Harsha',
        category: 'Romance',
        startTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:10, minute: 30})
        .toLocaleString(DateTime.DATETIME_MED),
        endTime: DateTime.fromObject({year: 2022, month:2, day: 20, hour:13, minute: 0})
        .toLocaleString(DateTime.DATETIME_MED),
        image: 'images/meb.jpg',
        location: 'India'
    },
]

exports.find = function ()
{
    return events;
}

exports.findByid = (id) => events.find(event => event.id === id)

exports.findByGenre = (genre) => events.filter(event => event.category === genre)

exports.save = (event) =>
{
    event.id = uuidv4();
    let unparsedDate = event.startTime;
    let unparsedEnd = event.endTime;
    let parsedDate = DateTime.fromJSDate(new Date(unparsedDate)).toLocaleString(DateTime.DATETIME_MED);
    let parsedEnd = DateTime.fromJSDate(new Date(unparsedEnd)).toLocaleString(DateTime.DATETIME_MED);
    event.startTime = parsedDate;
    event.endTime = parsedEnd;
    events.push(event);
}

exports.findAll = function()
{
    result = events.reduce(function (eventObject, event) 
    {
        eventObject[event.category] = eventObject[event.category] || [];
        eventObject[event.category].push(event);
        return eventObject;
    }, Object.create(null));
    console.log("printing all movies");
    Object.keys(result).forEach(genre =>
    {
        console.log(result[genre])
    });
    return result;   
}

exports.deleteById = (id) =>
{
    let index = events.findIndex(event => event.id === id);
    if (index !== -1) 
    {
        events.splice(index,1);
        return true;
    } 
    else 
    {
        return false;
    }
}

exports.updateById = (id, newEvent) =>
{
    let event = events.find(event => event.id === id);
    if (event) 
    {
        event.category = newEvent.category;
        event.title = newEvent.title;
        event.host = newEvent.host;

        let unparsedDate = newEvent.startTime;
        let unparsedEnd = newEvent.endTime;
        let parsedDate = DateTime.fromJSDate(new Date(unparsedDate)).toLocaleString(DateTime.DATETIME_MED);
        let parsedEnd = DateTime.fromJSDate(new Date(unparsedEnd)).toLocaleString(DateTime.DATETIME_MED);
        event.startTime = parsedDate;
        event.endTime = parsedEnd;
        

        event.details = newEvent.details;
        event.location = newEvent.location;
        event.image = newEvent.image;
        
        return true;
    } 
    else 
    {
        console.log("update by id false")
        return false;
    }
}
