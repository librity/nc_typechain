const name = 'Lior',
  age = 24,
  male = true;

const sayHi = (name: string, age: number, male?: boolean) => {
  if (male === undefined) {
    console.log(`Hello ${name}, you are ${age} years old`);
    return;
  }
  if (male) {
    console.log(`Hello ${name}, you are a ${age} year old male`);
    return;
  }
  console.log(`Hello ${name}, you are a ${age} year old female`);
};

// Won't transpile
// sayHi(name, 'bad');
// sayHi(name, age, 'male');

sayHi(name, age, male);
sayHi(name, age, false);
sayHi(name, age);

export {};
