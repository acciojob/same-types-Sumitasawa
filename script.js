function isSameType(value1, value2) {
  const bothNaN = Number.isNaN(value1) && Number.isNaN(value2);
  if (bothNaN) return true;
  return typeof value1 === typeof value2;
}

// Do not change the code below
let raw1 = prompt("Enter First Value");
let raw2 = prompt("Enter Second Value");

// Helper to convert input string into proper type
function parseInput(str) {
  str = str.trim();
  if (str === "NaN") return NaN;
  let num = Number(str);
  return isNaN(num) ? str : num;
}

let value1 = parseInput(raw1);
let value2 = parseInput(raw2);

alert(isSameType(value1, value2));
