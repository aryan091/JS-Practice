let multiply = function (a, b) {
    console.log(a * b); // a * b
}

let multiplyByTwo = multiply.bind(this, 2)

multiplyByTwo(4)

let multiplyClosure = 
function(x)
{
    return function(y){
        console.log(x * y)
    }
}

let multiplyByThree = multiplyClosure(3)

multiplyByThree(4)