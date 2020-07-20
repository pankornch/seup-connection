
module.exports = (req, res, next) => {
    const logged = `${req.protocol}://${req.get('host')}${req.originalUrl}  ||  :${new Date()}`
    console.log(logged)
    next()
}