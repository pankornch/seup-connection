const express = require('express');
const router = express.Router();
const { fetchUsers } = require('../DB/db');
const {random} = require('../middleWare/random');

router.get("/", async (req, res) => {
    const fetch_ = await fetchUsers();
    res.header("Content-Type", 'application/json')
    res.send(JSON.stringify(fetch_, null, 4));
})

router.post('/random', (req, res) => {
    const body = req.body;
    random(body.s_id);
    
})

module.exports = router;