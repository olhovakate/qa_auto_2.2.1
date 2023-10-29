const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

//const scorePointsArr = [];
//console.log (players[0].scorePoints)

//for (let i=0;i<players.length;i++)
//{
///console.log (players[i].scorePoints)
//}
let scorePointsArr = [];
for (let player in players) {
  scorePointsArr.push(players[player].scorePoints);
}
//console.log(scorePointsArr);

//console.log (Math.max(...scorePointsArr));

let maxScore = players[0].scorePoints;
let playerWithMaxScore = players[0];

for (let i = 0; i < players.length; i++) {
  if (players[i].scorePoints > maxScore) {
    maxScore = players[i].scorePoints;
    playerWithMaxScore = players[i];
  }
}
console.log(
  `Игрок с максимальным scorePoints: ${playerWithMaxScore.name}, ${maxScore} очков.`
);
