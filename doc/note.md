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


border-radius的理解，比如实现一个椭圆

better-scroll 滚动存在一个性能的问题，在PC chrome模拟器上面发现会很卡
而且绑定的滚动事件执行频率非常高

https://www.cnblogs.com/smfx1314/p/8426115.html
这个网站鼠标右键效果不出，等时间研究一下具体的实现

## 如何查看本地git项目设置的用户名和邮箱

(```)

  git config --global user.name
  git config --global user.email

(```)

在命令行分别输入上面两行，第一个是查看用户名的，第二个是查看邮箱的

## git版本管理的项目设置不同的用户名和邮箱

- 找到项目所在目录下的 .git/文件夹，进入.git/文件夹，然后执行如下命令分别设置用户名和邮箱：

`git config user.name "kevinlee"`

`git config user.email "luckyleekai@sina.com"`

然后cat config会发现文件多出一些内容

```linux
  [user]
    name = kevinlee
    email = luckyleekai@sina.com
```

- 如果为所有项目设置默认的用户名和邮箱，则执行如下命令(即多了"--global"修饰，添加为全局变量):

```linux
 git config --global user.name  "kevinlee"
 git config --global user.email "luckyleekai@sina.com"
```

## git每次提交更新到远程仓库都需要输入用户名和密码解决办法

进入项目.git目录下使用下面的命令

`git config --global credential.helper store`

然后cat config 文件发现会多出一些内容

```git
[remote "origin"]
  url = https://github.com/luckyleekai/sell.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

然后再回到项目目录下执行git pull，根据提示输入用户名和密码，输入正确后，以后再执行git pull 就不用输入用户名和密码了