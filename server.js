const express = require('express');
const cors = require('cors')
const app = express();
const ipv4 = require('local-ipv4-address');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());
// app.use(require('./middleWare/logger'))

app.use('/auth', require('./routes/auth'));
app.use('/post', require('./routes/post'));

ipv4().then(ip => {
    app.listen(process.env.PORT || 3000, ip, () => console.log(`server started http://${ip}:${3000}`));
});
