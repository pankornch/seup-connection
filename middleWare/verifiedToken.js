const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
    const [Bearer, token] = req.header('auth-token').split(' ')

    if (!token && Bearer !== 'Bearer') return res.json({ status: 404, msg: 'Access Denied' });

    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified
        next()
    } catch (error) {
        res.json({ status: 404, msg: 'Invalid Token' })
    }
}   