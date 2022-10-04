// ### Exercises: Level 1
// Note: There are prompts already added in this file which will call the functions when its run. No need to modify those


// 1. Implement the function checkDrivingAge. If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to  wait for the number of years he needs to turn 18.

//    ```sh
//    Enter your age: 30
//    You are old enough to drive.

//    Enter your age:15
//    You are left with 3 years to drive.
//    ```

// Implement this function

let age = prompt("How old are you?")

function checkDrivingAge(age) {
  if (age >= 18) {
    console.log("You are old enough to drive.")
  } else if (age < 18) {
    console.log("You are left with " + (18 - age) + " years to drive.")
  }
}

console.log(checkDrivingAge)

// DO NOT MODIFY THIS. its for used for testing the solution
/* const ageInput = prompt('Enter your age:', 0);
const ageInputNum = parseInt(ageInput, 10);
checkDrivingAge(ageInputNum) */



// 2. Implement the function compareAge to compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

//    ```sh
//    Enter your age: 30
//    You are 5 years older than me.
//    Enter your age: 20
//    I am 5 years older than you.
//    Enter your age: 25
//    We both are of the same age.
//    ```

// Implement this function
let myAge = prompt("Compare age function: enter your age:")
let yourAge = prompt("Compare age function: enter your age (two):")

function compareAge(myAge, yourAge) {
  if (myAge < yourAge) {
      console.log("You are " + (yourAge - myAge) + " years older than me.")
    } else if (myAge > yourAge) {
      console.log("I am " + (myAge - yourAge) + " years older than you.")
    } else {
      console.log("We both are of the same age.")
    }
}

console.log(compareAge)
// DO NOT MODIFY THIS. its for used for testing the solution
/* for (let i = 0; i < 3; i++) {
  const yourAgeInput = prompt('Enter your age:', 0);
  const yourAge = parseInt(yourAgeInput, 10);
  compareAge(yourAge)
} */



// 3. Implement the function compareNumbers to compare the numbers. It receives a and b as input. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//     - using if else
//     - ternary operator.

//     ```js
//       let a = 4
//       let b = 3
//     ```

//     ```sh
//       Enter number a: 4
//       4 is greater than 3
//       4 is greater than 3
//
//     ```

// Implement this function
let a = prompt("Insert number a")
let b = prompt("Insert number b")

function compareNumbers(a, b) {
  if (a > b) {
    console.log(`${a} is greater than ${b}`)
  } else if (a < b) {
    console.log(`${a} is less than ${b}`)
  } else {
    console.log(`${a} is equal to ${b}`)
  }

  //  let result = (a > b)
  //   ? console.log(`${a} is greater than ${b}`)
  //   : console.log(`${a} is less than ${b}`)
}

console.log(compareNumbers)

// DO NOT MODIFY THIS. its for used for testing the solution
/* const a = parseInt(prompt('Enter number a:', 0));
const b = parseInt(prompt('Enter number b:', 0));
compareNumbers(a, b) */




// 4. Implement the function checkEvenOdd. It receives num as input. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

//     ```sh
//     Enter a number: 2
//     2 is an even number

//     Enter a number: 9
//     9 is is an odd number
//     ```

// Implement this function


function checkEvenOdd(num) {

  const r = (num % 2 == 0)
    ? console.log(`${num} is an even number`)
    : console.log(`${num} is an odd number`)

}

console.log(checkEvenOdd)

// DO NOT MODIFY THIS. its for used for testing the solution
/* const num1 = parseInt(prompt('Enter number:', 0));
checkEvenOdd(num1)
const num2 = parseInt(prompt('Enter number:', 0));
checkEvenOdd(num2) */

// ### Exercises: Level 2

// 1. Write a code which  can give grades to students according to theirs scores:
//    - 80-100, A
//    - 70-89, B I guess this was meant as 79 (or was the 80 from before 90?)
//    - 60-69, C
//    - 50-59, D
//    - 0-49, F

let points = prompt("Insert your result in points:")

if (points <= 100 && points >= 80) {
  console.log('A')
} else if (points >= 70 && points < 80) {
  console.log('B')
} else if (points >= 60 && points < 70) {
  console.log('C')
} else if (points >= 50 && points < 60) {
  console.log('D')
} else if (points >= 0 && points < 50) {
  console.log('F')
} else {
  console.log('Please run again and insert results.')
}


/* switch (points) {
  case points <= 100 && points >= 80:
    console.log('A')
    break
  case points >= 70 && points < 80:
    console.log('B')
    break
  case points >= 60 && points < 70:
    console.log('C')
    break
  case points >= 50 && points < 60:
    console.log('D')
    break
  case points >= 0 && points < 50:
    console.log('F')
    break
  default:
    console.log('Please insert result')
} */

// 1. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is :
//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer

let month = prompt("Please insert month:")

if (month == 'September' || month == 'October'|| month == 'November') {
  console.log('Autumn')
} else if (month == 'December' || month == 'January'|| month == 'February') {
  console.log('Winter')
} else if (month == 'March' || month == 'April'|| month == 'May') {
  console.log('Spring')
} else if (month == 'June' || month == 'July'|| month == 'August') {
  console.log('Summer')
} else {
  console.log('Please run again and insert a month.')
}


// 1. Check if a day is weekend day or a working day. Your script will take day as an input.

// ```sh
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.
//   ```

let day = prompt("What is the day today?")

if (day == 'Monday' || day == 'Tuesday'|| day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
  console.log(`${day} is a working day.`)
} else if (day == 'Saturday' || day == 'Sunday') {
  console.log(`${day} is a weekend.`)
} else {
  console.log('Please run again and insert a day.')
}

// ### Exercises: Level 3

// 1. Write a program which tells the number of days in a month.

//   ```sh
//     Enter a month: January
//     January has 31 days.

//     Enter a month: JANUARY
//     January has 31 day

//     Enter a month: February
//     February has 28 days.

//     Enter a month: FEbruary
//     February has 28 days.
//   ```

let monthName = prompt("Enter a month:")
// to change the string to a number
let monthNumber = new Date(`${monthName} 1, 2022`).getMonth() + 1
// take number and see how many days are in it - moment is not working but I don't know why
  console.log(moment(monthNumber).daysInMonth)

// 1. Write a program which tells the number of days in a month, now consider leap year.

// I'm not sure how to solve this
