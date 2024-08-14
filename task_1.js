`use  strict`;

const massBob = 78;
const heightBob = 1.68;

const massJohn = 92;
const heightJohn = 1.95;

const BMIBob = massBob / heightBob ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

const bobHigherBMI = BMIBob > BMIJohn;

if (bobHigherBMI) {
  console.log(`Bob's BMI (${BMIBob}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Bob's (${BMIBob})`);
}
