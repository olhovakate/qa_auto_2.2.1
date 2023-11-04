/*let userBalance, deliveryCost, smsCode, dbDelivery, boxPost;
userBalance = 500;
deliveryCost = 100;
smsCode = "A001DFX0";
dbDelivery = {
  A001DFX0: {
    id: "1432HGF",
    cellNumber: 4,
    cost: 100,
  },
};
boxPost = [null, null, null, "1432HGF", null];

if (smsCode in dbDelivery) {
  const deliveryInfo = dbDelivery[smsCode];
  {
    userBalance -= deliveryCost;
    console.log(
      `Заберите посылку ${deliveryInfo.id} из ячейки №${deliveryInfo.cellNumber}. Ваш счет составляет: ${userBalance}ед.`
    );
  }
} else {
  console.log("Посылка с указанным кодом не найдена в базе данных.");
}*/

let expencesExamples = [
  {
    yearlyExpences: [
      2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390,
    ],
  },
  {
    yearlyExpences: [
      500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200,
    ],
  },
  {
    yearlyExpences: [
      20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000,
    ],
  },
];
let value = 0;
let yearlyExpences = expencesExamples[value].yearlyExpences;

/*let sum1=yearlyExpences.reduce (function(sum,element){
  if (element>1000){
   return sum + element;
   } else {
    return sum;
   }
});
 console.log (sum1);*/

/*expencesExamples.forEach(function (expensesExample, index) {
  let sum = 0;
  expensesExample.yearlyExpences.forEach(function (expense) {
    if (expense > 1000) {
      sum += expense;
    }
  });
  console.log(`Сумма затрат выше 1000 для массива ${index + 1}: ${sum}`);
});*/

expencesExamples.forEach(function (expensesExample, index) {
  let months = [];
  expensesExample.yearlyExpences.forEach(function (expense, monthIndex) {
    if (expense <= 1000) {
      let monthName = new Date((monthIndex + 1).toString()).toLocaleString(
        "default",
        { month: "long" }
      );
      months.push(monthName);
    }
  });

  console.log(
    `Месяцы с затратами <= 1000 для массива ${index + 1}: ${months.join(", ")}`
  );
});
