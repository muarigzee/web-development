//  Example 1: Age Group Checker using if-else

let age = 17;

if (age < 13) {
  console.log("You are a child.");
} else if (age >= 13 && age < 18) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}

//  Example 2: Weekday Checker using switch

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Sunday":
    console.log("Relax, it's Sunday!");
    break;
  default:
    console.log("Just a normal day.");
}

//  Example 3: Even or Odd Checker using if-else

let number = 4;

if (number % 2 === 0) {
  console.log(`${number} is Even`);
} else {
  console.log(`${number} is Odd`);
}
