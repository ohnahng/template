module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:9060/",
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
        host: '0.0.0.0'
    }
}