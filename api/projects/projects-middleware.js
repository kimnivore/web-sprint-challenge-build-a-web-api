// add middlewares here related to projects
const Projects = require('../projects/projects-model');

async function validateId(req, res, next) {
    const id = req.params.id
    const project = await Projects.get(id);
    if(!project) {
        res.status(404).json({message: 'project not found' });
    } else {
        req.project = project;
        next();
    }
}

function validateProject(req, res, next) {
    const { name, description } = req.body;
    if(!name || !name.trim() || !description || !description.trim()) {
        res.status(400).json({message: 'please include a name and description'});
    } else {
        req.name = name.trim();
        req.description = description.trim();
        next();
    }
}

module.exports = { validateId, validateProject };