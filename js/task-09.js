import users from './users.js';

const getNamesSortedByFriendsCount = users => {
  const copy = [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(copy => copy.name);
  return copy;
};

console.log(getNamesSortedByFriendsCount(users));
