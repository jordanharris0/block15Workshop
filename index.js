//w

// Create a prompt asking user to list flavors seperated by commas
const userInput = prompt(
  "Please enter a list of Froyo flavors seperated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

//parse the users input into an array of froyo flavors
const arrayOfFlavors = userInput.split(",");

console.log(arrayOfFlavors);

//build an object to track which flavors you have observed so far
//loop through array with a blank obj to fill the obj????

function tableFlavors(arrayOfFlavors) {
  const flavors = {};
  for (let i = 0; i < arrayOfFlavors.length; i++) {
    flavors[arrayOfFlavors[i]] = (flavors[arrayOfFlavors[i]] || 0) + 1;
  }
  return flavors;
}

console.log(tableFlavors(arrayOfFlavors));
console.table(tableFlavors(arrayOfFlavors));
