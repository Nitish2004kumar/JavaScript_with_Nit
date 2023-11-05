 const accountId=12312
 let accountEmail="nitishkumar"
 var accountPassword="123456"
 accountCity="patana"
//  Since JavaScript treats a dollar sign as a letter, identifiers containing $ are valid variable names $

//  accountId=2
//we can't change the value of constant
console.table([accountId,accountEmail,accountPassword,accountCity])

accountEmail="2004lps@gmail.com"
accountPassword="676767"
accountCity="Bihar"

 console.log("this is show in the table form");

 console.table([accountId,accountEmail,accountPassword,accountCity])
 /*
 prefer not to use var 
 because of issue in block scope and functional scope

 if the veriable not define it gives the result undefine

 */