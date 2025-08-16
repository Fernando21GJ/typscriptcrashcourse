let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];

for(let tempSport of sportsTwo){
    console.log(tempSport);
}

sportsTwo.push("Baseball");
sportsTwo.push("Futbol");

console.log("\n");

for(let tempSportSecond of sportsTwo){
    console.log(tempSportSecond);
}