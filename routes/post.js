const express = require('express');
const router = express.Router();
const { fetchUsers } = require('../DB/db');
const { random } = require('../middleWare/random');
const { isRandom } = require('../middleWare/validation')

router.get("/", async (req, res) => {
    const fetch_ = await fetchUsers();
    res.header("Content-Type", 'application/json')
    res.send(JSON.stringify(fetch_, null, 4));
})

router.post('/random', async (req, res) => {
    const body = req.body;

    if (await isRandom(body.s_id)) return res.send('can not random');

    res.send(await random(body.s_id));
})

module.exports = router;