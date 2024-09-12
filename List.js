const carList = [ { "id": 1, "car": "toyota" }, { "id": 2, "car": "zen" } ];
const priceList = [ { "id": 1, "price": "2000" }, { "id": 2, "price": "4000" } ];

const mergedList = carList.map(car => {
    const priceDetails = priceList.find(price => price.id === car.id)
    return {...car , ...priceDetails}
})
console.log(mergedList)

function searchCars(query)
{
    return mergedList.filter(item => {

    const carName = item.car.toLowerCase();
    const carPrice = item.price.toLowerCase();
    const searchQuery = query.toLowerCase();

    return carName.includes(searchQuery) || carPrice.includes(searchQuery);

    }
        
    )
}

console.log(searchCars("z"));