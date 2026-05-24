# Week 2 - Day 2 Assignment

## What This Assignment Covers

Three utility functions built with JavaScript helper functions.

---

## Function 1 — Tip Calculator

Calculates how much tip to pay at a restaurant.

**Usage:**

```javascript
calculateTip(billAmount, numberOfPeople, serviceQuality);
```

**Example:**

```javascript
calculateTip(20000, 4, "excellent");
// { tipPerPerson: 1000, totalPerPerson: 6000, totalBill: 24000 }
```

**Service quality options:** `"poor"` (10%) | `"good"` (15%) | `"excellent"` (20%)

---

## Function 2 — Grade Calculator

Calculates a weighted average grade from an array of scores.

**Usage:**

```javascript
calculateGrade(scores);
```

**Example:**

```javascript
calculateGrade([
  { name: "Exam", score: 85, weight: 0.4 },
  { name: "Assignment", score: 90, weight: 0.3 },
  { name: "Project", score: 78, weight: 0.3 },
]);
// "Weighted Average: 84.4, Letter Grade: A, Status: Pass"
```

**Grading scale:** A (70+) | B (60-69) | C (50-59) | D (40-49) | F (below 40)

---

## Function 3 — Password Strength Checker

Checks how strong a password is based on 5 criteria.

**Usage:**

```javascript
checkPasswordStrength(password);
```

**Example:**

```javascript
checkPasswordStrength("Hellow8!");
// { strength: "Strong", score: 5, missing: [] }
```

**Scoring criteria (1 point each):**

- At least 8 characters
- Has a lowercase letter
- Has an uppercase letter
- Has a number
- Has a special character

**Strength levels:** Weak (0-2) | Medium (3) | Strong (4-5)

---

## How to Run

```bash
node script.js
```

---

## Author

William Kahare Matenjwa
