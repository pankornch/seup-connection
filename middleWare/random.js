const { Stack, joinedStack } = require('./Stack');
const { membersSophomore } = require('../Users/Users');

const random = async (id) => {

}

(async function add() {
    const fetch_ = await membersSophomore();
    console.log(fetch_)
    
})();

module.exports.random = random;