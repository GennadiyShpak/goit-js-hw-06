import users from './users.js';
// const calculateTotalBalance = users => {
//   let total = 0;
//   users.forEach(users => {
//     total += users.balance;
//   });
//   return total;
// };

//  Второй вариант
const calculateTotalBalance = users =>
  users.reduce((balance, user) => balance + user.balance, 0);
console.log(calculateTotalBalance(users)); // 20916
