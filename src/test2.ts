import React from 'react'
import { log } from 'util';

interface A {
    name: string
}

interface B {
    age: number
}

interface C {
    height: number
}

const dd: A | B = { // ts 或 运算
    name: 'xdd', age: 13
}

// 重载 限定两个参数都是number
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any) {
    return a + b
}
add(1, 2)

// 字面量类型
interface Direction {
    value: 'west' | 'east' | 'south' | 'north' // 字面量类型和或经常一起使用后
}

const dir: Direction = {
    value: 'west'
}

console.log(dir);


export default { dd }