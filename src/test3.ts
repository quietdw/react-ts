{
    class Calc {
        public value: number
        constructor(n: number) {
            this.value = n
        }
        add(n: number) {
            this.value += n
            return this
        }
        muti(n: number) {
            this.value *= n
            return this
        }
    }

    class SuperCalc extends Calc {
        sin() {
            this.value = Math.sin(this.value)
            return this
        }
    }

    const c = new SuperCalc(0)
    c.add(1).add(2).add(3).muti(4).add(6).sin().add(1) // this 多态，既可以继承父类，也可以继承子类，所有函数都可以指定this的类型
    console.log(c.value);

}