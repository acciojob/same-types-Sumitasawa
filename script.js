function isSameType(value1, value2) {
  const isNaN1 = Number.isNaN(value1);
  const isNaN2 = Number.isNaN(value2);

  if (isNaN1 && isNaN2) return true;
  if (isNaN1 || isNaN2) return false; // ✅ One is NaN, other isn't

  return typeof value1 === typeof value2;
}

// Do not change the code below
let raw1 = prompt("Enter First Value");
let raw2 = prompt("Enter Second Value");

function parseInput(str) {
  str = String(str).trim();
  if (str === "NaN") return NaN;
  let num = Number(str);
  return isNaN(num) ? str : num;
}

let value1 = parseInput(raw1);
let value2 = parseInput(raw2);

alert(isSameType(value1, value2));
