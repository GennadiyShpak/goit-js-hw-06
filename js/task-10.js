import users from './users.js';

const getSortedUniqueSkills = users => {
  let userSkill = [];
  let a = [];
  [...users].map(user => {
    userSkill.push(Object.values(user.skills));
  });
  userSkill.forEach(userSkill => {
    a = a.concat(userSkill);
  });
  return a
    .filter((item, index) => {
      return a.indexOf(item) === index;
    })
    .sort();
};

console.log(getSortedUniqueSkills(users));
