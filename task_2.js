`use  strict`;

const massBob = 78;
const heightBob = 1.68;

const massJohn = 92;
const heightJohn = 1.76;

const BMIBob = massBob / (heightBob * 2);
const BMIJohn = massJohn / (heightJohn * 2);
// console.log("Bobs BMI =", BMIBob, "Johns BMI =", BMIJohn);

// const bobHigherBMI = true;

// if (BMIBob > BMIJohn) {
//   console.log("Bobs BMI higher than Johns BMI", bobHigherBMI);
// } else {
//   console.log("Johns BMI higher than Bobs", !bobHigherBMI);
// }

if (BMIBob > BMIJohn) {
  const bobHigherBMI = true;
  console.log(
    "Bob's BMI (",
    BMIBob,
    ") higher than John's (",
    BMIJohn,
    ")!, it's",
    bobHigherBMI
  );
} else {
  bobHigherBMI = false;
  console.log(
    "It's",
    bobHigherBMI,
    ". Now John's BMI (",
    BMIJohn,
    ") higher than Bob's (",
    BMIBob,
    ")!"
  );
}
