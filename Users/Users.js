const { fetchUsers } = require('../DB/db');

module.exports.membersSophomore = async () => {
    const fetch_ = await fetchUsers();
    return fetch_.filter(el => el.s_id.slice(0, 2) === "62");

}

module.exports.membersFresher = async () => {
    const fetch_ = await fetchUsers();
    return fetch_.filter(el => el.s_id.slice(0, 2) === "63");

}