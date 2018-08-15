const Logger = require('../libs/loggerLib');
const response = require('../libs/resposneLib');
const check = require('../libs/checkLib');

let isAuthenticated = (req, res, next) => {
    if (req.params.authToken || req.query.authToken || req.header('authToken')) {
        if (req.params.authToken === 'Admin' || req.query.authToken === 'Admin' || req.header('authToken') === 'Admin') {
            req.user = {
                fullName: 'Admin',
                userId: 'Admin'
            }
            next();
        } else {
            Logger.error('incorrect authentication token', 'authentication middleware', 5);
            let apiResponse = response.generate(true, 'incorrect authentication token', 403, null);
            res.send(apiResponse);
        }
    } else {
        Logger.error('authentication token missing', 'authentication middleware', 5);
        let apiResponse = response.generate(true, 'authentication token missing', 404, null);
        res.send(apiResponse);
    }
}

module.exports = {
    isAuthenticated: isAuthenticated
}