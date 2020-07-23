const express = require('express');
const router = express.Router();
const { joinTable, User, admin } = require('../Users/Users');
const { random } = require('../middleWare/random');
const { isRandom } = require('../middleWare/validation')
const logger = require('../middleWare/logger');
const verifyToken = require('../middleWare/verifiedToken');

const {sentHint} = require('../DB/db');

// router.get("/", logger, async (req, res) => {
//     const fetch_ = await admin();
//     res.header("Content-Type", 'application/json')
//     res.send(JSON.stringify(fetch_, null, 4));
// })

router.post('/sentHint/:id', (req, res) => {
    const id = req.params.id;
    const hint = req.body.hint;
    
    sentHint(id, hint)
    res.send(id)

})

router.post('/random', verifyToken, logger, async (req, res) => {
    const body = req.body;

    if (await isRandom(body.s_id)) return res.send('can not random');

    res.send(await random(body.s_id));
})

router.post('/getHint/:id', verifyToken, logger, async (req, res) => {
    const id = req.params.id;
    const permission = req.body.permission;
    const fetch_ = await joinTable();

    if (permission === "fresher") {
        res.send(await onFresher(id, fetch_));
    }
    if (permission === "sophomore") {
        res.send(await onSophomore(id, fetch_));
    }
})


function onFresher(id, fetch_) {
    return new Promise((resolve, reject) => {
        try {
            const [user] = fetch_.user.filter(el => el.fresher === id);

            let promise = user.sophomore.map(async el => (await User(el.s_id)).hint);
            resolve(Promise.all(promise));
        } catch (err) {
            resolve();
        }
    })
}

async function onSophomore(id, fetch_) {
    const [data] = fetch_.user.filter(el => el.sophomore.find(e => e.s_id === id));
    let fresher;
    try {
        fresher = await User(data.fresher)
    } catch (error) {
        return
    }
    return {
        firstName: fresher.firstName,
        lastName: fresher.lastName,
        nickName: fresher.nickName
    }

}


module.exports = router;