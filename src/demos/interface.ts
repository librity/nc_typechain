// Interfaces don't end up in Javascript
interface Human {
  name: string
  age: number
  male?: boolean
}

const me = {
  name: 'Lior',
  age: 24,
  male: true,
}

const laura = {
  name: 'Laura',
  age: 17,
  male: false,
}

const bob = {
  name: 'Bob',
  age: +'70',
}

const sayHi = (person: Human): string => {
  if (person.male === undefined)
    return `Hello ${person.name}, you are ${person.age} years old`
  if (person.male)
    return `Hello ${person.name}, you are a ${person.age} year old male`

  return `Hello ${person.name}, you are a ${person.age} year old female`
}

const interfaceDemo = () => {
  console.log('\n=== Interface demo ===')
  console.log(sayHi(me))
  console.log(sayHi(laura))
  console.log(sayHi(bob))
}

export default interfaceDemo
