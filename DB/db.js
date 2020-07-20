const admin = require('firebase-admin');
const serviceAccount = require("../se-members.json");
const uuid = require('uuid');
require('dotenv').config();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
});
const db = admin.firestore();


module.exports.onRegister = (payload) => {
    db.collection('users').doc(payload.s_id).update({ password: payload.password })
}
module.exports.fetchUsers = async () => {
    let arr = []
    const snapShot = await db.collection("users").get();
    snapShot.forEach(el => arr.push({
        _id: el.id,
        s_id: el.data().s_id,
        firstName: el.data().firstName,
        lastName: el.data().lastName,
        nickName: el.data().nickName,
        password: el.data().password,
        permission: el.data().permission
    }));

    return arr;
}

module.exports.addUser = (payload) => {

    db.collection('users').doc(payload.s_id).set(payload);
}