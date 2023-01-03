dolphinsAvg = (107 + 112 + 81) / 3;
console.log(dolphinsAvg);

koalasAvg = (109 + 95 + 96) / 3;
console.log(koalasAvg);

// compare to see the winner
if (dolphinsAvg == koalasAvg && (dolphinsAvg >= 100) & (koalasAvg >= 100)) {
  console.log("draw");
} else if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
  console.log("Dolphins win");
} else if (koalasAvg > dolphinsAvg && koalasAvg > 100) {
  console.log("Koalas win");
} else {
  console.log("No one wins the thropy");
}
