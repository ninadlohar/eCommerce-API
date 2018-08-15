let exampleMiddleware = (req, res, next) => {
    req.user = {
        'firstName': 'Adi',
        'lastName': 'Kumar'
    }
    next();
}

module.exports = {
    exampleMiddleware: exampleMiddleware
}