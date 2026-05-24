// -------TASK 1: TIP CALCULATOR--------------------------------------------------
// Havent handled exceptions
function calculateTip(billAmount, numberOfPeople, serviceQuality) {
  const initialBill = billAmount;
  const percent = helperServiceQuality(serviceQuality) / 100;
  const totalTip = initialBill * percent;
  const tipPerPerson = totalTip / numberOfPeople;
  const totalBill = initialBill + totalTip;
  const totalPerPerson = totalBill / numberOfPeople;

  return { tipPerPerson, totalPerPerson, totalBill };
}

function helperServiceQuality(serviceQuality) {
  let percent = null;
  switch (serviceQuality) {
    case "poor":
      percent = 10;
      break;
    case "good":
      percent = 15;
      break;
    case "excellent":
      percent = 20;
  }
  return percent;
}

console.log(calculateTip(20000, 4, "excellent"));
