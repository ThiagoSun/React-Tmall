[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)
### 一个webpack多页面架构的尝试

---

###### 关键词：webpack、create-react-app、react、redux、router、antd

- 支持长效缓存：修改代码或者增删路由都不会影响vendor（第三方库文件）
- 根据router路由进行代码分割
- 可构建多页面应用
- devServer支持history fallback
- 生产环境构建需要nginx或者node server进行支持
