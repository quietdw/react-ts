1.  为什么需要类型声明文件？ d.ts

    ts 转 js 过程中会丢失的 interface

2.  怎么使用类型声明文件？

    社区声明文件和库自带的声明文件

3.  自己写声明文件

        tsc  xxx.ts -d

         在package.json里添加types字段

4.  使用 requre 可以声明函数的类型

    `require a:V from 'xxx'` V 可以是自己的 interface，需要 ts 支持 require
