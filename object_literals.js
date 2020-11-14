const person = {
  firstName: "Steve",
  lastName: "Smith",
  age: 36,
  email: "steve@aol.com",
  hobbies: ["music", "sports"],
  address: {
    city: "Miami",
    state: "FL",
  },
  //function inside an object is called properties.
  getBirthYear: function () {
    return 2017 - this.age;
  },
};

val = person;
// Get specific value
val = person.firstName;
val = person["lastName"];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address["city"];
val = person.getBirthYear();

console.log(val);

//used highly in Async js
const people = [
  { name: "1", age: 12 },
  { name: "2", age: 123 },
  { name: "3", age: 21 },
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
