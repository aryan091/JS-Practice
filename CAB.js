let name = {
    firstName: "Aryan",
    lastName: "Daftari",

    getFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    },
}


name.getFullName();

let name2 = {
    firstName: "Akshay",
    lastName: "Saini",
}

// Function borrowing
name.getFullName.call(name2);
// Purpose: Invokes a function immediately with a specified this value and individual arguments.


// .apply()
// Purpose: Invokes a function immediately with a specified this value and an array of arguments.


// .bind()
// Purpose: Creates a new function with a specified this value and optional preset arguments.

//                                          Key Differences:

//                                             Invocation:

//      call() and apply() invoke the function immediately, while bind() returns a new function to be called later.

//                                              Arguments:

//      call() takes individual arguments, apply() takes an array of arguments, and bind() can take both individual and preset arguments. 

//                                          Common Use Cases:
//      Borrowing methods: Use a method from one object on another object.
//      Setting the context: Ensure a function is executed with the correct this value.
//      Partial application: Create a new function with some arguments already set.
