module.exports = {
    lintOnSave: false,
    devServer: {
        https: true,
        host: process.env.VUE_HOST,
        port: process.env.VUE_PORT,
    },
};
