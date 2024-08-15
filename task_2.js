`use  strict`;

const bob = {
  firstName: "Bob Miller",
  mass: 78,
  height: 1.68,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

const john = {
  firstName: "John Smith",
  mass: 92,
  height: 1.76,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

bob["bmi"] = bob.calcBMI();

john["bmi"] = john.calcBMI();

const bobHigherBMI = bob.bmi > john.bmi;

if (bobHigherBMI) {
  console.log(
    `${bob.firstName}'s BMI (${bob.bmi}) is higher than ${john.firstName}'s (${john.bmi})`
  );
} else {
  console.log(
    `${john.firstName}'s BMI (${john.bmi}) is higher than ${bob.firstName}'s (${bob.bmi})`
  );
}
