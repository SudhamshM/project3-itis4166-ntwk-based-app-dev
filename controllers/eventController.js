const express = require('express');
const model = require('../models/meetupEvent')



// /GET stories: send all stories to user

exports.index = (req, res) =>
{
    let categoryStories = {action: model.findByGenre('Action'), romance: model.findByGenre('Romance')}
    let eventObject = model.findAll();
    res.render('./event/index', {stories: categoryStories, eventObject});
};

exports.new = (req, res) =>
{
    res.render('./event/new');
};

exports.create = (req, res, next) =>
{
    let event = req.body;
    event.image = "images/" + req.file.filename;
    model.save(event);
    let image = req.file.filename;
    console.log("image: " + image);
    // let categoryStories = {action: model.findByGenre('Action'), romance: model.findByGenre('Romance')}
    res.render('./event/event', {event})
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