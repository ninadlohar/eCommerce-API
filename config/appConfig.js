const appConfig = {};

appConfig.port = 3000;
appConfig.allowedCorsOrigin = '*';
appConfig.db = {
    uri: 'mongodb://localhost:27017/eCommerce'
}

appConfig.env = "dev";
appConfig.apiVersion = '/api/v1';

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion,
    environment: appConfig.environment
}