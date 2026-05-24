// -----------TASK 2 : GRADE CALCULATOR-------------------------------------------------------

function calculateGrade(scores) {
  let weightedAvg = helperCalcWeightedAvg(scores);
  let grade = helperGrading(weightedAvg);
  let status = helperStatus(grade);

  return `Weighted Average: ${weightedAvg}, letter Grade:  ${grade}, Status  ${status} `;
}

function helperCalcWeightedAvg(scores) {
  const weightedAvg = scores.map((score) => score.score * score.weight);
  //   console.log(weightedAvg); [ 34, 27, 23.4 ] This is returning an array with the weights
  const totalWeightedAvg = weightedAvg.reduce((acc, num) => acc + num, 0);
  //   console.log(totalWeightedAvg); returns 84.4 : Confirms the function is working. Now just return it
  return totalWeightedAvg;
}

function helperGrading(average) {
  if (average >= 70) return "A";
  if (average >= 60) return "B";
  if (average >= 50) return "C";
  if (average >= 40) return "D";
  return "F";
}

function helperStatus(grade) {
  let status = null;
  switch (grade) {
    case "A":
    case "B":
    case "C":
    case "D":
      status = "Pass";
      break;
    default:
      status = "Fail";
  }
  return status;
}

console.log(
  calculateGrade([
    { name: "Exam", score: 20, weight: 0.4 },
    { name: "Assignment", score: 20, weight: 0.3 },
    { name: "Project", score: 78, weight: 0.3 },
  ]),
);
