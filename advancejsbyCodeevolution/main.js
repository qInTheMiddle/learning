// nested functions:
// let a = 10
// function outer () {
//     let b = 20
//     function inner () {
//         let c = 30
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()
// Closure: the combination of a function bundled together with references to its 
// surrounding state. Closures are created every time a function is created, at function creation time.
// function outer() {
//     let counter =0
//     function inner() {
//         counter++
//         console.log(counter)
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()
// Function Currying:
// function sum(a,b,c) {
//     return a + b + c
// }

// // console.log(sum(2,3,5))

// // sum(2,3,5) sum(2)(3)(5)

// function curry(fn) {
//     return function(a) {
//         return function(b) {
//             return function(c) {
//                 return fn(a, b, c)
//             }
//         }
//     }
// }

// const curriedSum = curry(sum)
// // console.log(curriedSum(2)(3)(5))

// const add2 = curriedSum(2)
// const add3 = add2(3)
// const add5 = add3(5)
// console.log(add5)

// this:
// function sayMyName(name) {
    // console.log(`My name is ${name}`)
// }

// sayMyName('Valter Vhite')
// sayMyName('Shteisenberg')
// implicit binding: what is left to this
// const person = {
//     name: 'Vishwas the Shiswas Biryani',
//     sayMyName: function() {
//         console.log(`My name is ${this.name}`)
//     }
// }

// person.sayMyName()
// explicit binding: 
// const name = 'superromancer'
// globalThis.name = 'superromancer'
// function sayMyName() {
//     console.log(`My name is ${this.name}`)
// }

// sayMyName.call(person)

// new binding: 

// function Person (name) {
    // when invoked with new keyword:
    // this = {}
    // this.name = name
// }
// person() is what is known as constructor function
// const p1 = new Person('Vishamas')
// const p2 = new Person('Spiderwoman')

// console.log(p1.name, p2.name)

// default binding: fall back binding if non of the others are matched on line 66.
// sayMyName()
// order of prcedence: 
// New, Explicit, Impicit then Default binding

// prototypes:
// function Person(fName, lName) {
//     this.firstName = fName
//     this.lastName = lName
// }
// /*person1.getFullName*/Person.prototype.getFullName = function() {   /* to avoid error when using perso2 */
//     return this.firstName + ' ' + this.lastName
// }

// function SuperHero(fName, lName) {
//     // // this.issuperHero = true
//     Person.call(this, fName, lName)
//     this.isSuperHero = true
// }
// SuperHero.prototype.fightCrime = function () {
//     console.log('Fighting crime')
// }
// SuperHero.prototype = Object.create(Person.prototype)

// const batman = new SuperHero('Bruce', 'Kent')
// console.log(batman.getFullName())
// SuperHero.prototype.constructor = SuperHero

// const person1 = new Person('Bruce', 'Kent')
// const person2 = new Person('Clark', 'Wanyne')

// console.log(person1.getFullName())
// console.log(person2.getFullName()) 

// prototypal inheritance is how inheritance works in javaScript:

// class Person {
//     constructor(fName, lName) {
//         this.firstName = fName
//         this.lastName = lName
//     }

//     sayMyName() {
//         return this.firstName + ' ' + this.lastName
//     }
// }

// const classP1 = new Person('Bruce', 'Kent')
// console.log(classP1.sayMyName())

// class SuperHero extends Person {
//     constructor(fName, lName) {
//         super(fName, lName)
//         this.isSuperHero = true
//     }

//     fightCrime() {
//         console.log('Fighting crime')
//     }
// }

// const batman = new SuperHero('Bruce', 'Kent')
// console.log(batman.sayMyName())

// Iterables and Iterators: abstracts away the complexity of accessing elements
// one by one and is uniform across the different data structures

// Iteration in JavaScript - Protocols :
// String
// const str = 'Vishmas'

// for loop
// for (let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i))
// } /*or:*/
// for(const char of str) {
//     console.log(char)
// }

// Array
// const arr = ['v', 'i', 's', 'm', 'a', 's']

// for loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// } /*or:*/
// for(const item of arr) {
//     console.log(item)
// } 

// iterable protocol expressed in code:
const obj = {
    [Symbol.iterator]: function() {
        let step = 0
        const iterator = {
            next: function() {
                step++
                if(step === 1) {
                    return { value: 'Hello', done: false}
                }   else if (step === 2) {
                    return { value: 'World', done: false}
                }
                return { value: undefined, done: true }
            },
        }
        return iterator
    },
}

// for(const word of obj) {
//     console.log(word);
// }
// javascript does internally the same thing we have done to: strings, arrays,
//  maps and sets. and that is how we can easily iterate them in a for loop.

// Generators: wouldn't it be nice if something could create an iterator for us 
// instead of us having to write it

function normalFunction() {
    console.log('Hello')
    console.log('World')
}

// normalFunction()
// normalFunction()

function* generatorFunction() {
    yield 'Hello'
    yield 'World'
}
// yield is an operator with witch a generator can pause itself 
// instead of return its value we say yield its value

const generatorObject = generatorFunction()
for(const word of generatorObject) {
    console.log(word)
}

// end of crash course on advanced javascript