const reverseString = function (string) {
  if (string === "") {
    return "";
  }

  for (let i = 0; i < string.length; i++) {
    let result = string.split("").reverse().join("");

    return result;
  }
};

// Do not edit below this line
module.exports = reverseString;
