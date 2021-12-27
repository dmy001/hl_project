module.exports = {
    //publicPath 必须以如下格式配置, appCode 必须和后端配置一致。
    publicPath: '/app/basic-demo2-b653sh',
    //接口服务代理配置
    devServer: {
        proxy: {
            '/api': {
                logLevel: 'debug',
                target: 'http://localhost:8857'
            }
        }
    }
};