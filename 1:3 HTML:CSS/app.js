function surroundWithPlus(str) {
  const surroundedStr = "+" + str.split("").join("+") + "+";
  return (
    "+" +
    "-".repeat(surroundedStr.length - 2) +
    "+\n" +
    surroundedStr +
    "\n" +
    "+" +
    "-".repeat(surroundedStr.length - 2) +
    "+"
  );
}

const myString = "Paiza";
const surroundedString = surroundWithPlus(myString);
console.log(surroundedString);
