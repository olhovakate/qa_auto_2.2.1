let userBalance, deliveryCost, smsCode, dbDelivery, boxPost;
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
}
