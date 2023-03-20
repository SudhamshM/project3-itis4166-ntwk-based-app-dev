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
    .catch(err => 
        {
            if (err.name === 'ValidationError')
            {
                err.status = 400;
            }
            return next(err);
        })
    
};

exports.show = (req, res, next) =>
{
    let id = req.params.id;
    // check proper id given
    if (!id.match(/^[0-9a-fA-F]{24}$/))
    {
        let err = new Error('Invalid id given: ' + id)
        err.status = 400;
        return next(err);
    }
    model.findById(id)
    .then(
        (event) => {
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
}
    )
    .catch(err => next(err))
    
};

exports.edit = (req, res, next) =>
{
    let id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/))
    {
        let err = new Error('Invalid id given: ' + id)
        err.status = 400;
        return next(err);
    }
    model.findById(id)
    .then(
        (event) => {
            if (event)
            {
                res.render('./event/edit', {event})
            }
            else
            {
                let err = new Error("Cannot find event with id ");
                err.status = 404;
                next(err);
            }
                }
    )
    .catch(err => next(err))
};

exports.update = (req, res, next) => 
{
    let event = req.body;
    let id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/))
    {
        let err = new Error('Invalid id given: ' + id)
        err.status = 400;
        return next(err);
    }
    event.image = "images/" + req.file.filename;
    model.findByIdAndUpdate(id, event, {useFindAndModify: false, runValidators: true})
    .then((event) =>
    {
        if (event)
        {
            console.log("updated movie event");
            return res.redirect('/events/' + id);
        }
        else {
            let err = new Error('Cannot find a event with id ' +id);
            err.status = 404;
            next(err);
        }
    } )
    .catch(err => 
        {
            if (err.name === 'ValidationError')
            {
                err.status = 400;
            }
            return next(err); 
        })
    
   
};

exports.delete = (req, res, next) =>
{
    let id = req.params.id;
    if (!id.match(/^[0-9a-fA-F]{24}$/))
    {
        let err = new Error('Invalid id given: ' + id)
        err.status = 400;
        return next(err);
    }

    model.findOneAndDelete({_id: id})
    .then((event) =>
    {
        if (event)
        {
            return res.redirect('/events');
        }
        else
        {
            let err = new Error('Cannot find a event with id ' +id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err => next(err))
};

