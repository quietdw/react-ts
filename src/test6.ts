type Props = {
    action: 'create',
    name: 'string'
} | {
    action: 'update', // string number 就不能做可识别联合
    name: string,
    id: number
} // 联合

// 1. 必须有公有的字段
// 2. 字段的类型是可枚举的

function fn(a: Props) {
    if (a.action === 'create') {
        console.log(a.name);

    } else {
        console.log(a.id);

    }
}