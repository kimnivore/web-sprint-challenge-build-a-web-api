// add middlewares here related to projects
const Projects = require('../projects/projects-model');

async function validateId(req, res, next) {
    const id = req.params.id
    const project = await Users.get(id);
    if(!project) {
        res.status(404).json({message: 'project not found' });
    } else {
        req.project = project;
        next();
    }
}