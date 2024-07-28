function fetchData()
{
return new Promise((resolve , reject) => {

setTimeout(() => {
resolve("Data Fetched successfully")
} , 3000)

})
}
function processedData(data)
{
console.log(data);
}

fetchData()
.then((data) => processedData(data))
.catch((error) => console.log("Error is occurred : ",error)) 
