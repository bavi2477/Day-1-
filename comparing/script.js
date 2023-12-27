
const obj1 = { name: "person1", age: 5 };
const obj2 = { age: 5, name: "person1" };


const stringifiedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
const stringifiedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

if (stringifiedObj1 === stringifiedObj2) {
  console.log('true');
} else {
  console.log('false');
}