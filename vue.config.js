process.env.VUE_APP_GOOGLE_MAPS_KEY = process.env.GOOGLE_MAPS_KEY;

module.exports = {
    configureWebpack: {
        devtool: 'source-map',
    },
    devServer: {
        https: true,
        host: process.env.EXAMPLE_HOST,
        port: process.env.EXAMPLE_PORT,
    },
    lintOnSave: false,
};
