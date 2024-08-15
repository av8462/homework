`use  strict`;

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = bill * 0.15;
    console.log(`The bill was ${bill}, the tip was ${tip}`);
    return tip;
  }
  const tip = bill * 0.2;
  console.log(`The bill was ${bill}, the tip was ${tip}`);
  return tip;
}

function result(a, b) {
  for (let i = 0; i < a.length; i++) {
    a[i] = a[i] + b[i];
  }
  return a;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = bills.map(calcTip);

const totals = result(bills, tips);

console.log(`All tips from each bill :${tips}`);

console.log(`All bill + tip from each bill :${totals}`);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const sumTotals = calcAverage(totals);
const averageTotals = sumTotals / totals.length;

console.log(`Average total :${averageTotals}`);
