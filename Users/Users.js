const axios = require('axios');
require('dotenv').config();
const { fetchAllUsers_db, fetchJoinedTable_db } = require('../DB/db')


const fetchAllUsers = async () => {
    return await fetchAllUsers_db();
}
module.exports.fetchAllUsers = fetchAllUsers

const fetch_all = fetchAllUsers()


module.exports.fetchSeniorUsers = async () => {

    const users = await fetch_all
    return users.filter(e => e.permission === 'senior')
}

module.exports.fetchJuniorUsers = async () => {

    const users = await fetch_all
    return users.filter(e => e.permission === 'junior')
        .map(e => {
            return {
                id: e.id,
                s_id: e.s_id,
                firstName: e.firstName,
                lastName: e.lastName,
                nickName: e.nickName,
                pin: e.pin,
                password: e.password,
                permission: e.permission
            }
        })
}

module.exports.fetchJoinedTable = async () => {

    const users = await fetch_all
    const [table] = await fetchJoinedTable_db()
    const [hint] = users.filter(e => e._id === table.senior._id)
    return [{ ...table, ...{ hint: hint.hint } }]
}



// ------------------------------------------------------------------------------------------------------ //



// const fetchAllUsers = () => new Promise(async (resolve, reject) => {
//     const fetch_keys = await axios.get(`${process.env.URL}/users.json`).then(v => v.data)

//     try {
//         resolve(
//             Object.keys(fetch_keys).map(e => {
//                 return {
//                     _id: e,
//                     s_id: fetch_keys[e].student_id,
//                     password: fetch_keys[e].password,
//                     firstName: fetch_keys[e].first_name,
//                     lastName: fetch_keys[e].last_name,
//                     nickName: fetch_keys[e].nick_name,
//                     pin: fetch_keys[e].pin,
//                     permission: fetch_keys[e].permission,
//                     hint: fetch_keys[e].hint
//                 }
//             })
//         )
//     } catch (error) {
//         reject()
//     }

// })



// Asynchronusly
// module.exports = (async () => {
//     const fetch_keys = await axios.get(`${URL}/users.json`).then(v => v.data)

//     const users = Object.keys(fetch_keys).map(e => {
//         return {
//             _id: e,
//             s_id: fetch_keys[e].s_id,
//             password: fetch_keys[e].password
//         }
//     })
//     return users
// })()

// module.exports.fetchAllUsers = () => new Promise(async (resolve, reject) => {
