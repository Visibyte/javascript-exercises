const repeatString = function (string, num) {
  let stringToReturn = "";

  if (num < 0) {
    return "ERROR";
  }

  for (let i = 0; i < num; i++) {
    stringToReturn = stringToReturn.concat(string);
  }

  return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
