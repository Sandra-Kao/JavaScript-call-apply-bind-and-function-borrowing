console.clear();

const person = {
    firstName: "Snadra",
    lastName: "Kao",
    greeting: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

const logFunction = function(arg1, arg2) {
    const [metnod, ...args] = arguments;
    console.log("Hi " + this.greeting());
    console.log("Metnod: " + metnod);
    console.log("Hint: " + [args]);
    console.log("-------------------------");
};

logFunction.bind(person)("bind()", "Make a copy of the function");
//Bind => Make a copy of the function

logFunction.call(person, "call()", "Execute the function directly");
//call => Execute the function directly

logFunction.apply(person, ["apply()", "Execute the function directly, BUT input the argumants as a arr[]"]);
//apply => Execute the function directly, BUT input the argumants as a arr[]


//In a real life case
//Function borrowing
var person2={  
    firstName: "Function",
    lastName: "borrowing",
}
console.log(person.greeting.apply(person2));
