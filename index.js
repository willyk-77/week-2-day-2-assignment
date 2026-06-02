// ============================================================
// SHARED HELPER FUNCTIONS
// ============================================================

function helperServiceQuality(serviceQuality) {
  const tipRates = { poor: 10, good: 15, excellent: 20 };
  // If serviceQuality is not recognised, default to "good"
  return tipRates[serviceQuality] !== undefined
    ? tipRates[serviceQuality]
    : tipRates["good"];
}

function helperCalcWeightedAvg(scores) {
  // Multiply each score by its weight then sum them all up
  return scores.reduce((acc, s) => acc + s.score * s.weight, 0);
}

function helperGrading(average) {
  if (average >= 70) return "A";
  if (average >= 60) return "B";
  if (average >= 50) return "C";
  if (average >= 40) return "D";
  return "F";
}

function helperStatus(grade) {
  switch (grade) {
    case "A":
    case "B":
    case "C":
    case "D":
      return "Pass";
    default:
      return "Fail";
  }
}

function helperPassLength(password) {
  return password.length;
}

// Using .test() consistently across all character checks
function helperCheckLowerChars(password) {
  return /[a-z]/.test(password);
}

function helperCheckUpperChars(password) {
  return /[A-Z]/.test(password);
}

function helperNums(password) {
  return /[0-9]/.test(password);
}

function helperSpecialChars(password) {
  return /[!@#$%^&*()_+\-=]/.test(password);
}

function scoringCriteria(password) {
  let lengthScore = helperPassLength(password) >= 8 ? 1 : 0;
  let lowerScore = helperCheckLowerChars(password) ? 1 : 0;
  let upperScore = helperCheckUpperChars(password) ? 1 : 0;
  let numScore = helperNums(password) ? 1 : 0;
  let specialScore = helperSpecialChars(password) ? 1 : 0;
  return lengthScore + lowerScore + upperScore + numScore + specialScore;
}

function passwordStrength(score) {
  if (score <= 2) return "Weak";
  if (score === 3) return "Medium";
  return "Strong";
}

function missingCriteria(password) {
  // Build an array of only the criteria that are missing
  let missing = [];
  if (helperPassLength(password) < 8) missing.push("At least 8 characters");
  if (!helperCheckUpperChars(password)) missing.push("Uppercase letter");
  if (!helperCheckLowerChars(password)) missing.push("Lowercase letter");
  if (!helperNums(password)) missing.push("Number");
  if (!helperSpecialChars(password)) missing.push("Special character");
  return missing;
}

// ============================================================
// TASK 1 — TIP CALCULATOR
// ============================================================

function calculateTip(billAmount, numberOfPeople, serviceQuality) {
  // Edge case: negative bill
  if (billAmount < 0) {
    return { error: "Bill amount cannot be negative" };
  }
  // Edge case: zero or negative people
  if (numberOfPeople <= 0) {
    return { error: "Number of people must be at least 1" };
  }

  const percent = helperServiceQuality(serviceQuality) / 100;
  const totalTip = billAmount * percent;
  const tipPerPerson = totalTip / numberOfPeople;
  const totalBill = billAmount + totalTip;
  const totalPerPerson = totalBill / numberOfPeople;

  return { tipPerPerson, totalPerPerson, totalBill };
}

// Test 1 — valid input
let tip1 = calculateTip(5000, 4, "excellent");
console.log(`Bill: KES 5,000 | People: 4 | Service: excellent`);
console.log(
  `Tip per person: KES ${tip1.tipPerPerson} | Total per person: KES ${tip1.totalPerPerson} | Total: KES ${tip1.totalBill}`,
);

// Test 2 — zero people
let tip2 = calculateTip(1200, 0, "good");
console.log(`Bill: KES 1,200 | People: 0`);
console.log(`Error: ${tip2.error}`);

// Test 3 — invalid service quality defaults to good
let tip3 = calculateTip(3000, 2, "amazing");
console.log(
  `Bill: KES 3,000 | People: 2 | Service: amazing (defaults to good)`,
);
console.log(
  `Tip per person: KES ${tip3.tipPerPerson} | Total per person: KES ${tip3.totalPerPerson} | Total: KES ${tip3.totalBill}`,
);

// ============================================================
// TASK 2 — GRADE CALCULATOR
// ============================================================

function calculateGrade(scores) {
  // Validate that all weights add up to 1.0 (allow small rounding differences)
  let totalWeight = scores.reduce((acc, s) => acc + s.weight, 0);
  if (Math.abs(totalWeight - 1.0) > 0.01) {
    return { error: "Weights must add up to 1.0" };
  }

  let weightedAverage = helperCalcWeightedAvg(scores);
  let letterGrade = helperGrading(weightedAverage);
  let status = helperStatus(letterGrade);

  return { weightedAverage, letterGrade, status };
}

// Test 1 — valid scores
let grade1 = calculateGrade([
  { name: "Exam", score: 85, weight: 0.4 },
  { name: "Assignment", score: 90, weight: 0.3 },
  { name: "Project", score: 78, weight: 0.3 },
]);
console.log(`Scores: Exam (85, 40%), Assignment (90, 30%), Project (78, 30%)`);
console.log(
  `Weighted Average: ${grade1.weightedAverage} | Grade: ${grade1.letterGrade} | Status: ${grade1.status}`,
);

// Test 2 — failing scores
let grade2 = calculateGrade([
  { name: "Exam", score: 20, weight: 0.4 },
  { name: "Assignment", score: 20, weight: 0.3 },
  { name: "Project", score: 30, weight: 0.3 },
]);
console.log(`Scores: Exam (20, 40%), Assignment (20, 30%), Project (30, 30%)`);
console.log(
  `Weighted Average: ${grade2.weightedAverage} | Grade: ${grade2.letterGrade} | Status: ${grade2.status}`,
);

// Test 3 — invalid weights
let grade3 = calculateGrade([
  { name: "Exam", score: 85, weight: 0.5 },
  { name: "Assignment", score: 90, weight: 0.5 },
  { name: "Project", score: 78, weight: 0.5 },
]);
console.log(`Error: ${grade3.error}`);

// ============================================================
// TASK 3 — PASSWORD STRENGTH CHECKER
// ============================================================

function checkPasswordStrength(password) {
  let score = scoringCriteria(password);
  let strength = passwordStrength(score);
  let missing = missingCriteria(password);

  return { strength, score, missing };
}

// Test 1 — weak password
let pass1 = checkPasswordStrength("hello");
console.log(`Password: "hello"`);
console.log(`Strength: ${pass1.strength} (${pass1.score}/5)`);
console.log(
  `Missing: ${pass1.missing.length > 0 ? pass1.missing.join(", ") : "None"}`,
);

// Test 2 — strong password
let pass2 = checkPasswordStrength("MyP@ssw0rd!");
console.log(`Password: "MyP@ssw0rd!"`);
console.log(`Strength: ${pass2.strength} (${pass2.score}/5)`);
console.log(
  `Missing: ${pass2.missing.length > 0 ? pass2.missing.join(", ") : "None"}`,
);

// Test 3 — medium password
let pass3 = checkPasswordStrength("Hellow8");
console.log(`Password: "Hellow8"`);
console.log(`Strength: ${pass3.strength} (${pass3.score}/5)`);
console.log(
  `Missing: ${pass3.missing.length > 0 ? pass3.missing.join(", ") : "None"}`,
);
