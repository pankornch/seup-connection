const express = require('express');
const router = express.Router();
const verify = require('../middleWare/verifiedToken');
const { fetchAllUsers, fetchSeniorUsers, fetchJuniorUsers, fetchJoinedTable } = require('../Users/Users');
const { random } = require('../middleWare/random');


router.post('/', verify, async (req, res) => {
    const fetch_ = await fetchAllUsers();
    const [user] = fetch_.filter(e => e._id === req.user._id)
    res.json({
        s_id: user.s_id,
        firstName: user.firstName,
        lastName: user.lastName,
        nickName: user.nickName,
        hint: user.hint,
        permission: user.permission
    })
})

router.post('/random', verify, async (req, res) => {

    const fetch_senior = await fetchSeniorUsers();
    const fetch_table = await fetchJoinedTable();
    const fetch_junior = await fetchJuniorUsers();


    const [isRandom] = fetch_table.filter(e => e.junior._id === req.user._id)
    if (isRandom) {
        return res.json({ msg: 'Can not random twice' })
    }
    const hint = await random({ fetch_senior, fetch_table, user: fetch_junior.filter(e => e._id === req.user._id) })
    res.json({ hint })
})

router.post('/dashboard', verify, async (req, res) => {
    const fetch_all = await fetchAllUsers()
    const fetch_table = await fetchJoinedTable();
    const fetch_junior = await fetchJuniorUsers();
    const [hint] = fetch_table.filter(e => e.junior._id === req.user._id || e.senior._id === req.user._id)
    const [user] = fetch_all.filter(e => e._id === req.user._id)

    // Filter out
    const { _id, password, pin, ...rest } = user;

    const [isRandom] = fetch_junior.filter(e => e._id === fetch_table[0].junior._id);


    // Junior
    if (user.permission === 'junior') {
        if (!hint) return res.json({ user: { ...rest, ...{ isRandom: false } } })
        return res.json({ user: rest, hint: hint.hint, isRandom: !!isRandom })
    }


    // Senior

    if (!hint) return res.json({ user: { ...rest }, junior: {} })

    res.json({
        // Senior
        user: fetch_all.filter(e => e._id === hint.senior._id)
            .map(e => {
                return {
                    s_id: e.s_id,
                    firstName: e.firstName,
                    lastName: e.lastName,
                    nickName: e.nickName,
                    permission: e.permission,
                    hint: e.hint
                }
            })[0],


        // Junior
        junior: fetch_all.filter(e => e._id === hint.junior._id)
            .map(e => {
                return {
                    s_id: e.s_id,
                    firstName: e.firstName,
                    lastName: e.lastName,
                    nickName: e.nickName,
                }
            })[0]
    }
    )
})

module.exports = router;    