// Code your solution in this file
 function findMatching (array, name) {
  const newCollection = [];
  for (const user of array) {
    if (user.toUpperCase() === name.toUpperCase()) {
      newCollection.push(user);
    }
  }
 
  return newCollection;
}


