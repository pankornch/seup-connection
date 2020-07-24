const admin = require('firebase-admin');
const serviceAccount = require("../se-members.json");
const uuid = require('uuid');
require('dotenv').config();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL
});
const db = admin.firestore();

module.exports.snapSophomore = db.collection('users').where('permission', '==', "sophomore")



module.exports.onRegister = (payload) => {
    db.collection('users').doc(payload.s_id).update(payload)
}


module.exports.fetchSophomore = async () => {
    const arr = [];
    const fetch_ = await db.collection('users').where("permission", "==", "sophomore").get();
    fetch_.forEach(el => arr.push({ id: el.id, ...el.data() }))
    return arr;
}


module.exports.fetchUser = async (id) => {
    const fetch_ = await db.collection('users').doc(id).get();
    return fetch_.data();
}

module.exports.fetchJoinTable = async () => {

    let arr = [];
    const snapShot = await db.collection('joinTable').get();
    snapShot.forEach(el => arr.push(el.data()));

    const twin = await db.collection('joinTable').doc('twin').get();

    return { twin: twin.data(), user: arr.filter(v => v.isTwin !== true) };
}


module.exports.addJoinTable = (payload) => {
    console.log(payload)
    const genID = uuid.v4().split('-').join('').slice(0, 20)
    db.collection('joinTable').doc(genID).set(payload)
    db.collection('users').doc(payload.fresher).update({ random: true })
    payload.sophomore.forEach(el => {
        db.collection("users").doc(el.s_id).update({ random: true })
    })

}

// For Admin

// module.exports.addUser = (payload) => {

//     db.collection('users').doc(payload.s_id).set(payload);
// db.collection('users').doc(payload.s_id).update({ twin: payload.twin })
// }


// module.exports.sentHint = (id, hint) => {
//     db.collection('users').doc(id).update({ hint })
// }


// async function dd() {
//     const snap = await db.collection('users').get()
//     snap.forEach(el => {
//         db.collection('users').doc(el.data().s_id).update({ random: false })
//     })
// }

// module.exports.dd = dd;