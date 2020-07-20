const bcrypt = require('bcryptjs');
const { fetchAllUsers } = require('../Users/Users');
const { onRegister, update } = require('../DB/db')
require('dotenv').config();


const register = async (user) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(user.password, salt);

    return await onRegister({ ...user, ...{ password: hashedPassword } });

}

const login = async (data) => {
    const { fetch_, user } = data
    const [userPassword] = fetch_.filter(e => e.s_id === user.id)
    return bcrypt.compareSync(user.password, userPassword.password)
}

const validateEmail = (data) => {
    const [ID, email] = data.split('@')
    if (email !== "up.ac.th" && email) return false
    return { id: ID }

}

const onUpdate = async (user) => {
    const fetch_ = await fetchAllUsers()
    const [filter_] = fetch_.filter(e => e.s_id == user.s_id)
    return await update({ user, filter_ })
}

module.exports.register = register;
module.exports.validateEmail = validateEmail;
module.exports.login = login;
module.exports.onUpdate = onUpdate;