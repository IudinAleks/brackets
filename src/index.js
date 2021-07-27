module.exports = function check(str, bracketsConfig) {
  let stack = [];

  str.split("").forEach((symb) => {
    bracketsConfig.forEach((item, itemIndex) => {
      if (symb === item[0]) return stack.push(itemIndex);
      if (symb === item[1] && stack[stack.length - 1] == itemIndex)
        return stack.pop();
    });
  });

  return stack.length == 0 ? true : false;
};
