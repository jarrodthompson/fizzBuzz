// Number is Divisible by 3 => Fizz
// Number is Divisible by 5 => Buzz
// Number is Divisible by both 3 and 5 => FizzBuzz
// Number is Not divisible by 3 or 5 => input
// Not a number => 'Not a number' Nan

const output = fizzBuzz(15);
console.log(output);

function fizzBuzz (insert){

    if(typeof insert !== 'number'){
        return "Not a number";
    }
    else if(insert % 3 == 0 && insert % 5 == 0){
        console.log("FizzBuzz")
    }
    else if (insert % 5 == 0) {
        console.log("Buzz")
    }
    else if (insert % 3 == 0){
        console.log("Fizz")
    }
    else if (insert % 3 !== 0 || insert % 5 !== 0){
        console.log(insert)
    }
    else
    console.log("Not a number")
}
