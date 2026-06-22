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
let repTimes = 3;
resultP = "";
for (let i = 0; i < repTimes; i++) {
  if (repTimes) resultP = resultP + repWord;
}
console.log(resultP);
// your code here

// TEST 1:  repWord = "ab", repTimes = 3  ->  ababab

// TEST 2:  repWord = "x",  repTimes = 5  ->  xxxxx

// TEST 3:  repWord = "hi", repTimes = 1  ->  hi

// ----- 26. Replace spaces with dashes -----

// Build a new string from dashSentence where every space becomes "-". Log it.

// Hint: result = ""; if char is " " add "-", else add the char.

let dashSentence = "hello world hello";
result = "";
for (let i = 0; i <= dashSentence.length; i++) {
  result = dashSentence.replaceAll(" ", "-");
}
console.log(result);

// your code here

// TEST 1:  dashSentence = "a b c"        ->  a-b-c

// TEST 2:  dashSentence = "hello world"  ->  hello-world

// TEST 3:  dashSentence = "one"          ->  one

// ----- 27. Count consonants -----

// Count the letters in conText that are NOT vowels (not in "aeiou"). Log the count.

let conText = "helloworld";
let vowelsT = "aeiou";
count = 0;

for (let i = 0; i < conText.length; i++) {
  if (conText[i] !== vowelsT) {
    count += 1;
  }
}
//   if (vowelsT.includes(conText[i]) === false) resultT++;
// }
console.log(count);
conText = "aeiou";
vowelsT = "aeiou";
count = 0;

for (let i = 0; i < conText.length; i++) {
  if (conText[i] !== vowelsT) {
    count += 1;
  }
}
//   if (vowelsT.includes(conText[i]) === false) resultT++;
// }
console.log(count);
// your code here

// TEST 1:  conText = "hello"  ->  3   (h, l, l)

// TEST 2:  conText = "aeiou"  ->  0

// TEST 3:  conText = "xyz"    ->  3

// ----- 28. Average of 1 to max -----

// Add 1..avgMax, then divide by avgMax to get the average. Log the average.

let avgMax = 10;
total = 0;
average = 0;
for (i = 0; i <= avgMax; i++) {
  total = total + i;
  average = total / avgMax;
}

console.log(average);
// your code here

// TEST 1:  avgMax = 10  ->  5.5

// TEST 2:  avgMax = 5   ->  3

// TEST 3:  avgMax = 1   ->  1

// ----- 29. Count even digits -----

// Count how many digits of evenDigCountN are even. Log the count.

// Hint: peel digits with % 10 and Math.floor(/10); a digit d is even when d % 2 === 0.

let evenDigCountN = 2468;
evenDigTotal = 0;
while (evenDigCountN > 0) {
  digit = evenDigCountN % 10;
  evenDigCountN = Math.floor(evenDigCountN / 10);
  if (digit % 2 === 0) {
    evenDigTotal++;
  }
}
console.log(evenDigTotal);

// your code here

// TEST 1:  evenDigCountN = 2468  ->  4

// TEST 2:  evenDigCountN = 1357  ->  0
evenDigCountN = 1357;
evenDigTotal = 0;
while (evenDigCountN > 0) {
  digit = evenDigCountN % 10;
  evenDigCountN = Math.floor(evenDigCountN / 10);
  if (digit % 2 === 0) {
    evenDigTotal++;
  }
}
console.log(evenDigTotal);

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

/* ============================================================
   LESSON 7 — FUNCTIONS: EXERCISES + TEST CASES  (EASY EDITION)
   ------------------------------------------------------------
   You already know variables, operators, if, loops, and strings.
   Now you wrap that work in a NAME you can reuse: a function.
   This file is the functions twin of lesson-6-loops-tests-easy.js.

   How to use:
   - Read the exercise, then write your function in the blank
     space under it (where you see  // your code here).
   - Each exercise tells you the EXACT function name to use and
     what it should RETURN. Write the function in the blank, then
     the test call is sitting right below it, COMMENTED OUT:
         // console.log(sayHi());
     When you finish that exercise, delete the leading "// " to
     turn the call back on, run the file, and check the output.
   - Leaving the rest commented means a blank exercise never
     crashes the file — only the lines you switch on actually run.
     So you can do the exercises in ANY order, one at a time.
   - Each exercise has 3 TEST CASES: an INPUT (the call) -> the
     EXACT value you should get back. Run the file
     (node lesson-7-functions-tests-easy.js) and compare.
   - All 3 match = exercise correct.

   Rules: NO arrays. Inside a function you MAY use everything from
   lesson 6 — variables, data types, operators (% && || !), if,
   loops, strings, String()/Number()/isNaN, Math.floor(x).

   THE ONE BIG RULE: a function gives back a value with `return`.
   `return` is NOT the same as console.log. console.log PRINTS to
   the screen; return HANDS THE VALUE BACK to whoever called the
   function. These exercises want you to RETURN, then we log it.

   NOTE: every exercise uses a DIFFERENT function name, so all your
   answers can live in this one file with no clashes.

   The two shapes:
     function add(a, b) { return a + b; }     // declaration
     const add = (a, b) => a + b;             // arrow (same thing)
   ============================================================ */

/* ============================================================
   PART A — DECLARE & CALL (no parameters yet)
   ============================================================ */

// ----- 1. Return a greeting -----
// Write a function `sayHi` that takes NO input and RETURNS the string "Hi!".
// your code here
function sayHi() {
  return "Hi";
}
console.log(sayHi());

// console.log(sayHi());
// TEST 1:  sayHi()  ->  "Hi!"
// TEST 2:  sayHi()  ->  "Hi!"   (a function returns the same thing every call)
// TEST 3:  typeof sayHi()  ->  "string"

// ----- 2. Return a number -----
// Write a function `luckyNumber` that takes NO input and RETURNS the number 7.
// your code here
function luckyNumber() {
  return 7;
}
console.log(luckyNumber(7));
console.log(luckyNumber(7) * 2);
console.log(luckyNumber(7) + 1);

// console.log(luckyNumber());
// TEST 1:  luckyNumber()      ->  7
// TEST 2:  luckyNumber() + 1  ->  8     (you get a real number back, so math works)
// TEST 3:  luckyNumber() * 2  ->  14

// ----- 3. return vs console.log -----
// Write a function `giveFive` that RETURNS 5 (do NOT console.log inside it).
// The point: returning lets the caller use the value. Logging only shows it.
// your code here
function giveFive() {
  return 5;
}
console.log(giveFive());
console.log(giveFive() + giveFive());
console.log(giveFive() > 3);

// console.log(giveFive() + giveFive());
// TEST 1:  giveFive()               ->  5
// TEST 2:  giveFive() + giveFive()  ->  10
// TEST 3:  giveFive() > 3           ->  true

/* ============================================================
   PART B — ONE PARAMETER (input -> output)
   ============================================================ */

// ----- 4. Double it -----
// Write `double(n)` that RETURNS n times 2.
// your code here
function double(n) {
  return n;
}
console.log(double(4) * 2);
console.log(double(0) * 2);
console.log(double(-3) * 2);

// console.log(double(4));
// TEST 1:  double(4)   ->  8
// TEST 2:  double(0)   ->  0
// TEST 3:  double(-3)  ->  -6

// ----- 5. Square it -----
// Write `square(n)` that RETURNS n times n.
// your code here
function square(n) {
  return n;
}
console.log(square(5) * 5);
console.log(square(0) * 0);
console.log(square(1) * 1);

// console.log(square(5));
// TEST 1:  square(5)  ->  25
// TEST 2:  square(1)  ->  1
// TEST 3:  square(0)  ->  0

// ----- 6. Is it even? -----
// Write `isEven(n)` that RETURNS true when n is even, false when odd.
// Hint: n % 2 === 0.
// your code here
function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(10));
console.log(isEven(7));
console.log(isEven(0));

// console.log(isEven(10));
// TEST 1:  isEven(10)  ->  true
// TEST 2:  isEven(7)   ->  false
// TEST 3:  isEven(0)   ->  true

// ----- 7. Absolute value -----
// Write `absValue(n)` that RETURNS n without its sign (negatives become positive).
// Hint: if n < 0 return -n; else return n.  (Do NOT use Math.abs — build it yourself.)
// your code here
function absValue(n) {
  if (n < 0) {
    return -n;
  } else {
    return n;
  }
}
console.log(absValue(-9));
console.log(absValue(9));
console.log(absValue(-7));

// console.log(absValue(-9));å
// TEST 1:  absValue(-9)  ->  9
// TEST 2:  absValue(9)   ->  9
// TEST 3:  absValue(0)   ->  0

// ----- 8. Last digit -----
// Write `lastDigit(n)` that RETURNS the last digit of a non-negative integer.
// Hint: n % 10.
// your code here
function lastDigit(n) {
  return n % 10;
}
console.log(lastDigit(7384));
console.log(lastDigit(50));
console.log(lastDigit(876));

// console.log(lastDigit(7384));
// TEST 1:  lastDigit(7384)  ->  4
// TEST 2:  lastDigit(50)    ->  0
// TEST 3:  lastDigit(9)     ->  9

/* ============================================================
   PART C — TWO+ PARAMETERS
   ============================================================ */

// ----- 9. Add two numbers -----
// Write `add(a, b)` that RETURNS a + b.
// your code here
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));
console.log(add(2, -2));
console.log(add(10, 100));

// console.log(add(3, 4));
// TEST 1:  add(3, 4)    ->  7
// TEST 2:  add(-2, 2)   ->  0
// TEST 3:  add(10, 100) ->  110

// ----- 10. Bigger of two -----
// Write `maxOf(a, b)` that RETURNS the larger of a and b (return a if equal).
// your code here
function maxOf(a, b) {
  if ((a > b, (a = b))) return a;
  if (a < b) return b;
}
console.log(maxOf(8, 3));
console.log(maxOf(2, 20));
console.log(maxOf(5, 5));

// console.log(maxOf(8, 3));
// TEST 1:  maxOf(8, 3)   ->  8
// TEST 2:  maxOf(2, 20)  ->  20
// TEST 3:  maxOf(5, 5)   ->  5

// ----- 11. Is a multiple? -----
// Write `isMultiple(n, factor)` that RETURNS true if n divides evenly by factor.
// Hint: n % factor === 0.
// your code here
function isMultiple(n, factor) {
  if (n % factor === 0) return true;
  else {
    return false;
  }
}
console.log(isMultiple(15, 3));
console.log(isMultiple(15, 4));
console.log(isMultiple(10, 5));

// console.log(isMultiple(15, 3));
// TEST 1:  isMultiple(15, 3)  ->  true
// TEST 2:  isMultiple(15, 4)  ->  false
// TEST 3:  isMultiple(10, 5)  ->  true

// ----- 12. Clamp a grade -----
// Write `passOrFail(score, passMark)` that RETURNS "Pass" if score >= passMark, else "Fail".
// your code here
function passOrFail(score, passMark) {
  if (score >= passMark) return "Pass";
  else {
    return "Fial";
  }
}
console.log(passOrFail(72, 60));
console.log(passOrFail(50, 60));
console.log(passOrFail(60, 60));

// console.log(passOrFail(72, 60));
// TEST 1:  passOrFail(72, 60)  ->  "Pass"
// TEST 2:  passOrFail(50, 60)  ->  "Fail"
// TEST 3:  passOrFail(60, 60)  ->  "Pass"

/* ============================================================
   PART D — DEFAULT VALUES & SMALL LOGIC
   ============================================================ */

// ----- 13. Greet by name (default) -----
// Write `greet(name = "friend")` that RETURNS "Hello, " + name + "!".
// If called with no argument it uses "friend".
// your code here
function greet(name = "friend") {
  return "Hello, " + name + "!";
}
console.log(greet("Sam"));
console.log(greet());
console.log(greet("A"));

// console.log(greet("Sam"));
// TEST 1:  greet("Sam")  ->  "Hello, Sam!"
// TEST 2:  greet()       ->  "Hello, friend!"
// TEST 3:  greet("A")    ->  "Hello, A!"

// ----- 14. Apply tax (default rate) -----
// Write `withTax(price, rate = 0.1)` that RETURNS price + price * rate.
// your code here
function withTax(price, rate = 0.1) {
  return price + price * rate;
}
console.log(withTax(100));
console.log(withTax(100, 0.2));
console.log(withTax(0));

// console.log(withTax(100));
// TEST 1:  withTax(100)       ->  110
// TEST 2:  withTax(100, 0.2)  ->  120
// TEST 3:  withTax(0)         ->  0

// ----- 15. Sign of a number -----
// Write `signOf(n)` that RETURNS "positive", "negative", or "zero".
// your code here
function signOf(n) {
  if (n < 0) return "negative";
  if (n > 0) return "positive";
  else {
    return "zero";
  }
}

console.log(signOf(-4));
console.log(signOf(4));
console.log(signOf(0));

// console.log(signOf(-4));
// TEST 1:  signOf(-4)  ->  "negative"
// TEST 2:  signOf(4)   ->  "positive"
// TEST 3:  signOf(0)   ->  "zero"

// ----- 16. Min of three -----
// Write `minOfThree(a, b, c)` that RETURNS the smallest of the three.
// your code here
function minOfThree(a, b, c) {
  if (a < b && a < c) {
    return a;
  }
  if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}
console.log(minOfThree(5, 2, 9));
console.log(minOfThree(7, 7, 7));
console.log(minOfThree(3, 1, 1));
// TEST 1:  minOfThree(5, 2, 9)  ->  2
// TEST 2:  minOfThree(7, 7, 7)  ->  7
// TEST 3:  minOfThree(3, 1, 1)  ->  1

/* ============================================================
   PART E0 — LOOP WARM-UPS  (build a loop, return one value)
   First taste of putting a loop INSIDE a function. The loop does
   the work; `return` hands back the finished result.
   ============================================================ */

// ----- L1. Count up to a string -----
// Write `countUp(n)` that RETURNS "1 2 3 ... n" — the numbers 1..n joined by single spaces.
// Hint:  = "result"; loop i = 1..n, add i (and a space) each turn; trim the trailing space at the end
//       OR add a space BEFORE every number except the first.
// your code here

function countUp(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i > 1) {
      result += " ";
    }
    result += i;
  }
  return result;
}
console.log(countUp(5));
console.log(countUp(2));
console.log(countUp(3));
// TEST 1:  countUp(5)  ->  "1 2 3 4 5"
// TEST 2:  countUp(1)  ->  "1"
// TEST 3:  countUp(3)  ->  "1 2 3"

// ----- L2. Count down with a while loop -----
// Write `countDown(n)` that RETURNS "n n-1 ... 1 Go!" using a WHILE loop (not for).
// Hint: let i = n; while (i >= 1) { ...; i--; } then add "Go!".
// your code here

function countDown(n) {
  let result = "";
  let i = n;

  while (i >= 1) {
    result += i + " ";
    i--;
  }
  return result + "Go!";
}
console.log(countDown(3));
console.log(countDown(1));
console.log(countDown(5));
// TEST 1:  countDown(3)  ->  "3 2 1 Go!"
// TEST 2:  countDown(1)  ->  "1 Go!"
// TEST 3:  countDown(5)  ->  "5 4 3 2 1 Go!"

// ----- L3. Sum a range -----
// Write `sumRange(a, b)` that RETURNS a + (a+1) + ... + b. Assume a <= b. Loop inside.
// your code here
function sumRange(a, b) {
  let result = 0;
  while (a <= b) {
    result += a;
    a++;
  }
  return result;
}
console.log(sumRange(3, 6));
console.log(sumRange(1, 5));
console.log(sumRange(4, 4));
// TEST 1:  sumRange(3, 6)   ->  18    (3 + 4 + 5 + 6)
// TEST 2:  sumRange(1, 5)   ->  15
// TEST 3:  sumRange(4, 4)   ->  4

// ----- L4. Repeat a string -----
// Write `repeatStr(word, times)` that RETURNS word stuck together `times` times. Loop inside.
// Hint: result = ""; loop `times` -> result = result + word.  (Do NOT use word.repeat — build it.)
// your code here
function repeatStr(word, times) {
  result = "";
  for (let i = 1; i <= times; i++) {
    result = result + word;
  }
  {
    return result;
  }
}
console.log(repeatStr("ab", 3));
console.log(repeatStr("x", 5));
console.log(repeatStr("hi", 2));
// TEST 1:  repeatStr("ab", 3)  ->  "ababab"
// TEST 2:  repeatStr("x", 5)   ->  "xxxxx"
// TEST 3:  repeatStr("hi", 1)  ->  "hi"

// ----- L5. Count multiples in a range -----
// Write `countMultiples(n, k)` that RETURNS how many numbers from 1..n divide evenly by k.
// Hint: loop 1..n, if (i % k === 0) count++.
// your code here
function countMultiples(n, k) {
  let count = 0;
  for (let i = 1; i <= n; i++)
    if (i % k === 0) {
      count++;
    }
  return count;
}
console.log(countMultiples(50, 3));
console.log(countMultiples(10, 5));
console.log(countMultiples(2, 3));
// TEST 1:  countMultiples(50, 3)  ->  16
// TEST 2:  countMultiples(10, 5)  ->  2
// TEST 3:  countMultiples(2, 3)   ->  0

/* ============================================================
   PART E — FUNCTIONS THAT LOOP INSIDE
   (the loop lives INSIDE the function; the function returns one value)
   ============================================================ */

// ----- 17. Sum 1 to n -----
// Write `sumTo(n)` that RETURNS 1 + 2 + ... + n. Use a loop inside.
// your code here
function sumTom(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) result += i;
  return result;
}
console.log(sumTom(100));
console.log(sumTom(10));
console.log(sumTom(5));
// TEST 1:  sumTo(100)  ->  5050
// TEST 2:  sumTo(10)   ->  55
// TEST 3:  sumTo(1)    ->  1

// ----- 18. Factorial -----
// Write `factorial(n)` that RETURNS 1 * 2 * ... * n (factorial(0) is 1).
// your code here
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) result = result * i;
  return result;
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));
// TEST 1:  factorial(5)  ->  120
// TEST 2:  factorial(3)  ->  6
// TEST 3:  factorial(0)  ->  1

// ----- 19. Count vowels -----
// Write `countVowels(word)` that RETURNS how many vowels (a,e,i,o,u) are in a lowercase word.
// Hint: loop the chars; "aeiou".includes(word[i]).
// your code here
function countVowels(word) {
  Vowels = "aeiou";
  totalCountVowels = 0;
  for (i = 0; i <= word.length; i++)
    if (Vowels.includes(word[i])) {
      totalCountVowels++;
    }
  return totalCountVowels;
}
console.log(countVowels("javascript"));
console.log(countVowels("aeiou"));
console.log(countVowels("xyz"));
// TEST 1:  countVowels("javascript")  ->  3
// TEST 2:  countVowels("aeiou")       ->  5
// TEST 3:  countVowels("xyz")         ->  0

// ----- 20. Reverse a string -----
// Write `reverse(word)` that RETURNS the word backwards.
// Hint: result = ""; loop and do result = word[i] + result.
// your code here
function reverse(word) {
  let result = "";
  for (i = 0; i <= word.length; i++) result = word[i] + result;
  return result;
}
console.log(reverse("code"));
console.log(reverse("abc"));
console.log(reverse("aas"));
// TEST 1:  reverse("code")  ->  "edoc"
// TEST 2:  reverse("abc")   ->  "cba"
// TEST 3:  reverse("x")     ->  "x"

/* ============================================================
   PART F — COMPOSE: CALL ONE FUNCTION FROM ANOTHER
   (a function can call a function you already wrote above)
   ============================================================ */

// ----- 21. Quadruple (reuse double) -----
// Write `quadruple(n)` that RETURNS n times 4 BY CALLING `double` twice.
// Hint: return double(double(n)).
// your code here
function double(n) {
  return n * 2;
}
function quadruple(n) {
  return double(double(n));
}
console.log(quadruple(3));
console.log(quadruple(5));
// TEST 1:  quadruple(3)  ->  12
// TEST 2:  quadruple(0)  ->  0
// TEST 3:  quadruple(5)  ->  20

// ----- 22. Sum of squares (reuse square) -----
// Write `sumOfSquares(n)` that RETURNS square(1) + square(2) + ... + square(n).
// Call your `square` from exercise 5 inside the loop.
// your code here

// console.log(sumOfSquares(3));
// TEST 1:  sumOfSquares(3)  ->  14    (1 + 4 + 9)
// TEST 2:  sumOfSquares(1)  ->  1
// TEST 3:  sumOfSquares(5)  ->  55    (1 + 4 + 9 + 16 + 25)

// ----- 23. Both even? (reuse isEven) -----
// Write `bothEven(a, b)` that RETURNS true only if a AND b are both even.
// Call your `isEven` from exercise 6.
// your code here

// console.log(bothEven(4, 8));
// TEST 1:  bothEven(4, 8)  ->  true
// TEST 2:  bothEven(4, 7)  ->  false
// TEST 3:  bothEven(3, 9)  ->  false

/* ============================================================
   PART G — LEETCODE-STYLE (EASY)  (return the answer; no arrays)
   Same tools: loops, if, %, Math.floor, strings — wrapped in a
   function that RETURNS the result instead of logging it.
   ============================================================ */

// ----- E1. Sum of Digits -----
// Write `sumDigits(n)` that RETURNS the sum of the digits of a non-negative integer.
// Hint: while n > 0 -> add (n % 10) to a total, then n = Math.floor(n / 10).
// your code here

// console.log(sumDigits(4825));
// EXAMPLE 1:  sumDigits(4825)  ->  19     (4 + 8 + 2 + 5)
// EXAMPLE 2:  sumDigits(60)    ->  6      (6 + 0)
// EXAMPLE 3:  sumDigits(7)     ->  7

// ----- E2. Power  (two inputs — build it with a loop)  (LeetCode 50 lite) -----
// Write `power(base, exp)` that RETURNS base raised to exp, for exp >= 0.
// Hint: result = 1; loop `exp` times -> result = result * base.  (Do NOT use ** or Math.pow.)
// Note: power(anything, 0) is 1.
// your code here

// console.log(power(2, 5));
// EXAMPLE 1:  power(2, 5)  ->  32    (2×2×2×2×2)
// EXAMPLE 2:  power(5, 0)  ->  1     (anything to the 0 is 1)
// EXAMPLE 3:  power(3, 3)  ->  27

// ----- E3. Digit Spread (biggest digit minus smallest digit) -----
// Write `digitSpread(n)` -> the largest digit MINUS the smallest digit of a
// non-negative integer. Peel digits with % 10 and Math.floor(/10) while
// tracking BOTH a running max and a running min.
// Hint: start hi = 0, lo = 9; for each digit d -> if (d > hi) hi = d; if (d < lo) lo = d.
// your code here

// console.log(digitSpread(364));
// EXAMPLE 1:  digitSpread(364)  ->  3    (max 6, min 3)
// EXAMPLE 2:  digitSpread(70)   ->  7    (max 7, min 0)
// EXAMPLE 3:  digitSpread(5)    ->  0    (one digit: max == min)

// ----- E4. Reverse a Number (positive only) -----
// Write `reverseNumber(n)` that RETURNS a positive integer's digits reversed.
// Hint: result = 0; while n > 0 -> result = result * 10 + (n % 10), n = Math.floor(n/10).
// your code here

// console.log(reverseNumber(4071));
// EXAMPLE 1:  reverseNumber(4071)  ->  1704
// EXAMPLE 2:  reverseNumber(90)    ->  9     (09, leading zero drops)
// EXAMPLE 3:  reverseNumber(6)     ->  6

// ----- E5. Power of Any Base  (two inputs — generalises Power of Two) -----
// Write `isPowerOf(n, base)` -> true if positive n is base^0, base^1, base^2, ...
// (so 1, base, base*base, ...), else false. base is >= 2.
// Hint: while n % base === 0 -> n = n / base; it is a power of base if you end at exactly 1.
// your code here

// console.log(isPowerOf(27, 3));
// EXAMPLE 1:  isPowerOf(27, 3)  ->  true    (3×3×3)
// EXAMPLE 2:  isPowerOf(1, 5)   ->  true    (base^0 = 1)
// EXAMPLE 3:  isPowerOf(12, 2)  ->  false   (12 = 2×2×3, the 3 ruins it)

// ----- E6. Decimal to Binary string -----
// Write `toBinary(n)` -> the binary form of a positive integer, AS A STRING.
// Same peeling as bit-counting, but instead of counting the 1s you PREPEND each bit.
// Hint: result = ""; while n > 0 -> result = (n % 2) + result, then n = Math.floor(n / 2).
// your code here

// console.log(toBinary(11));
// EXAMPLE 1:  toBinary(11)  ->  "1011"
// EXAMPLE 2:  toBinary(8)   ->  "1000"
// EXAMPLE 3:  toBinary(1)   ->  "1"

// ----- E7. Sqrt(x) — integer part  (LeetCode 69) -----
// Write `mySqrt(n)` -> the integer part of the square root of a non-negative integer.
// Hint: loop i = 1 upward while i * i <= n; the answer is the last i that fit.
// your code here

// console.log(mySqrt(26));
// EXAMPLE 1:  mySqrt(26)  ->  5    (5²=25 ≤ 26, 6²=36 > 26)
// EXAMPLE 2:  mySqrt(49)  ->  7
// EXAMPLE 3:  mySqrt(2)   ->  1    (1²=1 ≤ 2, 2²=4 > 2)

// ----- E8. Valid Perfect Square  (LeetCode 367) -----
// Write `isPerfectSquare(n)` -> true if a positive integer is a perfect square, else false.
// Hint: loop i = 1 upward; if i*i === n -> true; if i*i > n -> false, stop.
// your code here

// console.log(isPerfectSquare(81));
// EXAMPLE 1:  isPerfectSquare(81)   ->  true   (9×9)
// EXAMPLE 2:  isPerfectSquare(50)   ->  false
// EXAMPLE 3:  isPerfectSquare(100)  ->  true   (10×10)

// ----- E9. Count Divisors -----
// Write `countDivisors(n)` -> how many positive whole numbers divide n evenly
// (counting both 1 and n itself), for n >= 1.
// Hint: count = 0; loop i = 1..n; if (n % i === 0) count++.
// your code here

// console.log(countDivisors(12));
// EXAMPLE 1:  countDivisors(12)  ->  6    (1, 2, 3, 4, 6, 12)
// EXAMPLE 2:  countDivisors(7)   ->  2    (1, 7 — a prime has exactly 2)
// EXAMPLE 3:  countDivisors(1)   ->  1    (just 1)

// ----- E10. Collatz Steps  (the famous 3n+1 problem) -----
// Write `collatzSteps(n)` -> how many steps a positive integer takes to reach 1.
// Each step: even -> n / 2, odd -> 3 * n + 1. Count steps until n is exactly 1.
// your code here

// console.log(collatzSteps(6));
// EXAMPLE 1:  collatzSteps(6)  ->  8    (6→3→10→5→16→8→4→2→1)
// EXAMPLE 2:  collatzSteps(1)  ->  0    (already 1, no steps)
// EXAMPLE 3:  collatzSteps(7)  ->  16

// ----- E11. Fizz Buzz (return one string)  (LeetCode 412 lite) -----
// Write `fizzAt(i)` that RETURNS, for a single number i:
//   "FizzBuzz" if divisible by 3 and 5, "Fizz" if by 3, "Buzz" if by 5, else String(i).
// your code here

// console.log(fizzAt(15));
// EXAMPLE 1:  fizzAt(15)  ->  "FizzBuzz"
// EXAMPLE 2:  fizzAt(9)   ->  "Fizz"
// EXAMPLE 3:  fizzAt(7)   ->  "7"

// ----- E12. Harshad Number  (REUSE your own sumDigits from E1) -----
// A Harshad number is divisible by the SUM of its own digits.
// Write `isHarshad(n)` and CALL sumDigits(n) from E1 — do NOT re-sum the digits here.
// Hint: return n % sumDigits(n) === 0;
// your code here

// console.log(isHarshad(18));
// EXAMPLE 1:  isHarshad(18)  ->  true    (1+8=9, and 18 % 9 === 0)
// EXAMPLE 2:  isHarshad(11)  ->  false   (1+1=2, and 11 % 2 !== 0)
// EXAMPLE 3:  isHarshad(21)  ->  true    (2+1=3, and 21 % 3 === 0)

// ----- E13. Palindrome Number  (REUSE your own reverseNumber from E4)  (LeetCode 9) -----
// Write `isPalindrome(n)` -> true if a non-negative integer reads the same both ways.
// Do NOT re-derive the reverse here — CALL reverseNumber(n) from E4 and compare to n.
// Hint: return reverseNumber(n) === n;
// your code here

// console.log(isPalindrome(1331));
// EXAMPLE 1:  isPalindrome(1331)  ->  true
// EXAMPLE 2:  isPalindrome(1234)  ->  false
// EXAMPLE 3:  isPalindrome(8)     ->  true

// ----- E14. Greatest Common Divisor  (two inputs — a function's home turf) -----
// Write `gcd(a, b)` -> the biggest number that divides BOTH a and b evenly.
// Hint (easy way): loop i from 1 up to the smaller of a and b; whenever i divides
//   both a and b, remember it; the LAST such i is the answer.
// your code here

// console.log(gcd(12, 8));
// EXAMPLE 1:  gcd(12, 8)   ->  4    (1,2,4 divide both; 4 is biggest)
// EXAMPLE 2:  gcd(7, 5)    ->  1    (only 1 divides both)
// EXAMPLE 3:  gcd(9, 9)    ->  9

// ----- E15. Digital Root  (REUSE your own sumDigits from E1) -----
// Keep summing the digits until only ONE digit is left, then RETURN it.
// Write `digitalRoot(n)` and CALL `sumDigits(n)` (from E1) inside a loop.
// Hint: while n has more than one digit (n >= 10) -> n = sumDigits(n); return n.
// your code here

// console.log(digitalRoot(942));
// EXAMPLE 1:  digitalRoot(942)  ->  6    (9+4+2=15, then 1+5=6)
// EXAMPLE 2:  digitalRoot(38)   ->  2    (3+8=11, then 1+1=2)
// EXAMPLE 3:  digitalRoot(5)    ->  5    (already one digit)

/* ============================================================
   CHALLENGE (optional) — recursion preview
   ============================================================ */

// ----- Countdown string -----
// Write `countdown(n)` that RETURNS "n n-1 ... 1 Go!" as one string with single spaces.
// You may use a loop OR call countdown(n-1) inside itself (recursion). Either is fine.
// your code here

// console.log(countdown(3));
// TEST 1:  countdown(3)  ->  "3 2 1 Go!"
// TEST 2:  countdown(1)  ->  "1 Go!"
// TEST 3:  countdown(5)  ->  "5 4 3 2 1 Go!"

/* ============================================================
   All 3 tests match for an exercise = you got it right.
   Any mismatch = a bug to hunt. Happy functioning!
   ============================================================ */
