console.log("hello world");
/* ============================================================
   JS CLASS — ONE-FILE WORKBOOK
   ------------------------------------------------------------
   How to use:
   - Each exercise is written as a comment (lines starting with //).
   - Write your JavaScript in the blank space under each one.
   - Use console.log(...) to print your answer.
   - Run this file with Node:   node workbook.js
     (or paste one exercise at a time into a lesson's Run box.)

   Sections:
     PART 1 — IF STATEMENTS        (1–10)
     PART 2 — COMBINED PROJECT     (1–20)
     PART 3 — STRINGS + INTERVIEW  (1–25)
   ============================================================ */

/* ============================================================
   PART 1 — IF STATEMENTS
   ============================================================ */

// ----- 1. Simple if -----
// Declare `let age = 16`. Write an if that logs "You can drive" when age >= 16.
let age = 16;
if (age >= 16) {
  console.log("You can drive");
} else {
  console.log("You can't drive");
}

// ----- 2. if / else -----
// Declare `let isWeekend = true`. Log "Relax!" if it is the weekend, otherwise "Go to work".
let isWeekend = true;
if ((isWeekend = true)) {
  console.log("Relax");
} else {
  console.log("Go to work");
}

// ----- 3. Even or odd -----
// Declare `let number = 7`. Use if/else and `number % 2 === 0` to log "even" or "odd".
let number = 7;
if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// ----- 4. Grade the score -----
// Declare `let score = 82`. Log the letter grade:
//   90+ -> "A", 80–89 -> "B", 70–79 -> "C", below 70 -> "F".
let score = 76;

if (score >= 90 || score == 100) {
  console.log("A");
} else if (score >= 80 || score == 89) {
  console.log("B");
} else if (score >= 70 || score == 79) {
  console.log("C");
} else if (score >= 60 || score == 69) {
  console.log("D");
} else {
  console.log("F");
}

// ----- 5. Biggest of two -----
// Declare `let a = 14` and `let b = 9`. Log whichever is larger, or "equal" if they match.
let a = 14;
let b = 9;
if (a > b) {
  console.log(a);
} else if (a < b) {
  console.log(b);
} else {
  console.log("equal");
}

// ----- 6. Temperature advice -----
// Declare `let temp = 30`. Log:
//   above 28 -> "Wear shorts", 15 to 28 -> "Wear a jacket", below 15 -> "Wear a coat".
let temp = 30;
if (temp > 28) {
  console.log("Wear shorts");
} else if (temp >= 15 || temp <= 28) {
  console.log("Wear a jacket");
} else {
  console.log("Wear a coat");
}

// ----- 7. Login message -----
// Declare `let username = "admin"` and `let password = "1234"`.
// If both are correct, log "Welcome", otherwise "Access denied".
let username = "admin";
let password = "1234";
if (username == true && password == true) {
  console.log("Welcome");
} else {
  console.log("Access denied");
}

// ----- 8. Positive, negative, zero -----
// Declare `let n = -5`. Log "positive", "negative", or "zero".
let n = 0;
if (n > 0) {
  console.log("positive");
} else if (n < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// ----- 9. Ticket price -----
// Declare `let age = 65`. Price: under 12 -> "$5", 12 to 64 -> "$12", 65+ -> "$8".
let inAge = 70;
if (inAge < 12) {
  console.log("$5");
} else if (inAge >= 12 && inAge <= 64) {
  console.log("$12");
} else {
  console.log("$8");
}

// ----- 10. Traffic light -----
// Declare `let light = "yellow"`. Log:
//   "green" -> "Go", "yellow" -> "Slow down", "red" -> "Stop", else -> "Invalid light".
let light = "yellow";
if (light === "green") {
  console.log("Go");
} else if (light === "yellow") {
  console.log("Slow down");
} else if (light === "red") {
  console.log("stop");
} else {
  console.log("Invalid light");
}

/* ============================================================
   PART 2 — COMBINED PROJECT (variables + operators + if)
   ============================================================ */

// ----- 1. Movie ticket machine -----
// Variables: age, hasMembership (boolean).
//   under 12 OR over 65 -> "$6", member of any age -> "$8", everyone else -> "$12". Log the price.
let asAge = 39;
let hasMembership = true;
if (asAge < 12 || asAge > 65) {
  console.log("$6");
} else if (hasMembership == true) {
  console.log("$8");
} else {
  console.log("$12");
}

// ----- 2. Password strength -----
// Variable: password (string). Using password.length:
//   >= 12 -> "Strong", >= 8 -> "Medium", otherwise -> "Weak".
let thePassword = "nvjbn,klk,nlkbxfdfjh";
if (thePassword.length >= 12) {
  console.log("strong");
} else if (thePassword.length >= 8) {
  console.log("Medium");
} else {
  console.log("Weak");
}

// ----- 3. Game level up -----
// let xp = 250, const levelUpAt = 200. If xp >= levelUpAt, log "Level up!" and reset xp to 0;
// otherwise log how much XP is left. Show xp before and after.
let xp = 150;
const LevelUpAt = 200;
if (xp >= LevelUpAt) {
  xp == 0;
  console.log("Level up!");
} else {
  console.log(xp);
}

// ----- 4. Tip calculator -----
// Variables: bill, serviceWasGood (boolean). Good -> 20% tip, otherwise 10%.
// Compute the tip and the total, log both.
let bill = 100;
serviceWasGood = false;
if (serviceWasGood == true) {
  console.log(bill + bill * 0.2);
} else {
  console.log(bill + bill * 0.1);
}

// ----- 5. Weather outfit -----
// Variables: temp, isRaining (boolean).
//   raining AND temp < 15 -> "Coat and umbrella", raining only -> "Umbrella",
//   temp > 28 -> "T-shirt", otherwise -> "Light jacket".
let Temperature = 30;
let isRaining = false;
if (isRaining && Temperature < 15) {
  console.log("Coat and umbrella");
} else if (isRaining == true) {
  console.log("Umbrella");
} else if (Temperature > 28) {
  console.log("T-shirt");
} else {
  console.log("Light jacket");
}
// ----- 6. Exam pass with bonus -----
// Variables: score, attendedExtraClass (boolean).
// Pass if score >= 50, OR if score >= 45 AND attended the extra class. Log "Pass" or "Fail".
let inScore = 44;
let attendedExtraClass = false;
if (inScore >= 50 || (inScore >= 45 && attendedExtraClass === true)) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// ----- 7. Cart discount -----
// Variables: total, isMember (boolean).
//   total >= 100 AND member -> 20% off, total >= 100 only -> 10% off, otherwise -> no discount.
// Log the final price.
let total = 300;
let isMember = true;
if (total >= 100 && isMember === true) {
  total = total - total * 0.2;
  console.log(total);
}
if (total >= 100 && isMember === false) {
  total = total * 0.9;
  console.log(total);
}

// ----- 8. Login system -----
// Variables: const correctUser, const correctPass, plus enteredUser, enteredPass, isLocked (boolean).
// Log "Welcome" only when NOT locked AND both username and password match. Otherwise "Login failed".
const correctUser = "pppp";
const correctPass = "123456789";
let enteredUser = "pppp";
let enteredPass = "123456789";
let isLocked = true;
if (
  isLocked === true &&
  enteredUser === correctUser &&
  enteredPass === correctPass
) {
  console.log("Welcome");
} else {
  console.log("Login failed");
}

// ----- 9. BMI category -----
// Variables: weight (kg), height (m). bmi = weight / (height * height). Log:
//   below 18.5 -> "Underweight", 18.5–24.9 -> "Normal", 25–29.9 -> "Overweight", 30+ -> "Obese".
let weight = 100;
let height = 1.6;
let bmi = weight / (height * height);

if (bmi < 18.5) {
  console.log("Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Normal");
} else if (bmi > 25 && bmi <= 29.9) {
  console.log("Overweight");
} else {
  console.log("Obese");
}

// ----- 10. Mini ATM -----
// let balance = 500, let withdrawAmount = 200, const dailyLimit = 300.
// Allow only when withdrawAmount <= balance AND withdrawAmount <= dailyLimit.
//   allowed -> subtract from balance, log "Success" + new balance;
//   too much -> "Insufficient funds"; over limit -> "Over daily limit".

let balance = 400;
let withdrawAmount = 200;
const dailyLimit = 300;
if (withdrawAmount <= balance && withdrawAmount <= dailyLimit) {
  console.log("Success");
  balance = balance - withdrawAmount;
  console.log(balance, "new balance");
} else {
  console.log("Insufficient funds");
}

// ----- 11. Leap year check -----
// Variable: year. Leap when divisible by 4 AND (not divisible by 100 OR divisible by 400).
// Use % with && and ||. Log "Leap year" or "Normal year". Test with 2000, 1900, 2024.
let year = 2026;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap year");
} else {
  console.log("Normal year");
}

// ----- 12. FizzBuzz (one number) -----
// Variable: n. divisible by 3 AND 5 -> "FizzBuzz", by 3 only -> "Fizz", by 5 only -> "Buzz",
// otherwise -> the number itself. Test with 15, 9, 10, 7.
let ppNumber = 9;
if (ppNumber % 3 === 0 && ppNumber % 5 === 0) {
  console.log("FizzBuzz");
} else if (ppNumber % 3 === 0) {
  console.log("Fizz");
} else if (ppNumber % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(ppNumber);
}

// ----- 13. Rock paper scissors -----
// Variables: player1, player2 (strings: "rock", "paper", "scissors").
// Log "Player 1 wins", "Player 2 wins", or "Tie". rock>scissors, scissors>paper, paper>rock.
let player1 = "scissors";
let player2 = "paper";

if (
  (player1 === "rock" && player2 === "paper") ||
  (player1 === "scissors" && player2 === "rock") ||
  (player1 === "paper" && player2 === "scissors")
) {
  console.log("Player 2 wins");
} else {
  console.log("Player 1 wins");
}

// ----- 14. Triangle type -----
// Variables: sides a, b, c. First check valid triangle (each side < sum of other two).
// invalid -> "Not a triangle"; all equal -> "Equilateral"; exactly two equal -> "Isosceles";
// all different -> "Scalene".
let sidesA = 20;
let sidesB = 20;
let sidesC = 20;

if (sidesA === sidesB && sidesA === sidesC && sidesB === sidesC) {
  console.log("Equilateral");
} else if (sidesA === sidesB || sidesA === sidesC || sidesB === sidesC) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}

// ----- 15. 12-hour clock -----
// Variable: hour (0–23). Convert to 12-hour and log like "3 PM".
//   0 -> "12 AM", 12 -> "12 PM", 1–11 -> "AM", 13–23 -> subtract 12 and add "PM".
// Test with 0, 9, 12, 18.
let hour = 15;
if (hour === 0) {
  console.log("12AM");
} else if (hour === 12) {
  console.log("12PM");
} else if (hour < 12) {
  console.log(hour + "AM");
} else {
  console.log(hour - 12 + "PM");
}

// ----- 16. Shipping cost -----
// Variables: weight (kg), isExpress (boolean), isMember (boolean).
// Base: weight <= 1 -> $5, weight <= 5 -> $10, otherwise -> $20.
// If isExpress, double base. Then if isMember, take $3 off (never below $0). Log final cost.
let ppWeight = 0.9;
let isExpress = true;
let ppMember = true;
if (ppWeight <= 1) {
  cost = 5;
} else if (ppWeight <= 5) {
  cost = 10;
} else {
  cost = 20;
}
if (isExpress) {
  cost *= 2;
}
if (isMember) {
  cost -= 3;
}
if (cost < 0) {
  cost = 0;
}
console.log("Final cost:", cost);

// ----- 17. Progressive tax -----
// Variable: income. first $10,000 -> 0%, $10,001–$30,000 -> 10% on that portion,
// above $30,000 -> 20% on that portion. Log total tax. Test with 5000, 20000, 50000.
let income = 49000;
if (income <= 10000) {
  tax = income * 0;
} else if (income > 10001 && income <= 30000) {
  tax = income * 0.1;
} else {
  tax = income * 0.2;
}
console.log("Total tax", tax);

// ----- 18. Password validator -----
// Variables: password (string), confirmPassword (string). Log "Valid" only when ALL true:
//   length >= 8, NOT equal to "password", AND matches confirmPassword.
// Otherwise a specific reason: "Too short", "Too common", or "Does not match" (in that order).
let inPassword = "ppppllllkkkmmmjj";
let confirmPassword = "ppppllllkkkmmmjj";

if (inPassword.length <= 8) {
  console.log("Too short");
} else if (inPassword === "inPassword") {
  console.log("Too common");
} else if (inPassword !== confirmPassword) {
  console.log("Does not match");
} else {
  console.log("Valid");
}

// ----- 19. Concert pricing -----
// Variables: age, day (string), hasVipCode (boolean). Start price $50.
//   under 18 OR 65+ -> half price; day is "Tuesday" -> $10 off (after age discount);
//   hasVipCode -> add flat $30 at the end. Log the final price.
let pppAge = 18;
let price = 50;
let pppDay = "Tuesday";
let hasVipCode = false;

if (pppAge < 18 || pppAge > 65) {
  console.log((price = price / 2), "final price");
} else if (pppDay === "Tuesday") {
  console.log((price = price / 2 - 10), "final price");
} else if (hasVipCode) {
  console.log((price = price + 30), "final price");
} else {
  console.log("final price", price);
}

// ----- 20. Vending machine -----
// const price = 150 (cents), insertedAmount (cents), isSoldOut (boolean). In order:
//   isSoldOut -> "Sold out" and stop; insertedAmount < price -> log how much more is needed;
//   exact -> "Enjoy your drink!"; too much -> "Enjoy your drink!" AND change (insertedAmount - price).
const lllprice = 150;
let insertedAmount = 110;
let isSoldOut = false;
if (lllprice === insertedAmount) {
  console.log("Enjoy your drink!");
} else if (lllprice > insertedAmount) {
  console.log("add amount", lllprice - insertedAmount);
} else if (lllprice < insertedAmount) {
  console.log("Change Amount", insertedAmount - lllprice);
}
if (isSoldOut) {
  console.log("Sold out");
}

/* ============================================================
   PART 3 — STRINGS + INTERVIEW ROUND
   ------------------------------------------------------------
   Tools: .length .toUpperCase() .toLowerCase() text[i] .charAt()
          .includes() .indexOf() .slice() .substring() .trim() + (join)
   Convert: String(n)  Number(s)  (n).toString()  "" + n  isNaN(Number(x))
   ============================================================ */

// ----- 1. How long is the word? -----
// word (string). Log word.length. if longer than 5 -> "Long word", else "Short word".
// Test "sun" and "elephant".
let word = "sun";
if (word.length > 5) {
  console.log("Long word");
} else {
  console.log("Short word");
}

// ----- 2. Loud and quiet -----
// name (string). Log it with .toUpperCase() and with .toLowerCase().
let ppname = "narangerel";
console.log(ppname.toUpperCase());
console.log(ppname.toLowerCase());

// ----- 3. First and last letter -----
// word (string). Log word[0] and word[word.length - 1]. Test "hello" -> h and o.
let lllword = "hello";

// ----- 4. Cut a piece (slice) -----
// word = "JavaScript". Log word.slice(0, 4) and word.slice(4).

// ----- 5. Is it an email? -----
// email (string). if email.includes("@") -> "Looks like an email", else "Not an email".
// Test "sam@mail.com" and "sam.com".

// ----- 6. Full name builder -----
// firstName, lastName (strings). Join with a space using + into fullName.
// Log fullName and fullName.length.

// ----- 7. Valid username -----
// username (string). Valid only when length >= 3 AND <= 15.
// Log "Valid username" or "Invalid username".

// ----- 8. Same word? (ignore case) -----
// a, b (strings). if a.toLowerCase() === b.toLowerCase() -> "Match", else "No match".
// Test "Hello" and "hello".

// ----- 9. Clean the spaces (trim) -----
// raw = "   hi there   ". clean = raw.trim(). Log clean and clean.length. Compare to raw.length.

// ----- 10. Find a letter (indexOf) -----
// word (string). word.indexOf("a"). if -1 -> "No letter a", else "Found a at position " + ...
// Test "banana" and "sky".

// ----- 11. Phone area code -----
// phone (10-char string like "5551234567"). Log "Area code: " + phone.slice(0, 3).
// if phone.length is not exactly 10 -> "Invalid number".

// ----- 12. Password rule (length + word) -----
// password (string). "Strong" only when length >= 8 AND NOT contains "password"
// (!password.toLowerCase().includes("password")). Otherwise "Weak".

// ----- 13. Initials -----
// firstName, lastName (strings). first letters uppercase, join with + and dots -> "M.J.".
// "maria" + "jones" -> "M.J.".

// ----- 14. Capitalize a name -----
// name = "maria". Join name[0].toUpperCase() with name.slice(1) -> "Maria".

// ----- 15. Tiny palindrome check -----
// word (3-letter string like "mom"). Reverse with word[2]+word[1]+word[0], compare with ===.
// Log "Palindrome" or "Not a palindrome". Test "mom" and "cat".

// --- Interview round: Numbers <-> Strings ---

// ----- 16. Count the digits -----
// n (number). String(n).length. if more than 3 digits -> "Big number", else "Small number".
// Test 42 and 10000.

// ----- 17. Sum the two digits -----
// n (2-digit number like 47). s = String(n). Number(s[0]) + Number(s[1]). Log the sum.
// if sum is exactly 10 -> "Round". Test 47 and 55.

// ----- 18. First and last digit -----
// n (3-digit number). s = String(n). Log Number(s[0]) and Number(s[s.length - 1]).
// if equal -> "Same ends". Test 363 and 481.

// ----- 19. Reverse a 3-digit number -----
// n (3-digit number). s = String(n). reversed = Number(s[2] + s[1] + s[0]). Log it.
// Test 123 -> 321.

// ----- 20. Palindrome number -----
// n (3-digit number). Build reversed like #19, compare to n with ===.
// Log "Palindrome" or "Not a palindrome". Test 121 and 123.

// ----- 21. Contains a lucky 7? -----
// n (number). if String(n).includes("7") -> "Lucky!", else "No luck". Test 1700 and 2024.

// ----- 22. Glue two numbers -----
// a = 12, b = 34. Number(String(a) + String(b)) -> 1234. Log it, then log typeof the result.

// ----- 23. Pad the clock -----
// minute (0–59). if String(minute).length === 1 add "0" in front. Log like "05" or "42".
// Test 5 and 42.

// ----- 24. Cents to price tag -----
// cents (3+ digit number like 150). s = String(cents).
// rest = s.slice(s.length - 2); dollars = s.slice(0, s.length - 2).
// Log "$" + dollars + "." + rest -> "$1.50". Test 150 and 905.

// ----- 25. Is this string a number? -----
// input (string like "42" or "hello"). if isNaN(Number(input)) -> "Invalid input";
// otherwise turn it into a number, double it, log the result. Test "21" and "abc".

/* ============================================================
   End of workbook. Nice work!
   ============================================================ */
// LOOP EXERCISES
/* ============================================================

   LESSON 6 — LOOPS: EXERCISES + TEST CASES  (EASY EDITION)

   ------------------------------------------------------------

   Same as lesson-6-loops-tests.js, but PART E uses EASIER

   LeetCode-style problems — no tricky sign handling, base-26,

   dynamic programming, or cycle detection. Build confidence here,

   then move up to the harder file.

   How to use:

   - Read the exercise, then write your loop in the blank space

     under it (where you see  // your code here).

   - Use console.log(...) to print your answer.

   - Each exercise has 3 TEST CASES: an INPUT -> the EXACT output

     you should get. Change the starter variable to each test

     value, run the file (node lesson-6-loops-tests-easy.js), and

     compare your output to the expected output.

   - All 3 match = exercise correct.

   Rules: NO arrays. NO functions. Only variables, data types,

   operators (% && || !), if, strings, String()/Number()/isNaN,

   and Math.floor(x).

   NOTE: every exercise uses a DIFFERENT variable name, so all

   your answers can live in this one file with no clashes.

   The two shapes:

     for (let i = 0; i < 5; i++) { ... }       // known count

     let n = 5; while (n > 0) { ...; n--; }     // until false

   ============================================================ */

/* ============================================================

   PART A — FOR LOOPS

   ============================================================ */

// ----- 1. Count up -----

// Log the numbers 1 through `maxCount`, one per line, using a for loop.

let maxCount = 10;
for (let i = 0; i <= maxCount; i++) {
  console.log(i);
}
// your code here

// TEST 1:  maxCount = 10  ->  1 2 3 4 5 6 7 8 9 10

// TEST 2:  maxCount = 3   ->  1 2 3

// TEST 3:  maxCount = 1   ->  1

// ----- 2. Count down -----

// Log `startNum` down to 0, then log "Liftoff!" after the loop ends.

let startNum = 10;
for (let i = startNum; i >= 0; i = i - 1) {
  console.log(i);
}
// your code here

// TEST 1:  startNum = 10  ->  10 9 8 7 6 5 4 3 2 1 0  then  Liftoff!

// TEST 2:  startNum = 3   ->  3 2 1 0  then  Liftoff!

// TEST 3:  startNum = 0   ->  0  then  Liftoff!

// ----- 3. Even numbers only -----

// Log every even number from 2 up to `evenMax`. (Step i += 2, or if (i % 2 === 0).)

let evenMax = 10;
for (let i = 2; i <= evenMax; i = i + 2) {
  console.log(i);
}
// your code here

// TEST 1:  evenMax = 20  ->  2 4 6 8 10 12 14 16 18 20

// TEST 2:  evenMax = 10  ->  2 4 6 8 10

// TEST 3:  evenMax = 1   ->  (nothing printed)

// ----- 4. Sum 1 to max -----

// sumTotal = 0 before the loop. Add each number 1..`sumMax` to it. Log sumTotal.

let sumMax = 100;
let sumTotal = 0;
for (let i = 0; i <= sumMax; i = i + 1) {
  sumTotal = sumTotal + i;
}
console.log(sumTotal);

// your code here

// TEST 1:  sumMax = 100  ->  5050

// TEST 2:  sumMax = 10   ->  55

// TEST 3:  sumMax = 1    ->  1

// ----- 5. Times table -----

// Log the `tableN` times table from "tableN x 1" to "tableN x 10", like "7 x 3 = 21".

let tableN = 2;
for (let i = 1; i <= 10; i = i + 1) {
  console.log(tableN, "x", i, "=", tableN * i);
}

// your code here

// TEST 1:  tableN = 7  ->  7 x 1 = 7  ...  7 x 10 = 70

// TEST 2:  tableN = 2  ->  2 x 1 = 2  ...  2 x 10 = 20

// TEST 3:  tableN = 1  ->  1 x 1 = 1  ...  1 x 10 = 10

// ----- 6. Factorial -----

// Multiply 1*2*...*`factN` with an accumulator starting at 1. Log the result.

let factN = 6;
let resultN = 1;
for (let i = 1; i <= factN; i = i + 1) {
  resultN *= i;
}
console.log(resultN);

// your code here

// TEST 1:  factN = 5  ->  120

// TEST 2:  factN = 3  ->  6

// TEST 3:  factN = 1  ->  1

// ----- 7. Count multiples -----

// Count how many numbers from 1 to `multMax` are divisible by 3 (i % 3 === 0). Log the count.

let multMax = 50;
let count = 0;
for (let i = 1; i <= multMax; i = i + 1) {
  if (i % 3 === 0) {
    count += 1;
  }
}
console.log(count);

// your code here

// TEST 1:  multMax = 50  ->  16

// TEST 2:  multMax = 10  ->  3

// TEST 3:  multMax = 2   ->  0

// ----- 8. FizzBuzz (lite) -----

// Loop 1 to `fizzMax`. Multiple of 3 -> "Fizz", of 5 -> "Buzz", both -> "FizzBuzz", else the number.

let fizzMax = 15;
for (let i = 1; i <= fizzMax; i++)
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else console.log(i);

// your code here

// TEST 1:  fizzMax = 5   ->  1 2 Fizz 4 Buzz

// TEST 2:  fizzMax = 15  ->  1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz

// TEST 3:  fizzMax = 3   ->  1 2 Fizz

/* ============================================================

   PART B — WHILE LOOPS

   ============================================================ */

// ----- 9. Halve it -----

// While halveN > 1, log halveN then halve it: halveN = Math.floor(halveN / 2).

let halveN = 16;
while (halveN > 0) {
  console.log(halveN);
  halveN = Math.floor(halveN / 2);
}

// your code here

// TEST 1:  halveN = 100  ->  50 25 12 6 3 1

// TEST 2:  halveN = 16   ->  8 4 2 1

// TEST 3:  halveN = 1    ->  (nothing printed)

// ----- 10. Count the digits -----

// Using digitN = Math.floor(digitN / 10) in a while loop, count the digits. Log the count. (Pure math.)

let digitN = 7384;
let digitCount = 0;
while (digitN > 0) {
  digitN = Math.floor(digitN / 10);
  digitCount += 1;
}

console.log(digitCount);

// your code here

// TEST 1:  digitN = 7384  ->  4

// TEST 2:  digitN = 50    ->  2

// TEST 3:  digitN = 9     ->  1

// ----- 11. Sum of digits -----

// Add last digit (sumDigitN % 10) to a total, then sumDigitN = Math.floor(sumDigitN / 10). While > 0. Log total.

let sumDigitN = 1234;
let sumDigitNTotal = 0;
while (sumDigitN > 0) {
  sumDigitNTotal += sumDigitN % 10;
  sumDigitN = Math.floor(sumDigitN / 10);
}
console.log(sumDigitNTotal);

// your code here

// TEST 1:  sumDigitN = 1234  ->  10

// TEST 2:  sumDigitN = 999   ->  27

// TEST 3:  sumDigitN = 5     ->  5

// ----- 12. Guess limiter -----

// While guessNum !== secretNum, log "Trying " + guessNum, then guessNum++.

// After the loop log "Found it: " + secretNum.

let secretNum = 2;

let guessNum = 1;
while (guessNum !== secretNum) {
  console.log("Trying " + guessNum);
  guessNum++;
}
console.log("Found it:" + secretNum);

// your code here

// TEST 1:  secretNum = 4, guessNum = 1  ->  Trying 1 / Trying 2 / Trying 3, then  Found it: 4

// TEST 2:  secretNum = 2, guessNum = 1  ->  Trying 1, then  Found it: 2

// TEST 3:  secretNum = 1, guessNum = 1  ->  (no Trying), then  Found it: 1

/* ============================================================

   PART C — LOOPING OVER STRINGS

   ============================================================ */

// ----- 13. Spell it out -----

// Loop with spellWord[i] and log one letter per line.

let spellWord = "hello";
for (let i = 0; i <= spellWord.length; i++) {
  console.log(spellWord[i]);
}

// your code here

// TEST 1:  spellWord = "hello"  ->  h e l l o

// TEST 2:  spellWord = "hi"     ->  h i

// TEST 3:  spellWord = "a"      ->  a

// ----- 14. Count a letter -----

// Count how many times "a" appears in letterWord (if letterWord[i] === "a"). Log the count.

let letterWord = "aaa";
letterWordI = 0;
for (let i = 0; i <= letterWord.length; i++) {
  if (letterWord[i] === "a") letterWordI++;
  console.log(letterWordI);
}

// your code here

// TEST 1:  letterWord = "banana"  ->  3

// TEST 2:  letterWord = "aaa"     ->  3

// TEST 3:  letterWord = "dog"     ->  0

// ----- 15. Count the vowels -----

// For each char, if "aeiou".includes(vowelText[i]) add to a counter. Log the count.

let vowelText = "javascrpt";
let Vowels = "aeiou";
let vowelcount = 0;
for (i = 0; i <= vowelText.length; i++) {
  if (Vowels.includes(vowelText[i])) vowelcount++;
  console.log(vowelcount);
}

// your code here

// TEST 1:  vowelText = "javascript"  ->  3

// TEST 2:  vowelText = "aeiou"       ->  5

// TEST 3:  vowelText = "xyz"         ->  0

// ----- 16. Reverse a string -----

// reversedText = "". Loop and build backwards: reversedText = reverseWord[i] + reversedText. Log it.

let reverseWord = "book";
let reversedText = "";
for (let i = 0; i < reverseWord.length; i++) {
  reversedText = reverseWord[i] + reversedText;
}
console.log(reversedText);

// your code here

// TEST 1:  reverseWord = "code"  ->  edoc

// TEST 2:  reverseWord = "abc"   ->  cba

// TEST 3:  reverseWord = "x"     ->  x

// ----- 17. Count the words -----

// wordCount = 1. Each space (wordSentence[i] === " ") -> wordCount++. Log the count.

let wordSentence = "the cat sat down helloo world";
let wordCount = 1;
for (let i = 0; i < wordSentence.length; i++) {
  if (wordSentence[i] === " ") {
    wordCount++;
  }
}
console.log(wordCount);

// your code here

// TEST 1:  wordSentence = "the cat sat down"  ->  4

// TEST 2:  wordSentence = "hello world"       ->  2

// TEST 3:  wordSentence = "one"               ->  1

/* ============================================================

   PART D — COMBINE IT

   ============================================================ */

// ----- 18. Find first digit(цифр)) in text -----

// Loop digitText chars. When !isNaN(Number(digitText[i])) -> log "First digit: " + char and break.

// If none found, log "No digits".

let digitText = "abfujg9de";
let found = false;

for (let i = 0; i < digitText.length; i++) {
  if (!isNaN(Number(digitText[i]))) {
    console.log("First digit: " + digitText[i]);
    found = true;
    break;
  }
}
if (found === false) {
  console.log("No digits");
}
// your code here

// TEST 1:  digitText = "abc4def"  ->  First digit: 4

// TEST 2:  digitText = "a9b2"     ->  First digit: 9

// TEST 3:  digitText = "abc"      ->  No digits

// ----- 19. Is it prime? -----

// Loop i from 2 to primeN-1. If primeN % i === 0 -> not prime, break. Log "Prime"/"Not prime".

let primeN = 13;
let count2 = 0;
for (let j = 2; j <= primeN - 1; j += 1) {
  if (primeN % j === 0) {
    console.log("not prime");
    break;
  } else {
    count2++;
  }
}
if (count2 === primeN - 2) {
  console.log("Prime");
}

// your code here

// TEST 1:  primeN = 13  ->  Prime

// TEST 2:  primeN = 15  ->  Not prime

// TEST 3:  primeN = 2   ->  Prime

// ----- 20. Multiplication grid (nested) -----

// Loop row 1..gridRows, inside it loop col 1..gridCols. Log row + " x " + col + " = " + (row * col).

let gridRows = 2;

let gridCols = 2;
for (let i = 1; i <= gridRows; i += 1) {
  for (let a = 1; a <= gridCols; a += 1) {
    console.log(i + " x " + a + " = " + i * a);
  }
}

// your code here

// TEST 1:  gridRows = 3, gridCols = 3  ->  9 lines, last is  3 x 3 = 9

// TEST 2:  gridRows = 2, gridCols = 2  ->  4 lines, last is  2 x 2 = 4

// TEST 3:  gridRows = 1, gridCols = 3  ->  1 x 1 = 1 / 1 x 2 = 2 / 1 x 3 = 3

/* ============================================================

   PART F — EXTRA PRACTICE  (not LeetCode — plain loop drills)

   ============================================================ */

// ----- 21. Sum of squares -----

// Add up 1² + 2² + ... + sqSumMax² (i * i each turn). Log the total.

let sqSumMax = 5;
let sumTo = 0;
for (i = 1; i <= sqSumMax; i++) {
  sumTo = sumTo + i * i;
}
console.log(sumTo);

// your code here

// TEST 1:  sqSumMax = 3  ->  14    (1 + 4 + 9) => 1 *1 =1 + 2*2 =4 + 3*3 = 9

// TEST 2:  sqSumMax = 1  ->  1

// TEST 3:  sqSumMax = 5  ->  55    (1 + 4 + 9 + 16 + 25)

// ----- 22. Sum of odd numbers -----

// Add every ODD number from 1 to oddSumMax. Log the total.

let oddSumMax = 10;
let oddTotal = 0;
for (let i = 1; i <= oddSumMax; i++) {
  if (i % 2 != 0) {
    oddTotal += i;
  }
}
console.log(oddTotal);
// your code here

// TEST 1:  oddSumMax = 10  ->  25   (1 + 3 + 5 + 7 + 9)

// TEST 2:  oddSumMax = 5   ->  9    (1 + 3 + 5)

// TEST 3:  oddSumMax = 1   ->  1

// ----- 23. First five multiples -----

// Log the first 5 multiples of multBase, one per line (multBase x 1 .. x 5).

let multBase = 10;
let multNum = 5;
let multTotal = 0;
for (let i = 1; i <= multNum; i++) {
  multTotal = multBase * i;
  console.log(multTotal);
}

// your code here

// TEST 1:  multBase = 3   ->  3 6 9 12 15

// TEST 2:  multBase = 10  ->  10 20 30 40 50

// TEST 3:  multBase = 1   ->  1 2 3 4 5

// ----- 24. Count uppercase letters -----

// Count how many UPPERCASE letters are in upWord. Log the count.

// Hint: a letter is uppercase when upWord[i] === upWord[i].toUpperCase() (and it is a letter).

let upWord = "hellooo";
let upWordCount = 0;
for (let i = 0; i < upWord.length; i++) {
  if (upWord[i] === upWord[i].toUpperCase()) {
    upWordCount++;
  }
}
console.log(upWordCount);

// your code here

// TEST 1:  upWord = "HeLLo"  ->  3   (H, L, L)

// TEST 2:  upWord = "abc"    ->  0

// TEST 3:  upWord = "ABC"    ->  3

// ----- 25. Repeat a string -----

// Build a new string that is repWord repeated repTimes times. Log it.

// Hint: result = ""; loop repTimes -> result = result + repWord.

let repWord = "hello";
let repTimes = 2;
resultP = "";
for (let i = 1; i < repWord.length; i++) {
  resultP = resultP + repWord;
}
console.log(resultP);
// your code here

// TEST 1:  repWord = "ab", repTimes = 3  ->  ababab

// TEST 2:  repWord = "x",  repTimes = 5  ->  xxxxx

// TEST 3:  repWord = "hi", repTimes = 1  ->  hi

// ----- 26. Replace spaces with dashes -----

// Build a new string from dashSentence where every space becomes "-". Log it.

// Hint: result = ""; if char is " " add "-", else add the char.

let dashSentence = "a b c";

// your code here

// TEST 1:  dashSentence = "a b c"        ->  a-b-c

// TEST 2:  dashSentence = "hello world"  ->  hello-world

// TEST 3:  dashSentence = "one"          ->  one

// ----- 27. Count consonants -----

// Count the letters in conText that are NOT vowels (not in "aeiou"). Log the count.

let conText = "hello";

// your code here

// TEST 1:  conText = "hello"  ->  3   (h, l, l)

// TEST 2:  conText = "aeiou"  ->  0

// TEST 3:  conText = "xyz"    ->  3

// ----- 28. Average of 1 to max -----

// Add 1..avgMax, then divide by avgMax to get the average. Log the average.

let avgMax = 10;

// your code here

// TEST 1:  avgMax = 10  ->  5.5

// TEST 2:  avgMax = 5   ->  3

// TEST 3:  avgMax = 1   ->  1

// ----- 29. Count even digits -----

// Count how many digits of evenDigCountN are even. Log the count.

// Hint: peel digits with % 10 and Math.floor(/10); a digit d is even when d % 2 === 0.

let evenDigCountN = 2468;

// your code here

// TEST 1:  evenDigCountN = 2468  ->  4

// TEST 2:  evenDigCountN = 1357  ->  0

// TEST 3:  evenDigCountN = 1234  ->  2   (2 and 4)

// ----- 30. Number triangle (nested) -----

// For each row r from 1 to numTriRows, build the string "1 2 ... r" with no spaces

// (just the digits joined) and log one line per row.

let numTriRows = 3;

// your code here

// TEST 1:  numTriRows = 3  ->  1 / 12 / 123

// TEST 2:  numTriRows = 1  ->  1

// TEST 3:  numTriRows = 4  ->  1 / 12 / 123 / 1234

/* ============================================================

   PART E — LEETCODE-STYLE (EASY)  (same tools only: loops, if,

   % , Math.floor, strings — NO arrays, NO functions)

   Gentle versions: peel digits, simple divide-down checks, and

   short string walks. No sign handling, no base-26, no DP.

   ============================================================ */

// ----- E1. Sum of Digits -----

// Given a non-negative integer sumDigN, add up its digits ONCE and log the total.

// Hint: while sumDigN > 0 -> add (sumDigN % 10) to a total, then sumDigN = Math.floor(sumDigN / 10).

let sumDigN = 234;

// your code here

// EXAMPLE 1:  Input: sumDigN = 234   Output: 9

//   Explanation: 2 + 3 + 4 = 9.

// EXAMPLE 2:  Input: sumDigN = 99    Output: 18

//   Explanation: 9 + 9 = 18.

// EXAMPLE 3:  Input: sumDigN = 7     Output: 7

//   Explanation: a single digit is its own sum.

// ----- E2. Count the Digits -----

// Given a non-negative integer countDigN, log how many digits it has.

// Hint: while countDigN > 0 -> count++ and countDigN = Math.floor(countDigN / 10).

let countDigN = 7384;

// your code here

// EXAMPLE 1:  Input: countDigN = 7384   Output: 4

//   Explanation: the digits are 7, 3, 8, 4 — four of them.

// EXAMPLE 2:  Input: countDigN = 50     Output: 2

//   Explanation: the digits are 5 and 0.

// EXAMPLE 3:  Input: countDigN = 9      Output: 1

//   Explanation: one digit.

// ----- E3. Subtract Product and Sum of Digits  (LeetCode 1281) -----

// Compute (product of digits) - (sum of digits) for prodSumN and log it.

// Hint: product starts at 1, sum starts at 0; peel digits with % 10 and Math.floor(/10).

let prodSumN = 234;

// your code here

// EXAMPLE 1:  Input: prodSumN = 234    Output: 15

//   Explanation: product 2×3×4 = 24, sum 2+3+4 = 9, 24 - 9 = 15.

// EXAMPLE 2:  Input: prodSumN = 4421   Output: 21

//   Explanation: product 4×4×2×1 = 32, sum 4+4+2+1 = 11, 32 - 11 = 21.

// EXAMPLE 3:  Input: prodSumN = 9      Output: 0

//   Explanation: product 9, sum 9, 9 - 9 = 0.

// ----- E4. Reverse a Number (positive only) -----

// Given a positive integer revPosN, log its digits reversed (no sign to worry about).

// Hint: revResult = 0; while revPosN > 0 -> revResult = revResult * 10 + (revPosN % 10),

// then revPosN = Math.floor(revPosN / 10).

let revPosN = 123;

// your code here

// EXAMPLE 1:  Input: revPosN = 123   Output: 321

//   Explanation: digits 1-2-3 reversed are 3-2-1.

// EXAMPLE 2:  Input: revPosN = 120   Output: 21

//   Explanation: 120 reversed is 021; the leading zero drops, leaving 21.

// EXAMPLE 3:  Input: revPosN = 5     Output: 5

//   Explanation: one digit reversed is itself.

// ----- E5. Largest Digit -----

// Given a non-negative integer maxDigN, log its biggest single digit.

// Hint: biggest = 0; peel each digit with % 10; if a digit is bigger, update biggest.

let maxDigN = 49072;

// your code here

// EXAMPLE 1:  Input: maxDigN = 49072   Output: 9

//   Explanation: the digits are 4,9,0,7,2 — the largest is 9.

// EXAMPLE 2:  Input: maxDigN = 1111    Output: 1

//   Explanation: every digit is 1.

// EXAMPLE 3:  Input: maxDigN = 5       Output: 5

//   Explanation: the only digit is 5.

// ----- E6. Power of Two  (LeetCode 231) -----

// Given a positive integer powTwoN, log true if it is a power of 2 (1,2,4,8,...), else false.

// Hint: while powTwoN % 2 === 0 -> powTwoN = powTwoN / 2; it is a power of 2 if it ends at exactly 1.

let powTwoN = 16;

// your code here

// EXAMPLE 1:  Input: powTwoN = 16   Output: true

//   Explanation: 16 = 2×2×2×2 = 2⁴.

// EXAMPLE 2:  Input: powTwoN = 1    Output: true

//   Explanation: 2⁰ = 1.

// EXAMPLE 3:  Input: powTwoN = 6    Output: false

//   Explanation: 6 = 2×3; the factor 3 means it is not a power of 2.

// ----- E7. Number of 1 Bits  (LeetCode 191) -----

// Given a non-negative integer oneBitsN, log how many 1s are in its binary form.

// Hint: while oneBitsN > 0 -> add (oneBitsN % 2) to a count, then Math.floor(/2).

let oneBitsN = 11;

// your code here

// EXAMPLE 1:  Input: oneBitsN = 11   Output: 3

//   Explanation: 11 in binary is 1011, which has three 1s.

// EXAMPLE 2:  Input: oneBitsN = 8    Output: 1

//   Explanation: 8 in binary is 1000, which has one 1.

// EXAMPLE 3:  Input: oneBitsN = 7    Output: 3

//   Explanation: 7 in binary is 111, which has three 1s.

// ----- E8. Sqrt(x) — integer part  (LeetCode 69) -----

// Given a non-negative integer rootFloorN, log the integer part of its square root.

// Hint: loop i = 1 upward while i * i <= rootFloorN; the answer is the last i that fit.

let rootFloorN = 8;

// your code here

// EXAMPLE 1:  Input: rootFloorN = 8    Output: 2

//   Explanation: 2×2=4 ≤ 8 but 3×3=9 > 8, so the floor is 2.

// EXAMPLE 2:  Input: rootFloorN = 16   Output: 4

//   Explanation: 4×4 = 16 exactly.

// EXAMPLE 3:  Input: rootFloorN = 1    Output: 1

//   Explanation: 1×1 = 1.

// ----- E9. Valid Perfect Square  (LeetCode 367) -----

// Given a positive integer perfSqN, log true if it is a perfect square, else false.

// Hint: loop i = 1 upward; if i * i === perfSqN -> true; if i * i > perfSqN -> false, stop.

let perfSqN = 16;

// your code here

// EXAMPLE 1:  Input: perfSqN = 16   Output: true

//   Explanation: 4×4 = 16.

// EXAMPLE 2:  Input: perfSqN = 14   Output: false

//   Explanation: 3×3=9 and 4×4=16; nothing squared equals 14.

// EXAMPLE 3:  Input: perfSqN = 1    Output: true

//   Explanation: 1×1 = 1.

// ----- E10. Ugly Number  (LeetCode 263) -----

// An ugly number is positive and its only prime factors are 2, 3, and 5.

// Given uglyN, log true if ugly, else false.

// Hint: while divisible by 2 -> /2, then by 3, then by 5; ugly if you end at exactly 1.

let uglyN = 6;

// your code here

// EXAMPLE 1:  Input: uglyN = 6    Output: true

//   Explanation: 6 = 2 × 3; only the factors 2 and 3.

// EXAMPLE 2:  Input: uglyN = 14   Output: false

//   Explanation: 14 = 2 × 7; the factor 7 is not allowed.

// EXAMPLE 3:  Input: uglyN = 1    Output: true

//   Explanation: 1 has no prime factors, which counts as ugly.

// ----- E11. Steps to Reduce a Number to Zero  (LeetCode 1342) -----

// While stepsN > 0: if even -> stepsN = stepsN / 2, else -> stepsN -= 1. Count steps to reach 0.

let stepsN = 14;

// your code here

// EXAMPLE 1:  Input: stepsN = 14    Output: 6

//   Explanation: 14->7->6->3->2->1->0 = 6 steps.

// EXAMPLE 2:  Input: stepsN = 8     Output: 4

//   Explanation: 8->4->2->1->0 = 4 steps.

// EXAMPLE 3:  Input: stepsN = 123   Output: 12

//   Explanation: it takes 12 even-halve / odd-subtract steps to reach 0.

// ----- E12. Fizz Buzz  (LeetCode 412) -----

// Loop 1..fizzN. Multiple of 3 -> "Fizz", of 5 -> "Buzz", both -> "FizzBuzz", else the number.

let fizzN = 5;

// your code here

// EXAMPLE 1:  Input: fizzN = 5    Output: 1 2 Fizz 4 Buzz

//   Explanation: 3 -> Fizz, 5 -> Buzz, the rest are themselves.

// EXAMPLE 2:  Input: fizzN = 3    Output: 1 2 Fizz

//   Explanation: only 3 is a multiple of 3.

// EXAMPLE 3:  Input: fizzN = 15   Output: ... 14 FizzBuzz

//   Explanation: 15 is a multiple of both 3 and 5, so "FizzBuzz".

// ----- E13. Self Dividing Number  (LeetCode 728 lite) -----

// A self-dividing number has NO zero digit and every digit divides the number evenly.

// Given selfDivN, log true if self-dividing, else false.

// Hint: peel each digit d; if d === 0 -> false; if selfDivN % d !== 0 -> false.

let selfDivN = 128;

// your code here

// EXAMPLE 1:  Input: selfDivN = 128   Output: true

//   Explanation: 128 % 1 = 0, 128 % 2 = 0, 128 % 8 = 0 — all divide evenly.

// EXAMPLE 2:  Input: selfDivN = 10    Output: false

//   Explanation: it contains a 0 digit, so it cannot be self-dividing.

// EXAMPLE 3:  Input: selfDivN = 12    Output: true

//   Explanation: 12 % 1 = 0 and 12 % 2 = 0.

// ----- E14. Count Vowels in a String -----

// Given a lowercase string vowelStr, log how many vowels (a, e, i, o, u) it has.

// Hint: for each char, if "aeiou".includes(vowelStr[i]) -> count++.

let vowelStr = "hello";

// your code here

// EXAMPLE 1:  Input: vowelStr = "hello"        Output: 2

//   Explanation: the vowels are e and o.

// EXAMPLE 2:  Input: vowelStr = "javascript"   Output: 3

//   Explanation: the vowels are a, a, i.

// EXAMPLE 3:  Input: vowelStr = "xyz"          Output: 0

//   Explanation: no vowels.

// ----- E15. Palindrome Number  (LeetCode 9) -----

// Given a non-negative integer palN, log true if it reads the same forwards and backwards.

// Hint: reverse it (revResult = revResult * 10 + palN % 10 while peeling), then compare to the original.

let palN = 121;

// your code here

// EXAMPLE 1:  Input: palN = 121   Output: true

//   Explanation: 121 reversed is 121.

// EXAMPLE 2:  Input: palN = 123   Output: false

//   Explanation: 123 reversed is 321, which differs.

// EXAMPLE 3:  Input: palN = 7     Output: true

//   Explanation: a single digit reads the same both ways.

/* ============================================================

   CHALLENGE (optional) — Star triangle (nested loops)

   ============================================================ */

// ----- Star triangle -----

// Loop row 1..starRows. Build a line of "*" with an inner loop, then log the line.

let starRows = 5;

// your code here

// TEST 1:  starRows = 5  ->  *

//                            **

//                            ***

//                            ****

//                            *****

// TEST 2:  starRows = 3  ->  *

//                            **

//                            ***

// TEST 3:  starRows = 1  ->  *

/* ============================================================

   All 3 tests match for an exercise = you got it right.

   Any mismatch = a bug to hunt. Happy looping!

   ============================================================ */
