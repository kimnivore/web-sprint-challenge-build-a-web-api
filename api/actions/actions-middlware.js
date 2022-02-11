// add middlewares here related to actions
const Actions = require('./actions-model');

async function validateId(req, res, next) {
    const id = req.params.id
    const actions = await Actions.get(id);
    if(!actions) {
        res.status(404).json({message: 'actions not found'})
    } else {
        req.actions = actions;
        next();
    }
}

module.exports = { validateId };