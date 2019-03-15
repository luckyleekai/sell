module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    // 对代码缩进的校验，其实我也不清楚为什么值要写成数组的形式
    //其实网上还找到另一个写法 'indent': 'off',但是我感觉这种写法
    //不是很好但是也说不出来哪里不好，就是不顺眼
    'indent': ['off', 2],
    'no-trailing-spaces': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
