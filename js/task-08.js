import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
  let commonFriensds = [];
  users.forEach(users => {
    if (users.friends.includes(friendName)) {
      commonFriensds.push(users.name);
    }
  });
  return commonFriensds;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
