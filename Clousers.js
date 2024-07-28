function outer()
{
let val = "outer member " 
function inner ()
{
console.log("i m inner accessing the ",val)
}

return inner;
}

const value = outer()
value()

function Counter()
{
let count = 0;
this.increment = function () {
count++;
console.log("Count Value is : ",count)
}

this.decrement = function () {
count--;
console.log("Count Value is : ",count)
}
}

let counter1 = new Counter() 
counter1.increment() 
counter1.increment()
counter1.increment()

let counter2 = new Counter() 
counter2.increment()