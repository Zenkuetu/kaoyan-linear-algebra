// 考研数学真题（线性代数部分）—— 数据层的入口
// 具体题目按"一套卷一个文件"放在 tools/exams/<年份>-m<科目>.js 里，本文件只声明容器。
// build.js 会按文件名排序，把 tools/exams/*.js 依次拼进来执行。
// 字段：year 年份 | subject '数一'|'数二'|'数三' | number 题号 | kind '选择'|'填空'|'解答' | score 分值
//       ids 知识点 ID 数组（可多个，一道题能进多篇笔记）| question 题面 | answer 答案 | analysis 解析 | source 出处
// 约定见 tools/exams/README.md。
const EXAMS = [];
