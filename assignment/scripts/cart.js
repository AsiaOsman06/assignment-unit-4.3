console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

 



//let items = []; // Define an empty array to store items

// Function to add an item to the array
function addItem(item) {
    basket.push(item); // Push the item into the array
    return true;
}

// Example usage:
addItem("apple");
addItem("banana");
addItem("orange");

console.log(`${basket}`); // Output: ["apple", "banana", "orange"]

function listItems(){
    for(i = 0; i< basket.length; i++){
        console.log(basket[i]);
    }
}
console.log(listItems());


function empty(){
    while(basket.length>0){
    basket.pop();
    }

}
console.log(empty());
console.log(`${basket}`);
// Stretch Goals
const maxItems = 5;


function isFull(){
        return false;
    } 
    
// DO NOT 
//MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
