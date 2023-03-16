const express = require('express');
const router = express.Router();

const controller = require('../controllers/eventController');
const {fileUpload} = require('../middleware/fileUpload')

// /GET stories: send all stories to user

router.get('/', controller.index);

// /GET stories/new: send a new page to create a new story

router.get('/new', controller.new);

// /POST /stories create a new story
router.post('/', fileUpload, controller.create);

// GET /stories/:id - send details of story with id
router.get('/:id', controller.show)

// GET /stories/:id/edit - show edit form page to edit post with id
router.get('/:id/edit', controller.edit)

// /PUT /stories/:id - edit post with id
router.put('/:id', fileUpload, controller.update)


// /DELETE /stories/:id - delete post with id
router.delete('/:id', controller.delete)

module.exports = router;