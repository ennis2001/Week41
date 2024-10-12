/*
    Hi.
    This is a set of practice exercises.
    The purpose is to train on a few things at a time.
    You do this by entering your answer after a task is given (see the example).

    DO NOT change any code given, unless the task specifically says to do so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}





/* -----------------------------------------------------------------------------
    Task: A

    1. Declare a variable to store the following values 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55
    2. Declare a variable to keep the sum of the numbers from step 1.
    3. Use a for or while loop to sum the numbers from step 1 to the variable from step 2
    4. Make a generic function for step 3.
    
*/
console.log("Task: A");

/* Task A.1: Declares a variable that stores the values 0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 */
let storedata = [0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55];

/* Task A.2: Declares a variable to keep the sum of the numbers */
let sum = 0;

/* Task A.3: Uses a for loop to sum the numbers */
for (let i = 0; i < storedata.length; i++) {
    sum += storedata[i];
}

/* Print the sum after the loop */
console.log("The sum of the numbers is: " + sum);

/* Task A.4: Creates a generic function to sum any array of numbers */
function sumArray(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

/* Example of calling the generic function */
console.log("The sum using the generic function is: " + sumArray(storedata));

/* -----------------------------------------------------------------------------
    Task: B

    1. Use a for loop to find the position of 'raspberry' in the list of fruits.
    2. Create a generic function that can find the position of anny fruit in the list. 
*/
console.log("Task: B");

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi', 'mango', 'pineapple', 'pear', 'peach', 'plum', 'watermelon', 'blueberry', 'raspberry', 'blackberry', 'strawberry', 'cherry', 'lemon', 'lime', 'pomegranate', 'apricot'];

/* Task B.1: Find 'raspberry' position using for loop */
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'raspberry') {
        console.log("raspberry is at position: " + i);
        break;
    }
}

/* Task B.2: Generic function to find any fruit's position */
function findFruitPosition(fruitname) {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === fruitname) {
            return i; /* Unsure if the assignment wanted me to return the human readable position of the fruits if so this would be changed to (return i + 1) */
        }
    }
    return -1;
}

/* Example for calling the the function for different fruits */
console.log("The Banana's position is: " + findFruitPosition('banana'));
console.log("The Watermelon's position is: " + findFruitPosition('watermelon'));

/* -----------------------------------------------------------------------------
    Task: C

    1. Declare a new variable to store fruits that start with the letter 'b'.
    2. Use a for or while loop to copy over all fruits starting with 'b' to your new variable (the one you declared in point 1).
    3. Print the number of fruits that start with 'b' (hint: it will be the length of the list from point 2).
*/
console.log("Task: C");

/* Task C.1: New variable to store fruits starting with the letter 'b'. */
const fruitsStartingWithB = [];

/* Task C.2: New for loop to copy over all fruits starting with the letter 'b'. */
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].toLowerCase().startsWith('b')) {
    fruitsStartingWithB.push(fruits[i]);    
    }
}

/* Task C.3: Print the number of fruits starting with 'b' */
console.log("The number of fruits starting with the letter 'b' is: " + fruitsStartingWithB.length);

/* Optional: Print the fruits starting with the letter 'b' */
console.log("The fruits starting with the letter 'b' is: ", fruitsStartingWithB);

/* -----------------------------------------------------------------------------
    Task: D
    * Write the code to find the number of fruits in the list that have a name longer than 8 characters.
    * Print the count.
*/
console.log("Task: D");


/* Count the number of fruits with names longer than 8 characters */
let countLongFruits = 0;

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i].length > 8) {
        countLongFruits++;
    }
}

/* Print the count */
console.log("The number of fruits with names longer then 8 letters are: " + countLongFruits);

/* -----------------------------------------------------------------------------
    Task: E
    Use loops (for or while) to prove that list A and list B contain exactly the same items.
*/
console.log("Task: E");

/* Sorted both lists to easily compare items regardless of order */
const A = [1, 4, 5, "Bananas", true, 3.14, 9.81];
const B = [1, 3.14, 5, 9.81, true, 4, "Bananas"];

const sortedA = A.slice().sort();
const sortedB = B.slice().sort();

/* Checks if both lists have the same length */
if (sortedA.length !== sortedB.length) {
    console.log("Lists A and B do not contain the same items.");
} else {
    /* Uses a loop to compare each item in both sorted lists */
    let listsAreEqual = true;

    for (let i = 0; i < sortedA.length; i++) {
        if (sortedA[i] !== sortedB[i]) {
            listsAreEqual = false;
            break;
        }
    }

     /* Print the result */
    if (listsAreEqual) {
        console.log("Lists A and B contain exactly the same items.");
    } else {
        console.log("Lists A and B do not contain the same items.");
    }
}

