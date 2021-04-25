const name = 'Lior',
  age = 24,
  male = true;

const sayHi = (name: string, age: number, male?: boolean): string => {
  if (male === undefined) return `Hello ${name}, you are ${age} years old`;
  if (male) return `Hello ${name}, you are a ${age} year old male`;

  return `Hello ${name}, you are a ${age} year old female`;
};

// Won't transpile
// sayHi(name);
// sayHi(name, 'bad');
// sayHi(name, age, 'male');

console.log("=== Primitives ===");
console.log(sayHi(name, age, male));
console.log(sayHi(name, age, false));
console.log(sayHi(name, age));

export {};
