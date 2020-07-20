const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { fetchAllUsers } = require('../Users/Users')
const { register, login, validateEmail, onUpdate } = require('../Users/validation')
const { addUser } = require('../DB/db');

// Register
router.post('/register', async (req, res) => {
    const users = await fetchAllUsers()
    const validate = validateEmail(req.body.id)

    if (!validate) return res.json({ msg: "Invalid email" })

    const [existUser] = users.filter(user => user.s_id === validate.id)

    if (!existUser) return res.json({ msg: "Invalid Student ID" })
    if (existUser.password) return res.json({ msg: 'this ID had already register' })
    // if (existUser.pin !== req.body.pin) return res.json({ msg: 'Invalid PIN' })

    res.send(await register({ ...existUser, ...{ password: req.body.password }, ...{ nickName: req.body.nickName.trim() } }))

})

// Login
router.post('/login', async (req, res) => {
    const fetch_ = await fetchAllUsers();

    const validate = validateEmail(req.body.id)

    if (!validate) return res.json({ msg: 'Invalid email' })

    const [existUser] = fetch_.filter(user => user.s_id === validate.id)
    if (!existUser) return res.json({ msg: 'Wrong ID or Password' })

    const verified = await login({ user: { id: validate.id, password: req.body.password }, fetch_ })

    if (!verified) return res.json({ msg: 'Wrong ID or Password' })

    const token = jwt.sign({ _id: existUser._id }, process.env.SECRET_KEY)

    res.header('auth-token').send(token)


})

// Admin => Add user
router.post('/add_user/', async (req, res) => {
    const { id, firstName, lastName } = req.body.data
    const users = await fetchAllUsers() || []
    // if (users) return addUser(req.body.data)

    users.forEach(user => {
        const existUser = user.id === id;
        if (existUser) return res.json({ msg: `${id} had already in database` })
    })

    await addUser(req.body.data)

    res.json({ msg: `${id} had add in Database` })

})

router.patch('/update', async (req, res) => {
    let _fetch = await fetchAllUsers()
    const data = req.body
    const [user] = _fetch.filter(e => e.s_id === data.s_id)

    const refactor = (k, v) => {
        v = v.trim()
        if (v === '') return user[k]
        if (v === '-') return
        return v

    }

    const updated = {
        _id: user._id,
        s_id: refactor('s_id', data.s_id),
        firstName: refactor('firstName', data.firstName),
        lastName: refactor('lastName', data.lastName),
        nickName: refactor('nickName', data.nickName),
        pin: refactor('pin', data.pin),
        isRegistered: refactor('isRegistered', data.isRegistered),
        hint: refactor('hint', data.hint)
    }


    res.json(await onUpdate(updated))
})


module.exports = router;




// app.post('/register', async (req, res) => {
//     let users
//     await set_users().then(v => users = v)

//     const [existUser] = users.filter(e => e.s_id === req.body.id)

//     if (existUser) {
//         res.json({ status: 'This user had already register' })
//         return
//     }

//     const salt = brcypt.genSaltSync(10);
//     const hashed = brcypt.hashSync(req.body.password, salt)

//     axios.post(`${URL}/users.json`, {
//         s_id: req.body.id,
//         password: hashed,
//         permission: req.body.slice(0, 2) == '63' ? 'junior' : 'senior'
//     })
//     res.json({ status: "Register Successful" })
// })

// app.post('/login', async (req, res) => {
//     let users
//     await set_users().then(v => users = v)

//     const [existUser] = users.filter(e => e.s_id === req.body.id)
//     if (!existUser) {
//         res.json({ status: 'ID or Password is wrong' })
//         return
//     }
//     console.log(existUser.password || null)
//     // const verifiedPassword = brcypt.compareSync(req.body.password, existUser.password)
//     // if (!verifiedPassword) {
//     //     res.json({ status: 'ID or Password is wrong' })
//     //     return
//     // }    
//     res.json({ status: 'Logged in' })

// })
