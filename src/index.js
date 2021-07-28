module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  let stack = [];
  let trigger = true;

  str.split("").forEach((symb) => {
    bracketsConfig.forEach((item, itemIndex) => {
      if (item[0] !== item[1] && (symb === item[0] || symb === item[1])) {
        if (symb === item[0]) return stack.push(itemIndex);
        if (symb === item[1] && stack[stack.length - 1] == itemIndex) {
          return stack.pop();
        }
        return false;
      } else if (
        item[0] === item[1] &&
        (symb === item[0] || symb === item[1])
      ) {
        if (trigger) {
          trigger = !trigger;
          return stack.push(itemIndex);
        } else if (stack[stack.length - 1] == itemIndex) {
          trigger = !trigger;
          return stack.pop();
        }
        return false;
      }
    });
  });
  return stack.length == 0 ? true : false;
};
