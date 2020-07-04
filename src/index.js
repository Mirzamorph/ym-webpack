import './css/main.scss'

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const person = new Person('Rustam', 24)
console.log(person)