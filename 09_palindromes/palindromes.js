const palindromes = function (string) {
  let forward = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reverse = forward.split("").reverse().join("");

  if (forward === reverse) {
    return true;
  }

  return false;
};

// Do not edit below this line
module.exports = palindromes;
