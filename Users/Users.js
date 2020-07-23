const { fetchJoinTable, fetchUser, fetchSophomore, fetchForAdmin } = require('../DB/db');


const membersSophomore = async () => {
    return await fetchSophomore();
}

const joinTable = async () => {
    return await fetchJoinTable();
}

const User = (id) => {
    return new Promise((resolve, reject) => {
        fetchUser(id).then(res => {
            if (res) return resolve(res)
            reject("Invalid")
        })
    })
}

const admin = async () => {
    return await fetchForAdmin();
}


module.exports.joinTable = joinTable;
module.exports.User = User;
module.exports.membersSophomore = membersSophomore;
module.exports.admin = admin;