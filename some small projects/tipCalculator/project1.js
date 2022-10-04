//What if I wanted to make a tip calculator here in JS? 

//So, let's outline what it needs to do:
    // 1. Take in the amount for a meal 
    // 2. Calculate sales tax on that meal and then apply that. 
    // 3. Ask the user if they want to do a 10%, 15%, or 20% tip on top of that 
    // 4. Spit out a nice message that thanks the users and says how much they will be paying in total

//So, what do I need to do in order to address each problem? 

//So, to keep in mind with OOP principles, I feel like I should make an object for the food being ordered. 

let foodItem = 
{
    foodName : null, // this is going to be the title of the dish
    foodCost : null, // this is going to be how much the dish costs 

}

//following that, and wanting to continue with OOP principles, I feel like making a function that takes in a 
    //foodItem object will be a good next step, and then all of the calculation can happen there 

function salesTax(foodItem)
{
    let taxTotal = (((+foodItem.foodCost) * 0.0575) + +foodItem.foodCost); //adding in the plus signs in front of the foodCost objects because that turns them into numbers from strings 
    return taxTotal;    // what this does is finds the tax (5.75% in Ohio) and then adds that to the total 
}


//now after that, let's make the function to bring it all together and find the total cost

function totalCost(foodItem)
{
    console.log("You ordered " + foodItem.foodName + " and the cost is: " + foodItem.foodCost)
    let tipPercentage = prompt("How much do you want to tip? 10%, 15%, or 20%? Input as decimals please.");
    console.log("You chose to tip " + tipPercentage);
    let beforeTip = salesTax(foodItem);
    console.log("Before tip, your total is "+ beforeTip);
    let finalCost = (beforeTip * tipPercentage) + beforeTip;
    console.log("After tip, your total cost is: " + finalCost);
}
//first things first, let's read some user input. 
foodItem.foodName = prompt("What did you order?"); //this will prompt the user for their dish of choice 
foodItem.foodCost= prompt("How much did it cost?"); //this will prompt the user for the cost of it. 

totalCost(foodItem);