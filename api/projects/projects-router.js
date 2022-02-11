// Write your "projects" router here!
const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

// [GET] /api/projects
router.get('/', (req, res, next) => {
    console.log('projects router is working');
    Projects.get(req.query)
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            next(error);
            res.status(500).json({
                message: "Error retrieving projects",
            })
        })
})

// [GET] /api/projects/:id

// [POST] /api/projects

// [PUT] /api/projects/:id

// [DELETE] /api/projects/:id

// [GET] /api/projects/:id/actions


module.exports = router;