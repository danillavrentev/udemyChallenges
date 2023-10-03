// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks 
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy

// 1 Var
// let scoreDolphins = (96 + 108 + 89) / 3;
// let scoreKoalas = (88 + 91 + 110) / 3;

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy')
// }
// else if (scoreDolphins < scoreKoalas){
//     console.log('Koalas win the trophy')
// }
// else {
//     console.log('Both win the trophy')
// }

// 2 Var

// let scoreDolphins = (96 + 108 + 55) / 3;
// let scoreKoalas = (99 + 91 + 110) / 3;

// console.log(scoreDolphins)
// console.log(scoreKoalas)
// if ((scoreDolphins > scoreKoalas) && (scoreDolphins || scoreKoalas >= 100))  {
//     console.log('Dolphins win the trophy')
// }
// else if ((scoreDolphins < scoreKoalas) && (scoreDolphins || scoreKoalas >= 100)){
//     console.log('Koalas win the trophy')
// }
// else {
//     console.log('Both lose the trophy')
// }

// 3 Var

let scoreDolphins = (10 + 100 + 100) / 3;
let scoreKoalas = (10 + 100 + 100) / 3;

if ((scoreDolphins > scoreKoalas) && (scoreDolphins >= 100)) {
    console.log('Dolphins win the trophy')
}
else if ((scoreDolphins < scoreKoalas) && (scoreKoalas >= 100)){
    console.log('Koalas win the trophy')
}
else if (scoreDolphins && scoreKoalas >= 100){
    console.log('Both win the trophy')
}
else {
    console.log ('Both lose trophy')
}