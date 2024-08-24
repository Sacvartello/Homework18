//1
const str = 'Qwerty'
const newStr = str.split('').reverse().join('')
console.log(newStr)
//2
function f1(num){
    return Math.round(num)
}

const returnOfF1 = f1(3.296)
console.log(returnOfF1);
//3
const userName = prompt('Write your name:')
console.log('name -->', userName.toUpperCase());
//4
function f2 (date){
    let arrFromDate = date.split('-')
    const newDate = arrFromDate.reverse().join('.')
    return newDate
}
const returnOfF2 = f2('2021-09-22')
console.log(returnOfF2);
//5
function f3 (firstString, secondString){
    const newFirstString = firstString.toLowerCase()
    const newSecondString= secondString.toLowerCase()
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