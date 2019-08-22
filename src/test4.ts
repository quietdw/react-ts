const calender = (options: CalenderOptions) => { }

interface CalenderOptions {
    [k: string]: any, // k值是string，value是任意值
}

calender({
    time: Date.now,
    view: 'year',
    a: 123
})

function pluck<T, K extends keyof T>(object: T, keys: Array<K>): Array<T[K]> {

    return keys.map(key => object[key])
} // 索引类型，K必须是T的key值

pluck({ name: 'zx', age: 18, grade: 1 }, ['name', 'age']) // ['zx' 18] Array<T[K]> 可以写成 T[k][]

interface Person {
    name: string,
    a: number
}

type X = keyof Person  // name | x

