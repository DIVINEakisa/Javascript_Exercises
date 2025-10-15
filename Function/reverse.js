function reverseNumber(num){
    reversedNumber = num.toString().split('').reverse().join('');

    return reversedNumber;
}
console.log(reverseNumber(32234));


function anotherWay(numb){
    reversed = parseInt(String(numb).split('').reverse('').join(''));
return reversed;
}
console.log(anotherWay(322234));