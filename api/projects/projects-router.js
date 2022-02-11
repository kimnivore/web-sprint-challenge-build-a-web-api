// Write your "projects" router here!
const express = require('express');

const Projects = require('./projects-model');

const { validateId } = require('./projects-middleware');

const router = express.Router();

// [GET] /api/projects
router.get('/', (req, res, next) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            console.log(error);
            next(error);
            res.status(500).json({
                message: 'Error retrieving projects',
            })
        })
});

// [GET] /api/projects/:id
router.get('/:id', validateId, (req, res) => {
    res.status(200).json(req.project);
});

// [POST] /api/projects

// [PUT] /api/projects/:id

// [DELETE] /api/projects/:id

// [GET] /api/projects/:id/actions


module.exports = router;