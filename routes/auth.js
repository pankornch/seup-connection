const express = require('express');
const router = express.Router();
const { register, existUser, genToken, verifyPassword, isRegister } = require('../middleWare/validation');
const verifiedToken = require('../middleWare/verifiedToken');


const { addUser } = require('..//DB/db');

// Register
router.post('/register', async (req, res) => {
    const body = req.body;

    if (await isRegister(body.s_id)) return res.send("can not register");

    register(body);

    res.json({
        msg: 'Success',
        token: genToken(body.s_id)
    });
});

router.post('/login', verifiedToken, async (req, res) => {
    const body = req.body;


    if (!req.user && ! await verifyPassword(body)) return res.send('invalid username or password');
    if (!body) return res.send('Invaid data');

    existUser(body.s_id || req.user.id_).then(el => {
        const {password, ...rest} = el;
        res.json({
            msg: 'Success',
            token: genToken(body.s_id),
            user: {...rest }
        });
    })
})



router.post('/addUser', (req, res) => {
    const body = req.body;
    const permission = body.s_id.slice(0, 2) === "62" ? "sophomore" : "fresher"
    const user = { ...body, ...{ permission } };
    addUser(user);
    res.send('');
});


module.exports = router;

