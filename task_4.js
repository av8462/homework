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
  for (let i = 0; i < bills.length; i++) {
    a[i] = a[i] + b[i];
  }
  return a;
}

const bills = [125, 555, 44];

const tips = bills.map(calcTip);

const totals = result(bills, tips);

console.log(tips);

console.log(totals);
