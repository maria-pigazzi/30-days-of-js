// Useful methods for strings - CHECK CHROME CONSOLE TO SEE RESULTS

// 1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.

let challenge = "30 Days of JavaScript"

// 2. Print the string on the browser console using __console.log()__

console.log(challenge)

// 3. Print the __length__ of the string on the browser console using _console.log()_

console.log(challenge.length)

// 4. Change all the string characters to capital letters using __toUpperCase()__ method

console.log(challenge.toUpperCase())

// 5. Change all the string characters to lowercase letters using __toLowerCase()__ method

console.log(challenge.toLowerCase())

// 6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method

console.log(challenge.substr(0,2))
// Alternative - console.log(challenge.substring(0,2))

// 7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.

console.log(challenge.slice(3))

// 8. Check if the string contains a word __Script__ using __includes()__ method

console.log(challenge.includes('Script'))

// 9. Split the __string__ into an __array__ using __split()__ method

console.log(challenge.split())

// 10. Split the string 30 Days Of JavaScript at the space using __split()__ method

console.log(challenge.split(' '))

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(", "))

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.

console.log(challenge.replace("JavaScript", "Python"))

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.

console.log(challenge.charAt(15))

// 14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__

console.log(challenge.charCodeAt(12))

// 15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript

console.log(challenge.indexOf("a"))

// 16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.

console.log(challenge.lastIndexOf("a"))

// 17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

let sent = "You cannot end a sentence with because because because is a conjunction"
console.log(sent.indexOf('because'))

// 18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

console.log(sent.lastIndexOf('because'))

// 19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

console.log(sent.search('because'))

// 20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let sentence_with_spaces = ' 30 Days Of JavaScript '
console.log(sentence_with_spaces.trim())

// 21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true

console.log(challenge.startsWith("30"))

// 22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true

console.log(challenge.endsWith("Script"))

// 23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript

console.log(challenge.match(/[a]/g))

// 24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

console.log('30 Days of '.concat('Javascript'))

// 25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times

console.log(challenge.repeat(2))


// ## Exercise: Level 2

// Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log("\'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.");

// Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' == typeof 10); // false
console.log(typeof 10 == typeof 10); // true

// Check if parseFloat('9.8') is equal to 10 if not, make it exactly equal with 10.
console.log(parseFloat('9.8') == 10)
console.log(Math.ceil('9.8') == 10)

// Check if 'on' is found in both python and jargon
console.log('python'.includes('on'));
console.log('jargon'.includes('on'));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon'
console.log(sentence.includes('jargon'))

// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let text = 'You cannot end a sentence with because because because is a conjunction';
console.log(text.substr(31, 23))


// ## Exercise: Level 3

// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word __love__ in this sentence.

const sen = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveNumber = sen.match(/love/gi).length
console.log(loveNumber)

// 2. Use __match()__ to count the number of all __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

const sentenceBecause = 'You cannot end a sentence with because because because is a conjunction';
let becauseNumber = sentenceBecause.match(/because/gi).length
console.log(becauseNumber)
// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

//     ```js
//         const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
//     ```

const uncleanSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanSentence = (uncleanSentence.replace(/[^a-zA-Z.,?30 ]/g, ""))
console.log(cleanSentence);

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const stringWithNum = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let numbers = stringWithNum.match(/\d+/g)
let firstNumToInt = parseInt(numbers[0])*12;
let secondNumToInt = parseInt(numbers[1]);
let thirdNumToInt = parseInt(numbers[2])*12;
let summedNumbers = firstNumToInt + secondNumToInt + thirdNumToInt;
console.log(summedNumbers + " euro");
