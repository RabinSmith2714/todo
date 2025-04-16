const express = require('express');
const { createTODO } = require('../models/todo');
const { deleteTODO, updateTODO,listTODO } = require('../models/todo');
const router = express.Router();

router.post('/', async(req, res) => {
    const { title, description } = req.body;
    const todo = await createTODO(title, description);
    res.send(todo);
});

router.delete('/:id', async(req, res) => {
    const _id = req.params.id;
    const resp = await deleteTODO(_id);
    res.send(resp);
});

router.put(`/:id`, async(req, res) => {
    const _id = req.params.id;
    const { title, description } = req.body;
    const resp = await updateTODO(_id, title, description);
    res.send(resp);
});

router.get('/', async(req, res) => {
    let {page, limit} = req.query;
    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;
    const skip = (page - 1) * limit;
    const todos = await listTODO(skip, limit);
    res.send(todos);
});

module.exports = router;