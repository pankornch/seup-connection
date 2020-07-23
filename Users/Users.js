const { fetchUsers, fetchJoinTable, fetchUser } = require('../DB/db');


const membersSophomore = async () => {
    const fetch_ = await fetchUsers();
    return fetch_.filter(el => el.s_id.slice(0, 2) === "62");
}

const membersFresher = async () => {
    const fetch_ = await fetchUsers();
    return fetch_.filter(el => el.s_id.slice(0, 2) === "63");

}

const joinTable = async () => {
    return await fetchJoinTable();
}

const User = async (user) => {
    return await fetchUser(user);
}

module.exports.joinTable = joinTable;
module.exports.membersSophomore = membersSophomore;
module.exports.membersFresher = membersFresher;
module.exports.User = User;