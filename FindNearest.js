function findNearest(str , fruits){
    const nearestElements = []
    for( let i = 0 ; i < fruits.length ; i++)
        {
            let currentFruit = fruits[i];
            if(currentFruit.includes(str) )
            {
                nearestElements.push(currentFruit);
            }
        }

    return nearestElements
}




const fruits = [
  "apple", 
  "banana", 
  "orange", 
  "mango", 
  "grape", 
  "pineapple", 
  "strawberry", 
  "blueberry", 
  "kiwi", 
  "watermelon", 
  "peach", 
  "cherry", 
  "pomegranate", 
  "pear", 
  "plum", 
  "raspberry", 
  "blackberry", 
  "coconut", 
  "lemon", 
  "lime"
];


let str = "pe";
const arr = findNearest(str , fruits);
console.log(arr)
