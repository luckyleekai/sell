# vue笔记

## vue生命周期

sublime text3 编辑器自带的代码格式化可以在
Edit -> Line -> Reindent
但是sublime text3 没有给它赋予快捷键，所以只需要自己加上快捷键即可

Preference  ->  Key Bindings -user
打开用户快捷键绑定设置添加(比如添加：ctrl + alt + l)
{"keys": ["ctrl+alt+l"], "command": "reindent"}

但是在使用的过程中发现sublime text3自带的编辑器代码格式化能力还是比较弱
必须得要选中要格式的代码才行

设备像素比

## vue2.x.x中 select下拉框默认选中项的规则

在vue项目中，我们平时会经常处理select下拉框，当前默认选中项的需求，经过我多次尝试得出了下面几点总结:

1. select元素未设置v-modle指令时，默认选中项由option标签中selected属性决定
2. select元素设置了v-modle指令时，默认选中项由v-modle后面的JS表达式决定当前默认选中项

## better-scroll插件

better-scroll插件默认会将元素的点击事件给禁用掉了，所以要开启点击事件则必须在创建实例的时候，传递一个参数参数里面的属性写上了 click: true

## 移动端的适配
