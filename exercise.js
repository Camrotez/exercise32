const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const fP = {
    id : person.id,
    age : person.age
}

const json = JSON.stringify(fP);


console.log(json); // Should return: { "id": 1, "age": 25 }