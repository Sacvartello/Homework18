//1
const str = 'Qwerty'
const arrFromStr = str.split('')
let newStr = ''
for(i=arrFromStr.length-1; i >= 0; i--){
    newStr = newStr + arrFromStr[i]
}
console.log(newStr);
//2
function f1(num){
    return Math.round(num)
}

const returnOfF1 = f1(3.296)
console.log(returnOfF1);
//3
const userName = prompt('Write your name:')
console.log('name -->', userName.toLocaleUpperCase());
//4
function f2 (date){
    let arrFromDate = date.split('-')
    const newDate = arrFromDate[1].concat(`.${arrFromDate[2]}.${arrFromDate[0]}`)
    return newDate
}
const returnOfF2 = f2('2021-22-09')
console.log(returnOfF2);
//5
function f3 (firstString, secondString){
    const newFirstString = firstString.toLocaleLowerCase()
    const newSecondString= secondString.toLocaleLowerCase()
    const isEqual = newFirstString===newSecondString
    return isEqual
}
const returnOfF3 = f3('ApplE', 'aPPle')
console.log(returnOfF3);
//6
function realAge (age){
    if(typeof age !== 'number'){
      throw new TypeError('age must be a number!')
    }
    if (age < 0){
      throw new RangeError('age must be a positive number!')
    }
    return age
}
  try{
    console.log(realAge('ghf'));
} catch (err){
    console.log(err);
}