// const bcrypt = require('bcryptjs');

// function test(x) {
//     const salt = bcrypt.genSaltSync(10);
//     const hashed = bcrypt.hashSync(x, salt)
//     return hashed
// }

// console.log(test('rootadmin'));

// async function a() {

    
//     const fecthUsers = await require('./Users/Users');
//     console.log(fecthUsers)
// }
// a()

// const { register } = require('./Users/validation');
// console.log(register('hello'))
// require('dotenv').config();

const {fetchUsers} = require('./DB/db')
fetchUsers().then(v => console.log(v))