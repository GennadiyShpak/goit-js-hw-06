import users from './users.js';

const getUsersWithAge = (users, min, max) => {
  return users.filter(users => users.age >= min && users.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
