const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api/remap',
        createProxyMiddleware({
            target: 'https://online.moysklad.ru',
            changeOrigin: true,
        })
    );
};