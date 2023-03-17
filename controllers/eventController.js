const model = require('../models/meetupEvent')



// /GET stories: send all stories to user

exports.index = (req, res, next) =>
{
    model.find()
    .then((events) => 
    {
        let array = Array.from(events);
        result = array.reduce(function (eventObject, event) 
        {
            eventObject[event.category] = eventObject[event.category] || [];
            eventObject[event.category].push(event);
            return eventObject;
        }, Object.create(null));
        return res.render('./event/index', {eventObject: result})
    })
    .catch(err => next(err))
   
    
};

exports.new = (req, res) =>
{
    res.render('./event/new');
};

exports.create = (req, res, next) =>
{
    let event = req.body;
    event.image = "images/" + req.file.filename;
    let eventModel = new model(event);
    eventModel.save()
    .then((event) => res.render('./event/event', {event}))
    .catch(next(err))
    
};

exports.show = (req, res, next) =>
{
    let id = req.params.id;
    let event = model.findByid(id);
    if (event)
    {
        res.render('./event/event', {event})
    }
    else
    {
        let err = new Error("Cannot find event with id " + id);
        err.status = 404;
        next(err);
    }
    
};

exports.edit = (req, res, next) =>
{
    let id = req.params.id;
    let event = model.findByid(id);
    if (event)
    {
        res.render('./event/edit', {event});
    }
    else
    {
        let err = new Error("Cannot find event with id " + id);
        err.status = 404;
        next(err);
    }
};

exports.update = (req, res, next) => {
    let event = req.body;
    let id = req.params.id;
    event.image = "images/" + req.file.filename;
    if (model.updateById(id, event)) 
    {
        console.log("updated movie event");
        res.redirect('/events/' + id);
    } 
    else {
        let err = new Error('Cannot find a event with id ' +id);
        err.status = 404;
        next(err);
    }
};

exports.delete = (req, res, next) =>
{
    let id = req.params.id;
    let event = model.find(id);
    if (model.deleteById(id)) {
        res.redirect('/events');
    } else {
        let err = new Error('Cannot find a event with id ' +id);
        err.status = 404;
        next(err);
    }
};

