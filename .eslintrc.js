module.exports = {
    // 使用第三方的配置
    'extends': 'airbnb',
    // 你的脚本要运行在什么环境
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    /**
     * 共三种
     * 1. 关闭规则：0 或 'off'
     * 2. 打开规则，作为一个警告：1 或 'warn'
     * 3. 打开规则，作为一个错误：2 或 'error'
     */
    'rules': {
        'no-extend-native': 0,
        'linebreak-style': 'off',
        'no-console': 0,
        'func-names': 0,
        'no-plusplus': 0,
        // 此条规则是为了防止人们将 typeof 等号右边的字符串类型写错，但我这里用了变量，所以...注释。
        'valid-typeof': 0
    }
};