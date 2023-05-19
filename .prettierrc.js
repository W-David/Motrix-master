module.exports = {
  singleQuote: true, //使用单引号
  semi: false, //不加行尾分号
  printWidth: 180, //单行最大长度
  tabWidth: 2, //缩进为2个空格
  quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
  trailingComma: 'none', //多行时尽可能打印尾随逗号
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  arrowParens: 'avoid', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  vueIndentScriptAndStyle: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'ignore',
  endOfLine: 'lf' //结束行形式
}
