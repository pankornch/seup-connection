const admin = require('firebase-admin');
const serviceAccount = require("../se-members.json");
require('dotenv');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
});
const db = admin.firestore();
















// ---------------------------------------------------------------------- //

const axios = require('axios');
require('dotenv').config();


module.exports.fetchAllUsers_db = () => new Promise(async (resolve, reject) => {
    logged('fetchAllUsers_db')
    const fetch_keys = await axios.get(`${process.env.URL}/users.json`).then(res => res.data)

    try {
        resolve(
            Object.keys(fetch_keys).map(e => {
                return {
                    _id: e,
                    s_id: fetch_keys[e].student_id,
                    password: fetch_keys[e].password,
                    firstName: fetch_keys[e].first_name,
                    lastName: fetch_keys[e].last_name,
                    nickName: fetch_keys[e].nick_name,
                    pin: fetch_keys[e].pin,
                    permission: fetch_keys[e].permission,
                    hint: fetch_keys[e].hint
                }
            })
        )
    } catch (error) {
        reject()
    }

})


module.exports.onRegister = async (user) => {
    logged()

    try {
        await axios.put(`${process.env.URL}/users/${user._id}.json`, {
            student_id: user.s_id,
            first_name: user.firstName,
            last_name: user.lastName,
            nick_name: user.nickName,
            pin: user.pin,
            permission: user.permission,
            password: user.password
        })
        return 'Success'

    } catch (error) {
        return error
    }
}

module.exports.update = async (data) => {
    logged('update')

    const { user, filter_ } = data
    try {
        axios.put(`${process.env.URL}/users/${user._id}.json`, {
            student_id: user.s_id,
            first_name: user.firstName,
            last_name: user.lastName,
            nick_name: user.nickName,
            pin: user.pin,
            permission: filter_.permission,
            hint: user.hint,
            password: user.isRegistered === 'true' ? filter_.password : null
        })
    } catch (error) {
        console.log(error)
    }
    const { password, _id, ...rest } = user
    return rest
}


module.exports.addUser = async () => {
    logged('addUser')

    const { id, firstName, lastName } = data

    const permission = id.slice(0, 2) === "62" ? "senior" : "junior"

    axios.post(`${process.env.URL}/users.json`, {
        student_id: id,
        permission,
        first_name: firstName,
        last_name: lastName,
    })
}

module.exports.fetchJoinedTable_db = () => new Promise(async (resolve, reject) => {
    logged('fetchJoinedTable_db')

    const fetch_keys = await axios.get(`${process.env.URL}/joinedTable.json`).then(res => res.data)
    try {
        resolve(
            Object.keys(fetch_keys).map(e => {
                return {
                    _id: e,
                    senior: fetch_keys[e].senior,
                    junior: fetch_keys[e].junior
                }
            })
        )
    } catch (error) {
        return null;
    }
})

module.exports.joinTable = async (data) => {
    logged('joinTable')
    axios.post(`${process.env.URL}/joinedTable.json`, data).then(res => console.log(res.data))
}




const logged = (v) => {
    console.log(`::: REQUEST DATABASE ::: ${v}`)
}

