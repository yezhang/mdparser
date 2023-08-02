# Markdown Syntax Parser

根据 Terence Parr 的[描述](https://groups.google.com/g/antlr-discussion/c/MgwhZm-FfIA/m/fW_Vj3UKP1wJ)，md 语法中的每一处都是上下文敏感语法。需要使用 predicate 来处理列表终止。


普通的语法设计

Scanner Less 语法设计：
将每个字符作为一个 token。

## 思路
使用 JS Generator 实现 parser combinator.
参考 c++20 中的实现：https://clehaxze.tw/gemlog/2022/03-31-markdown-is-not-context-free.gmi


## 自动化测试

https://jestjs.io/docs/expect

执行全部测试：npm test
执行制定测试：npm test <测试用例前缀>
- 例如，npm test LessParser

执行指定的 it 测试用例: 给 jest 传递 -t 参数：
`npm test -- -t "<describe 描述> <it 描述>"`
例如`npm test -- -t "Vue 文件 - CSS 属性统计 Pipeline 测试"`

执行扫描任务：
npm test -- -t "Vue 文件 - CSS 属性统计 扫描一分购页面中的 Vue 文件"