# 一些问题汇总

css link标签的rel、type、lang属性

在实现1px边框的时候，用到了元素的伪类元素，当我设置它的position:absolute
时，然后通过JS方法，document.defaultView.getComputedStyle 、(元素DOM对象, 'after'['display'])显示时display，但是document.defaultView.getComputedStyle(元素DOM对象, 'after'['width'])结果却是0px,这一点让我感觉疑惑，既然display都已经是block了为什么宽度却是0呢？默认情况下不是应该是100%占据父元素的宽度吗？

css 实现多行文本垂直居中显示在父级元素里面

stylus用法学习

卖外项目左边的侧边栏图标和文字并没有实现完全的对齐

js-beautify for vscode 插件配置使用还没有搞定

$nextTick方法
ES6的箭头函数 this 问题

ES6的Array.from

图片验证码的实现

css sticky 布局

vue-router在什么时候用比较合适？
