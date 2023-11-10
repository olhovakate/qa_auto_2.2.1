const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;
  debugger; //присвоение числовых значений атрибутам a и b и проверка переменных, как отрабатывают
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; //присвоение значения  переменной bonus,если >50, то присвоиться
  //не больше 50,а если <=50, то присвоиться значение которое в сумме
  return bonus;
};
console.log(calculateBonus(10, 30));

module.exports = calculateBonus;
