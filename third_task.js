function isValidParentheses(str) {
  let left = 0;
  let right = 0;
  let arr = str.split("");
  if (0 <= str.length <= 100) {
    arr.map((elem) => (elem === ")" ? right++ : left++));
  }
  return left === right ? true : false;
}
