//Dot Calculator You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.
function calculate(str) {
  let val;
  if (str.includes("+")) {
    return (
      str.slice(0, str.indexOf("+")).trim() +
      str.slice(str.indexOf("+") + 1).trim()
    );
  } else if (str.includes("-")) {
    val =
      str.slice(0, str.indexOf("-")).trim().length -
      str.slice(str.indexOf("-") + 1).trim().length;
    return str.slice(0, val);
  } else if (str.includes("*")) {
    val =
      str.slice(0, str.indexOf("*")).trim().length *
      str.slice(str.indexOf("*") + 1).trim().length;
    return Array(val).fill(".").join("");
  } else if (str.includes("/")) {
    val = Math.trunc(
      str.slice(0, str.indexOf("/")).trim().length /
        str.slice(str.indexOf("/") + 1).trim().length
    );
    return Array(val).fill(".").join("");
  }
}
