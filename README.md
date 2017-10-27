## 南京邮电大学一流学科网页

编译代码运行 ↓ ↓ ↓

```
npm run build
```

--- 

前端工程化初试水

尝试组件化的思想（虽然还是以DOM操作为主的页面控制），就近维护的思想，CSS和images置于同一文件夹下，方便关联管理

- webpack打包

- prettier + eslint进行格式化和验证

- husky + lint-staged (哈士奇!)让二哈来进行pre-commit检验

---
### webpack

- ExtraTextPlugin 提取JS中 CSS文件单独打包

- CleanWebpackPlugin 每次打包前清除dist中的旧文件

- HtmlWebpackPlugin 因为js和css等文件打包之后附上了hash值，通过这个插件自动生成相应的HTML文件

- OptimizeCSSPlugin 压缩提取出来的css, 并解决ExtracttextPlugin分离出的js重复问题

- UglifyJsPlugin 压缩JS

- babel-loader 转换es6

- url-loader 加载图片和字体之类的文件

- css-loader, style-loader, sass-loader 加载sass文件

---

### prettier + eslint

- extends: airbnb-base 做标准，prettier 替换 eslint 原本的 eslint 规则

- plugin: prettier

- env: es6, node, browser

- setting: eslint-import-resolver-webpack 加载webpack的alias之类的设置

- rules: 应用prettier (airbnb插件) 的规则，同时因为windows是CRLF而不是LF，所以linebreak-style检测取消

--- 

### husky + lint-staged

pre-commit 检验