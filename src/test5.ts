{
    interface Person {
        name: string;
        age: number;
    }

    // interface Person {
    //    readonly name: string;
    //    readonly age: number;
    // }


    type ReadonlyPerson = Readonly<Person>

    const person1: ReadonlyPerson = {
        name: 'jack',
        age: 19
    }

    // person1.age = 18 报错 只读属性，不能更改
}