interface Human {
  name: string;
  age: number;
  male?: boolean;
}

const me = {
  name: 'Lior',
  age: 24,
  male: true,
};

const female = {
  name: 'Laura',
  age: 17,
  male: false,
};

const entity = {
  name: 'Bob',
  age: +'70',
};

const sayHi = (person: Human): string => {
  if (person.male === undefined)
    return `Hello ${person.name}, you are ${person.age} years old`;
  if (person.male)
    return `Hello ${person.name}, you are a ${person.age} year old male`;

  return `Hello ${person.name}, you are a ${person.age} year old female`;
};

console.log("=== Interface ===");
console.log(sayHi(me));
console.log(sayHi(female));
console.log(sayHi(entity));

export {};
