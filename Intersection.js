const a1 = [1 , 2 , 3 , 4]
const a2 = [3 , 4 , 5 , 6]

function intersect(arr1 , arr2){

    return arr1.filter(element => arr2.includes(element))
}

function intersectRaw(arr1 , arr2){

    const intersectArr = []

    for (let i = 0; i < arr1.length; i++) {

        if(arr2.includes(arr1[i]) && !intersectArr.includes(arr1[i])){
            intersectArr.push(arr1[i])  
        }
    }

    return intersectArr
}

console.log(intersect(a1 , a2))
console.log(intersectRaw(a1 , a2))

