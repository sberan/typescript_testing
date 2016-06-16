import * as _ from 'lodash'
import foo from 'foo'

async function funcOne() {
    return Promise.resolve("asdf")
}

async function funcTwo() {
    return await funcOne();
}

funcTwo().then(val => {
    val.substring(0);
})

var x = foo()

x.then(a => a.toUpperCase()j)
