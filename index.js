

 //let thename = "Sam";
 //console.log(thename);

 //const interestRate = 0.3;
//interestRate = 1; can't change a constant 
//console.log(interestRate);

let theName = "Sam"; //string
let theAge = 30; //number, all numbers are this type, no ints or floats or whatever 
let isApproved = false; //Bool
let firstName = undefined;
let selectedColor = null; //use to clear the value of a variable 
//these are all primitive data types

//JavaScript is dynamic: variables can change during the runtime of the code 

//interestingly, in JavaScript, the primitive types are 
    //String
    //Number
    //Bool
    //Undefined
    //Null
    // In contrast to C#, in here strings are also primitive

//As far as the Reference Types, there are 
    //Objects
        // Just like in C#, thr instance of a thing
        let person = {
            thisName: "Sam",
            theirAge: 24
        }
        console.log(person);

        //Interestingly, here in JS, these are KeyValue Pairs

        person.thisName = "Nick";
        console.log(person.thisName)
        // we can also use Bracket notation
        console.log(person.theirAge)
        person['theirAge'] = 55;

        console.log(person.theirAge)
    //Arrays
        let selectedColors = ['red','green'];
        // unlike in C#, our arrays and their size are dynamic: they can change as we go 
        console.log(selectedColors[0]);
        selectedColors[2] = 'blue';
        console.log(selectedColors);
        //the objects in the array are dynamic as well 
        selectedColors[3]=4;
        console.log(selectedColors);
        console.log(selectedColors.length);
    // Functions
        // a set of statements to calculate a value
        function greet(){
            //body of the function
            console.log('hey there!');
        }

        //call the function
        greet();

        function nameTosser(inputName){
            console.log('Hello ' + inputName);
        }

        nameTosser('Sammy');

        //let's clean this up a bit 

        //calculating 

        function square(number){
            return number * number;
        }

        let numberSquared = square(2);
        console.log(numberSquared);
