`use  strict`;

const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinners(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);

    return;
  }

  if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win win (${avgKoalas} vs. ${avgDolphins})`);

    return;
  }

  console.log(`No team wins.`);
}

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const winner = checkWinners(scoreDolphins, scoreKoalas);
