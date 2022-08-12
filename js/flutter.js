// Fri Jun 17 2022 11:27:28 GMT+0100 (British Summer Time)
const date = new Date();
print(date);

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = '${day}-${month}-${year}';
console.log(currentDate); // "17-6-2022"