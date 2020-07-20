const jwt = require('jsonwebtoken');


module.exports = function (req, res, next) {
    let Bearer, token;

    try {
        [Bearer, token] = req.header('auth-token').split(' ');
    } catch (error) {
        return next();
    }

    if (!token && Bearer !== 'Bearer') return res.json({ status: 404, msg: 'Access Denied' });

    try {
        req.user = jwt.verify(token, process.env.SECRET_KEY);
        
        next();
    } catch (error) {
        res.json({ status: 404, msg: 'Invalid Token' })
    }
}   