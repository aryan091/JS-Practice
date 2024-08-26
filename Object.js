
const names = ["Aryan " , "Ankur" , "Akshu"];
const gender = ["M" , "M" , "M" ];
const age = [31 , 25 , 23];

const output = names.map((name , index) =>{
    return {
        name : name,
        gender : gender[index],
        age : age[index]
    }
})

console.log(output)