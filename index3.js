// ---------------------------------------------------------------------------
function checkPasswordStrength(password) {
  let strength = passwordStrength(password);
  let score = scoringCriteria(password);
  let missing = missingCriteria(password);

  return { strength, score, missing };
}

// 1. Check length of password
function helperPassLength(password) {
  let len = password.length;
  return len;
}

// 2. Check if has uppercase, lowercase, number and special Character

function helperCheckLowerChars(password) {
  let checkLower = password.match(/[a-z]/);
  let hasLower = null;
  if (checkLower == undefined) {
    hasLower = false;
  } else {
    hasLower = true;
  }
  return hasLower;
}

function helperCheckUpperChars(password) {
  let checkUpper = password.match(/[A-Z]/);
  let hasUpper = null;
  if (checkUpper == undefined) {
    hasUpper = false;
  } else {
    hasUpper = true;
  }
  return hasUpper;
}
function helperNums(password) {
  let checkNums = password.match(/[0-9]/);
  let hasNums = null;
  if (checkNums == undefined) {
    hasNums = false;
  } else {
    hasNums = true;
  }
  return hasNums;
}

//prettier-ignore
function helperSpecialChars(password) {
  let specialChars = /[!@#$%^&*()_+-=]/;
  let hasSpecialChars = specialChars.test(password);
  return hasSpecialChars;
}
// prettier-ignore
function scoringCriteria(password) {
  let lengthScore = helperPassLength(password) >= 8 ? 1 : 0;
  let scoreLowerChars = helperCheckLowerChars(password)? 1 : 0;
  let scoreUpperChars = helperCheckUpperChars(password)? 1 : 0;
  let scoreHelperNums = helperNums(password)? 1 : 0;
  let specialChars = helperSpecialChars(password) ? 1 : 0;

  let totalScore = lengthScore+scoreLowerChars+scoreUpperChars+scoreHelperNums+specialChars;
  return totalScore;
}

function passwordStrength(password) {
  let score = scoringCriteria(password);
  let passStrength = null;
  switch (score) {
    case 0:
    case 1:
    case 2:
      passStrength = "Weak";
      break;
    case 3:
      passStrength = "Medium";
      break;
    case 4:
    case 5:
      passStrength = "Strong";
  }
  return passStrength;
}

//prettier-ignore
function missingCriteria(password) {
  let lengthScore = helperPassLength(password) >= 8 ? "" : "Atleast 8 Characters";
  let scoreLowerChars = helperCheckLowerChars(password)? "" : "Lowercase letter";
  let scoreUpperChars = helperCheckUpperChars(password)? "" : "Uppercase letter";
  let scoreHelperNums = helperNums(password)? "" : "Number";
  let specialChars = helperSpecialChars(password) ? " ": "Special characters";

  let missingchars = `Missing: ${lengthScore} ${scoreLowerChars}${scoreUpperChars} ${scoreHelperNums} ${specialChars}`;
  return missingchars;
}

console.log(checkPasswordStrength("Hellow8"));
// console.log(helperCheckLowerChars("HELLOW")); - Check if helper helperCheckLowerChars works.. prints false
// console.log(helperCheckUpperChars("hello")); // Check if helper helperCheckUpperChars works.. prints false
// console.log(helperNums("hello")); // Check if helper helperNums works.. prints false
// console.log(helperSpecialChars("Hellom")); //// Check if helper helperSpecialChars works.. prints true
//console.log(scoringCriteria("Hee$l8989888")); /// checks if the scoringCriteria is working prints 5
// console.log(passwordStrength("hello"));/// checks if the passwordStrenghth works:: prints 1
