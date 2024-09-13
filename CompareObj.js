const obj1 = {
    name : "Aryan",
    age : 23,
    gender : "M"
}

const obj2 = {
    name : "Aryan",
    age : 23,
    gender : "M"
}

const compareObject = (obj1 , obj2) =>
{
var keys = Object.keys(obj2);
var result = keys.every(checkValues)
console.log(result)
}

const checkValues = (key) => {
    if(obj1.hasOwnProperty(key) && obj2[key] === obj1[key]){
        return true
    }
    else{
        return false
    }
}

console.log(compareObject(obj1 , obj2))

console.log(Object.keys(obj2).every(key => obj1.hasOwnProperty(key) && obj2[key] === obj1[key]))