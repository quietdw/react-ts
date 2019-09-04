// import add from './old.js'

interface Old {
    (a: number, b: number): number
}

const add: Old = require('./old.js')

add(1, 2)