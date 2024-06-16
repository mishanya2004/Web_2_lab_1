const users = [
    { name: "John", age: 25 },
    { name: "Kate", age: 30 },
    { name: "Alex", age: 20 },
];

function sortUsersByName(users) {
  return users.sort((a, b) => a.name.localeCompare(b.name));
}
  
console.log(sortUsersByName(users));