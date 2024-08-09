<<<<<<< HEAD
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data Fetched successfully");
    }, 3000);
  });
=======


function fetchData()
{
return new Promise((resolve , reject) => {

setTimeout(() => {
resolve("Data Fetched successfully")
} , 3000)

})
>>>>>>> 5bbecb44f718f147a19ac3a2b29fc2a316418a88
}
function processedData(data) {
  console.log(data);
}

fetchData()
  .then((data) => processedData(data))
  .catch((error) => console.log("Error is occurred : ", error));
