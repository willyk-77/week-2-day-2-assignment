# Week 2 Day 2 Assignment — Functions and Logic

## Overview

This assignment builds three practical tools using JavaScript functions, conditionals, and data processing: a tip calculator, a grade calculator, and a password strength checker. All tasks are written in a single `index.js` file and run with Node.js.

---

## Tasks

### Task 1 — Tip Calculator

Calculates how much each person should pay including tip, based on bill amount, number of people, and service quality.

| Function                                                   | Description                                                                                                        |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `calculateTip(billAmount, numberOfPeople, serviceQuality)` | Returns an object with `tipPerPerson`, `totalPerPerson`, and `totalBill`                                           |
| `helperServiceQuality(serviceQuality)`                     | Maps service quality ("poor", "good", "excellent") to a tip percentage. Defaults to "good" for unrecognised values |

**Edge Cases Handled**

- Bill amount cannot be negative
- Number of people must be at least 1
- Invalid service quality defaults to "good" (15%)

**Sample Output**

```
Bill: KES 5,000 | People: 4 | Service: excellent
Tip per person: KES 250 | Total per person: KES 1,500 | Total: KES 6,000

Bill: KES 1,200 | People: 0
Error: Number of people must be at least 1

Bill: KES 3,000 | People: 2 | Service: amazing (defaults to good)
Tip per person: KES 225 | Total per person: KES 1,725 | Total: KES 3,450
```

---

### Task 2 — Grade Calculator

Calculates a student's weighted average across multiple scored components and returns a letter grade and pass/fail status.

| Function                        | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| `calculateGrade(scores)`        | Returns an object with `weightedAverage`, `letterGrade`, and `status` |
| `helperCalcWeightedAvg(scores)` | Multiplies each score by its weight and sums the results              |
| `helperGrading(average)`        | Converts a numeric average to a letter grade (A–F)                    |
| `helperStatus(grade)`           | Returns "Pass" for grades D and above, "Fail" for F                   |

**Grading Scale**

| Grade | Range    |
| ----- | -------- |
| A     | 70 – 100 |
| B     | 60 – 69  |
| C     | 50 – 59  |
| D     | 40 – 49  |
| F     | Below 40 |

**Validation**

- Weights must add up to 1.0 (tolerance of ±0.01). Returns an error object if not.

**Sample Output**

```
Scores: Exam (85, 40%), Assignment (90, 30%), Project (78, 30%)
Weighted Average: 84.4 | Grade: A | Status: Pass

Scores: Exam (20, 40%), Assignment (20, 30%), Project (30, 30%)
Weighted Average: 23 | Grade: F | Status: Fail

Error: Weights must add up to 1.0
```

---

### Task 3 — Password Strength Checker

Evaluates a password against 5 criteria and returns a strength rating, score, and list of missing requirements.

| Function                          | Description                                                     |
| --------------------------------- | --------------------------------------------------------------- |
| `checkPasswordStrength(password)` | Returns an object with `strength`, `score`, and `missing` array |
| `scoringCriteria(password)`       | Awards 1 point for each criterion met (max 5)                   |
| `passwordStrength(score)`         | Converts score to "Weak", "Medium", or "Strong"                 |
| `missingCriteria(password)`       | Returns an array of unmet requirements                          |

**Scoring Criteria**

| Criterion                            | Points |
| ------------------------------------ | ------ |
| At least 8 characters                | 1      |
| Lowercase letter                     | 1      |
| Uppercase letter                     | 1      |
| Number                               | 1      |
| Special character (!@#$%^&\*()\_+-=) | 1      |

**Strength Ratings**

| Score | Strength |
| ----- | -------- |
| 0 – 2 | Weak     |
| 3     | Medium   |
| 4 – 5 | Strong   |

**Sample Output**

```
Password: "hello"
Strength: Weak (2/5)
Missing: At least 8 characters, Uppercase letter, Number, Special character

Password: "MyP@ssw0rd!"
Strength: Strong (5/5)
Missing: None

Password: "Hellow8"
Strength: Medium (3/5)
Missing: At least 8 characters, Special character
```

---

## How to Run

```bash
# Clone the repository
git clone https://github.com/your-username/week-2-day-2-assignment

# Navigate into the folder
cd week-2-day-2-assignment

# Run the file
node index.js
```

> No dependencies required. Runs on Node.js only.

---

## Key Concepts Used

- Functions with edge case handling and input validation
- `switch` statements for mapping values
- Array methods: `.reduce()`, `.map()`, `.filter()`, `.push()`
- Regular expressions for pattern matching (`/[A-Z]/`, `/[0-9]/`, `/[!@#$%^&*]/`)
- Template literals for formatted output
- Returning objects from functions for structured data
- Helper functions for code reuse across tasks
