const express = require('express');
const router = express.Router();

// /GET index: homepage of MM

exports.index = (req, res) =>
{
    res.render('./main/index');
};

// /GET index: homepage of MM

exports.about = (req, res) =>
{
    res.render('./main/about');
};

exports.contact = (req, res) =>
{
    res.render('./main/contact')
}