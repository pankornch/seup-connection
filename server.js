const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();

const { fetchAllUsers, fetchSeniorUsers, fetchJuniorUsers, fetchJoinedTable } = require('./Users/Users');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.use(cors())
app.use(require('./middleWare/logger'))















app.use('/auth/', require('./routes/auth'));
app.use('/post', require('./routes/post'));

app.get('/all_users', async (req, res) => {
    const users = await fetchAllUsers()
    const Users = users.map(v => {
        return {
            s_id: v.s_id,
            firstName: v.firstName,
            lastName: v.lastName,
            nickName: v.nickName,
            pin: v.pin,
            permission: v.permission,
            hint: v.hint,
            isRegistered: v.password && true
        }
    })
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(Users, null, 4))
});


app.get('/search/:id', async (req, res) => {
    const users = await fetchAllUsers()
    const [existUser] = users.filter(user => user.s_id === req.params.id)

    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(existUser, null, 4))
})

app.get('/senior', async (req, res) => {
    const users = await fetchSeniorUsers()
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(users, null, 4))
})


app.get('/junior', async (req, res) => {
    const users = await fetchJuniorUsers();
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(users, null, 4))
})

app.get('/table', async (req, res) => {
    const table = await fetchJoinedTable();
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(table, null, 4))
})

app.get('test', (req, res) => {
    res.send('test')
})

app.use((req, res) => {
    res.send('Unknown Path')
})


app.listen(process.env.PORT || 3000, () => console.log(`server started`));