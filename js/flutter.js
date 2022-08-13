
/////////////////////////////////// DATE FUNCTION /////////////////////////////////////////
// Fri Jun 17 2022 11:27:28 GMT+0100 (British Summer Time)
// const date = new Date();

// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
// let currentDate = '${day}-${month}-${year}';
// console.log(currentDate); // "17-6-2022"

// let localDate = new Date().toLocaleDateString();
// console.log(localDate); // 6/17/2022

const dateToday = new Date();
// var copyrightDate = dateToday.getFullYear()+'-'+(dateToday.getMonth()+1)+'-'+dateToday.getDate();
var copyrightDate = dateToday.getFullYear();
document.getElementById("copyrightDate").innerHTML = copyrightDate;
/////////////////////////////////// DATE FUNCTION /////////////////////////////////////////

