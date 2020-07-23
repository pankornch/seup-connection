const express = require('express');
const router = express.Router();
const { fetchUsers } = require('../DB/db');
const { joinTable, membersSophomore } = require('../Users/Users');
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

router.get('/getHint/:id', async (req, res) => {
    const id = req.params.id;
    const fetch_ = await joinTable();
    const fetch_sop = await membersSophomore();
    const [user] = fetch_.user.filter(el => el.fresher === id);

    try {
        const hint = [];
        user.sophomore.forEach((item) => {
            let result = fetch_sop.filter(el => el.s_id === item.s_id)[0].hint;
            hint.push(result)
        })
        return res.send(hint)
        
    } catch (error) {
        res.send("")
    }

})
module.exports = router;