// // quection 1
// let num = 3
// let num2 = 3;
// let results = []

// for(let i = num ; i <= num2 ; i++){
//     results = num * num2
//     console.log(results)
// }

// // quection-2;

// let year = [2026 , 2024]
// let ok = year.filter((ok)=>{
//     return ok  % 4=== 0
// })
// console.log(ok)

// // quection--3;

// let fun1 = (a, b, c)=>{
//    return (a + b + c) / 2
// }
// console.log(fun1())

// let fun2 = (a , b , c)=>{
//     let s = fun1(a , b , c)

//     let x = s - a
//     let y = s - b
//     let z = s - c
     
// let equal = x * y * z

//     return Math.sqrt(equal)
// }
// console.log(fun1(3,4,5))
// console.log(fun2(3,4,5))



// QUECTION--4;
// let marks = (a , b, c)=>{
//     return a + b + c
// }
// let Ko = (a , b , c)=>{
//     let osaka = marks(a , b , c)
//     return osaka / 3
// }
// let persentage = (d , e , f)=>{
//     let per = marks(d , e , f)
//     return (per / 300)* 100
// }
// console.log(marks(20 , 30 , 59))
// console.log(Ko(20 , 30 , 59))
// console.log(persentage(20 , 30 , 59))

// // QUECTION--5;
// let fun = (str , ok)=>{
//     for(let i = 0; i < str.length ; i++){
//         if(str[i] == ok){
//             return i
//         }
//     }
// }

// console.log(fun('maaz','z'))

// QUECTION --6;

// let fun = (sentence)=>{
// let result = ''
// let vowels = 'aeiouAEIOU'

// for(let i = 0; i < sentence.length; i++){
//     if(!vowels.includes(sentence[i])){
//         result += sentence[i]
//     }
// }
// return result;
// }
// console.log(fun('helloworld'))

// let fun1 = (geo)=>{
//     let result = '';

//     let vowels = 'AQSA';
//     for(let i = 0; i < geo.length ; i++){
//         if(!vowels.includes(geo[i])){
//             result +=geo [i]
//         }
//     }
//             return result

// }

// console.log(fun1('mAaz'))

// quection--7

// let countvowels = (text)=>{
// let count = 0;
// for(let i = 0; i < text.length - 1 ; i++){
//     let pair = text[i] + text[i + 1];

//     switch(pair){
//             case "aa":
//             case "ae":
//             case "ai":
//             case "ao":
//             case "au":
//             case "ea":
//             case "ee":
//             case "ei":
//             case "eo":  
//             case "eu":
//             case "ia":
//             case "ie":
//             case "ii":
//             case "io":
//             case "iu":
//             case "oa":
//             case "oe":
//             case "oi":
//             case "oo":
//             case "ou":
//             case "ua":
//             case "ue":
//             case "ui":
//             case "uo":
//             case "uu":
//                 count++;
//                 break;
//     }
// }
//  return count;
// }
// console.log(countvowels('maaz'))

// QUECTION--8;

// let fun1 = (meter)=>{
//     return meter*1000
// }
// console.log(fun1(3))

// let meter = (meter)=>{
//     return meter*100000
// }
// console.log(meter(3))

// let fun1 = (meter)=>{
//     return meter*3280.84
// }
// console.log(fun1(3))

// let meter = (meter)=>{
//     return meter*39370.1
// }
// console.log(meter(3))

// QUECTION--9;
// let fun = (hourse)=>{
//     if(hourse > 40){
//         let ok = hourse - 40;
//         let geo = ok * 12;
//         return geo
//     }
// }
// console.log(fun(43));

// let QUECTION -- 10;
let fun = (ok)=>{
    return (ok % 100) 
}
let fun2 = (nam)=>{
    return nam % 50
}
let fun3 = (ok)=>{
    return ok % 10
}

console.log(fun(320))
console.log(fun2(39))
console.log(fun3())