let name = {
    firstname : "Aryan",
    lastName : "Daftari"
    }
    let printName = function(hometown , state , country){
    console.log(this.firstname + " " + this.lastName + " "+ hometown + " , "+ state + " , " +
    country )
    }
    
    let printMyName = printName.bind(name , "Jammu" , "J & K");
    printMyName("India")
    Function.prototype.myBind = function(...args1){
    let obj = this
    params = args1.slice(1)
    return function(...args2)
    {
    obj.apply(args1[0], [...params , args2])
    }
    }
    let printMyName2 = printName.myBind(name, "Jammu" , "J & K");
    printMyName2("India")
    