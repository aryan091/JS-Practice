const a1 = [1 , 2 , 3 , 4]
const a2 = [3 , 4 , 5 , 6]

function union(arr1 , arr2){
    return [...new Set([...arr1 , ...arr2])]
}


function  unionRaw(arr1 , arr2){

    const unionArr =  [...arr1]

    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        if(!unionArr.includes(element)){
            unionArr.push(element)
        }
    }
    return unionArr

}


console.log(union(a1 , a2))
console.log(unionRaw(a1 , a2))