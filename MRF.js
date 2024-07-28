const names = ['Aryan' , 'Pari' , 'Akshu']
const gender = ['M' , 'F' , 'M']
const age = [23 , 24 , 25]

const data = names.map((name , index) => {
    return {
        name : name,
        gender : gender[index],
        age : age[index]
    }
})
console.log(data)
