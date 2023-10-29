//const players = [
// {
// id: 1,
// name: "Ivan",
// scorePoints: 4500,
//},
//{
//  id: 2,
//  name: "Petr",
// scorePoints: 3600,
//},
// {
// id: 3,
// name: "Vadim",
//scorePoints: 3433,
//},
// {
// id: 4,
// name: "Olga",
// scorePoints: 2356,
// },
//];

//const scorePointsArr = [];//создали пустой массив
//console.log (players[0].scorePoints)// вывод баллов любого игрока

//for (let i=0;i<players.length;i++)// цикл for
//{
///console.log (players[i].scorePoints)
//}
//let scorePointsArr = []; //переименовали переменную
//for (let player in players) { // через цикл for in заполнили пустой массив
//scorePointsArr.push(players[player].scorePoints);
//}
//console.log(scorePointsArr);//вывод баллов всех игроков

//console.log (Math.max(...scorePointsArr));//вывели максимальное кол-во баллов

//let maxScore = players[0].scorePoints;//обьявление переменной
//let playerWithMaxScore = players[0];//обьявление переменной

//for (let i = 0; i < players.length; i++) {// и через цикл вывод имени игрока и его баллов в консоль
// if (players[i].scorePoints > maxScore) {
// maxScore = players[i].scorePoints;
// playerWithMaxScore = players[i];
//}
//}
//console.log(
//`Игрок с максимальным scorePoints: ${playerWithMaxScore.name}, ${maxScore} очков.`
//);

const players = [
  {
    id: 1,
    name: "Alice",
    scorePoints: 5000,
  },
  {
    id: 2,
    name: "Bob",
    scorePoints: 4200,
  },
  {
    id: 3,
    name: "Charlie",
    scorePoints: 3900,
  },
  {
    id: 4,
    name: "David",
    scorePoints: 4800,
  },
  {
    id: 5,
    name: "Eve",
    scorePoints: 5500,
  },
];
let scorePointsArr = [];

for (let player2 in players) {
  scorePointsArr.push(players[player2].scorePoints);
}
//console.log(scorePointsArr);

let maxScore = Math.max(...scorePointsArr);

for (let player2 of players) {
  if (player2.scorePoints === maxScore) {
    console.log(player2);
    break;
  }
}
