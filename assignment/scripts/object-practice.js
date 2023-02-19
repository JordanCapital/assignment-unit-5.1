console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Jordan',
  lastName: 'Capital',
  hasSiblings: true,
  shoeSize: 10,
  favThreeFoods: ['rice', 'pasta', 'lasagna']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
const fullName = me.firstName + ' ' + me.lastName;
console.log('My name is: ', fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
  console.log('First favorite food is:', me.favThreeFoods[0]);
  console.log('Last favorite food is:', me.favThreeFoods[2]);
