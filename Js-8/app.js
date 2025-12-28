// // QUECTION--1;
// let date = new Date();
// console.log(date);

// // quection--2;
// console.log(date.getMonth());

// // QUECTION--3;
// let ok = date.getDay()
// console.log(ok);
// if(ok === 6){
//     console.log('sat')
// }else if(ok===0){
//     console.log('sun')
// }else if(ok===1){
//     console.log('mon')
// }

// // QUECTION--4;
// let date = new Date().getDay();
// if(date===0||date===6){
//     console.log('its fun day')
// }
// // QUECTION--5;
// let month = new Date().getDate();
// if(month>15){
//     console.log('greather then 15')
// }else if(month<=15){
//     console.log('the month is smaller')
// }

// QUECTION--6;
// let now = new Date();
// let geo = Math.floor(now.getTime()/(1000*60*60*24))
// console.log(geo);

// QUECTIION--7;
// let time = new Date().getHours();
// if(time <12){
//     console.log('its am')
// }else{
//     console.log('its pm')
// }

// QUECTION--8;
// let lastdate = new Date(2020,11,31)

// let resultant = lastdate
// console.log(resultant)

// QUECTION--9;
// let ramadan = new Date(2026,1,18);
// let newdate = new Date();

// let ok = ramadan.getTime()- newdate.getTime();
// let geo = Math.floor(ok/(1000*60*60*24));
// console.log(geo)

// QUECTION--10;
// let newdate = new Date();
// let startingDate = new Date(2025,0,0);
// let result = newdate.getTime() - startingDate.getTime();
// let ok = Math.floor(result/(1000));
// console.log(ok)

// QUEECTION--11;
// let hourse = new Date();
// let ok  = hourse.getHours();
// let geo = hourse.setHours(ok + 1);
// console.log(geo)

// QUECTION--12;
// let current = new Date();
// ok = current.getFullYear()-100;
// console.log(ok)

// QUECTION--13;
// let age = 19;
// let ok = new Date().getFullYear();
// let under_process = ok - age;
// console.log(under_process);

// QUECTION--14;
let customerName = prompt("Customer Name:");
let units = parseFloat(prompt("Number of Units:"));
let chargesPerUnit = parseFloat(prompt("Charges per Unit:"));
let latePaymentSurcharge = parseFloat(prompt("Late Payment Surcharge:"));

let now = new Date();
let monthNames = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
let currentMonth = monthNames[now.getMonth()];

// calculations
let netAmount = units * chargesPerUnit;
let grossAmount = netAmount + latePaymentSurcharge;

// round to 2 decimals
netAmount = netAmount.toFixed(2);
grossAmount = grossAmount.toFixed(2);
chargesPerUnit = chargesPerUnit.toFixed(2);
latePaymentSurcharge = latePaymentSurcharge.toFixed(2);

// display bill
document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Current Month: " + currentMonth + "<br><br>");

document.write("Number of Units: " + units + "<br>");
document.write("Charges per Unit: " + chargesPerUnit + "<br><br>");

document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossAmount);


