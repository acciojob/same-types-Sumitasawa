function isSameType(value1, value2) {
  const bothNaN = Number.isNaN(value1) && Number.isNaN(value2);
  if (bothNaN) return true;
  return typeof value1 === typeof value2;
}

// do not change the code below.
let raw1 = prompt("Enter First Value");
let raw2 = prompt("Enter Second Value");

// Convert inputs to numbers if possible
let value1 = raw1.trim() === "NaN" ? NaN : isNaN(Number(raw1)) ? raw1 : Number(raw1);
let value2 = raw2.trim() === "NaN" ? NaN : isNaN(Number(raw2)) ? raw2 : Number(raw2);

alert(isSameType(value1, value2));
