import users from './users.js';
const getUsersWithGender = (users, gender) => {
  const typoOfGender = users.filter(users => users.gender === gender);
  return typoOfGender.map(typoOfGender => typoOfGender.name);
};

console.log(getUsersWithGender(users, 'male'));
