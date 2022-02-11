// Write your "actions" router here!
const express = require('express');

const Actions = require('./actions-model');

const { validateId } = require ('./actions-middlware');

const router = express.Router();


// [GET] /api/actions
router.get('/', (req, res, next) => {
    Actions.get()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            next(error);
            res.status(500).json({
                message: 'Error retrieving actions',
            })
        })
});

// [GET] /api/actions/:id
router.get('/:id', validateId, (req, res) => {
    res.status(200).json(req.actions);
})

// [POST] /api/actions

// [PUT] /api/actions/:id

// [DELETE] /api/actions/:id


module.exports = router;