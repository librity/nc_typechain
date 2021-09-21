class Human {
  public name: string
  private age: number
  protected male?: boolean

  constructor(name: string, age: number, male?: boolean) {
    this.name = name
    this.age = age
    this.male = male
  }

  getMale() {
    return this.male
  }

  getAge() {
    return this.age
  }
}

const me = new Human('Lior', 24, true)
const laura = new Human('Laura', 17, false)
const bob = new Human('Bob', +'70')

const sayHi = (person: Human): string => {
  if (person.getMale() === undefined)
    return `Hello ${person.name}, you are ${person.getAge()} years old`
  if (person.getMale())
    return `Hello ${person.name}, you are a ${person.getAge()} year old male`

  return `Hello ${person.name}, you are a ${person.getAge()} year old female`
}

const classDemo = () => {
  console.log('\n=== Class demo ===')
  console.log(sayHi(me))
  console.log(sayHi(laura))
  console.log(sayHi(bob))
}

export default classDemo
