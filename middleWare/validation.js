const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { onRegister, fetchUsers } = require('../DB/db');

module.exports.register = function register(user) {

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, salt);
    onRegister({ ...user, ...{ password: hashedPassword } });

}


async function existUser(id) {
    const fetch_ = await fetchUsers();
    return fetch_.find(el => el.s_id === id);
}
module.exports.existUser = existUser;


module.exports.genToken = (id) => {
    return jwt.sign({ id_: id }, process.env.SECRET_KEY)
}

module.exports.isRegister = async (id) => {
    const fetch_ = await fetchUsers();
    const user = fetch_.find(el => el.s_id === id);
    return user.password;
} 


module.exports.verifyPassword = async (payload) => {

    const user = await existUser(payload.s_id);
    return bcrypt.compareSync(payload.password, user.password);
}



