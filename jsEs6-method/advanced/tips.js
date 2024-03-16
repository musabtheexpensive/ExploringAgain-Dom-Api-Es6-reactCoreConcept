const person = {
  name: "musab",
  age: 19,
};

// const { name: myName } = obj;
// console.log(myName);

function show({name,age}) {
  console.log(`My name is ${name} . My age is ${age}`);
}

show(person);
