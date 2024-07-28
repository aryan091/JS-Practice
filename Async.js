function fetchData()
{
return new Promise((resolve , reject) => {

setTimeout(() => {
resolve("Data Fetched successfully")
} , 3000)

})
}

async function fetchDataAsync()
{
const data = await fetchData()
console.log('Data received by Async :', data);
}

fetchDataAsync()