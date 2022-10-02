// ### Exercises: Level 1 CHECK CHROME CONSOLE FOR RESULTS

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = 'Maria';
const lastName = 'Pigazzi';
const country = 'Germany';
const age = 23;
const isMarried = false;
const year = 1998;
console.log(typeof firstName, typeof lastName, typeof country, typeof age, typeof isMarried, typeof year);

// 2. Check if type of '10' is equal to 10
console.log(typeof('10') === typeof(10))

// 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10)

// 4. Boolean value is either true or false.
//    1. Write three JavaScript statement which provide truthy value.
//    2. Write three JavaScript statement which provide falsy value.
console.log('10' == 10, typeof 'Vaibhav' === 'string', parseInt('9.8') === 9);
console.log('10' === 10, Math.ceil(9.4) === 9, 'true' == true);

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//    1. 4 > 3
//    2. 4 >= 3
//    3. 4 < 3
//    4. 4 <= 3
//    5. 4 == 4
//    6. 4 === 4
//    7. 4 != 4
//    8. 4 !== 4
//    9. 4 != '4'
//    10. 4 == '4'
//    11. 4 === '4'
//    12. Find the length of python and jargon and make a falsy comparison statement.
console.log(true, true, false, false, true, true, false, false, false, true, false, 'python'.length !== 'jargon'.length)

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//    1. 4 > 3 && 10 < 12
//    2. 4 > 3 && 10 > 12
//    3. 4 > 3 || 10 < 12
//    4. 4 > 3 || 10 > 12
//    5. !(4 > 3)
//    6. !(4 < 3)
//    7. !(false)
//    8. !(4 > 3 && 10 < 12)
//    9. !(4 > 3 && 10 > 12)
//    10. !(4 === '4')
//    11. There is no 'on' in both dragon and python
console.log(true, false, true, true, false, true, true, false, true, true)

// 7. Use the Date object to do the following activities
//    1. What is the year today?
//    2. What is the month today as a number?
//    3. What is the date today?
//    4. What is the day today as a number?
//    5. What is the hours now?
//    6. What is the minutes now?
//    7. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const todayDate = new Date();
const pastDate = new Date('January 1, 1970');
console.log(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate(), todayDate.getDay(), todayDate.getHours(), todayDate.getMinutes(), todayDate.getTime() - pastDate.getTime())

// ### Exercises: Level 2
// ⚠️ No tests here because user inputs come into picture

// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

//    ```sh
//    Enter base: 20
//    Enter height: 10
//    The area of the triangle is 100
//    ```

let height = prompt("Please enter height of triangle:")
const answerHeight = height
let base = prompt("Please enter base of triangle:")
const answerBase = base

console.log(0.5 * answerBase * answerHeight)


// 1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

//    ```sh
//    Enter side a: 5
//    Enter side b: 4
//    Enter side c: 3
//    The perimeter of the triangle is 12
//    ```

let a = prompt("Please enter side a of triangle:")
const answerA = a
let b = prompt("Please enter side b of triangle:")
const answerB = b
let c = prompt("Please enter side c of triangle:")
const answerC = c

let sides = [answerA, answerB, answerC]

let answerAtoInt = parseInt(sides[0]);
let answerBtoInt = parseInt(sides[1]);
let answerCtoInt = parseInt(sides[2]);
let perimeter = answerAtoInt + answerBtoInt + answerCtoInt;
console.log(perimeter);



// 1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt("Please enter length of triangle:")
const answerLength = length
let width = prompt("Please enter width of triangle:")
const answerWidth = width

console.log(2 * length * width)

// 1. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = prompt("Please enter radius of triangle:")
const answerRadius = radius

let area = Math.PI * (radius * radius)
console.log(area);

let circumference = 2 * Math.PI * radius
console.log(circumference)


// 1. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)



// 1. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

//     ```sh
//     Enter hours: 40
//     Enter rate per hour: 28
//     Your weekly earning is 1120
//     ```

let hours = prompt("Please enter your worked hours:")
const workedHours = hours
let rate = prompt("Please enter your hourly rate:")
const hourlyRate = rate

console.log(workedHours * hourlyRate)

// 1. If the length of your name is greater than 7 say, your name is long else say your name is short.

const firstNameTwo = "Maria".length
firstNameTwo > 7
  ? console.log("Your name is long")
  : console.log("Your name is short")

// 1. Compare your first name length and your family name length and you should get this output.

//     ```js
//     let firstName = 'Asabeneh'
//     let lastName = 'Yetayeh'
//     ```

//     ```sh
//     Your first name, Asabeneh is longer than your family name, Yetayeh
//     ```

const firstN = "Maria".length
const familyN = "Pigazzi".length

firstN > familyN
  ? console.log("Your first name is longer than your family name")
  : console.log("Your family name is longer than your first name")

// 1. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

//    ```js
//    let myAge = 250
//    let yourAge = 25
//    ```

//    ```sh
//    I am 225 years older than you.
//    ```

let myAge = 23
let yourAge = 25

console.log(`I am ${yourAge - myAge} years older than you`)

// 1. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

//     ```sh

//     Enter birth year: 1995
//     You are 25. You are old enough to drive

//     Enter birth year: 2005
//     You are 15. You will be allowed to drive after 3 years.
//     ```

let yearTwo = prompt("What is your year of birth?");
let answerYear = yearTwo

const now = new Date()
const fullYear = now.getFullYear()

let calculatedDifference = fullYear - parseInt(answerYear);

calculatedDifference > 18
  ? console.log(`You are ${calculatedDifference}. You are old enough to drive`)
  : console.log(`You are ${calculatedDifference}. You will be allowed to drive after ${18 - calculatedDifference} years`)

// 1. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

//    ```sh
//    Enter number of years you live: 100
//    You lived 3153600000 seconds.
//    ```

let wish = prompt("Please enter how many years you would like to live:")
const answerWish = wish

const yearToInteger = parseInt(wish)

console.log(`You lived ${yearToInteger * 31557600} seconds.`)

// 1. Create a human readable time format using the Date time object
//    1. YYYY-MM-DD HH:mm
//    2. DD-MM-YYYY HH:mm
//    3. DD/MM/YYYY HH:mm

const nowNumberTwo = new Date()

console.log(`${nowNumberTwo.getFullYear()}-${nowNumberTwo.getMonth() + 1}-${nowNumberTwo.getDate()} ${nowNumberTwo.getHours()}:${nowNumberTwo.getMinutes()}`)
console.log(`${nowNumberTwo.getDate()}-${nowNumberTwo.getMonth() + 1}-${nowNumberTwo.getFullYear()} ${nowNumberTwo.getHours()}:${nowNumberTwo.getMinutes()}`)
console.log(`${nowNumberTwo.getDate()}/${nowNumberTwo.getMonth() + 1}/${nowNumberTwo.getFullYear()} ${nowNumberTwo.getHours()}:${nowNumberTwo.getMinutes()}`)

// ### Exercises: Level 3

// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//    1. YYY-MM-DD HH:mm eg. 2012-01-02 07:05

const nowNumberThree = new Date()
const minutesToString = nowNumberThree.getMinutes().toString()
let minutesTwoChiffres = minutesToString.padStart(2, '0');
console.log(`${now.getFullYear()}-${nowNumberThree.getMonth() + 1}-${nowNumberThree.getDate()} ${nowNumberThree.getHours()}:${minutesTwoChiffres}`)
