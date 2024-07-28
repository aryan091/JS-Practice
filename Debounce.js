

let count = 0;
function getData(){
    count++
    console.log("Fetching data " + count + " times");
}


const debounce = (fn, delay) => {
    

    let timer
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, delay)
    }

}

const debouncedGetData = debounce(getData, 300);

let count2 = 0;
function getDebounceData() {
    debouncedGetData();
}
