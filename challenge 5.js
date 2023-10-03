// Создайте стрелочную функцию calcAverageдля вычисления среднего значения трех оценок. Эта функция должна иметь три параметра и возвращать одно число (средний балл).

// Создайте две новые переменные — scoreDolphinsи и присвойте им scoreKoalasзначение, возвращаемое функцией (вам нужно будет вызвать эту функцию и передать оценки в качестве аргументов).calcAverage

// Создайте функцию checkWinner, которая принимает средний балл каждой команды в качестве параметров ( avgDolphinsи avgKoalas), а затем выводит на консоль победителя вместе с победными очками в соответствии с правилом, приведенным выше. Пример: Koalas win (30 vs. 13)(используйте avgDolphins и avgKoalas вместо жестко запрограммированных значений).

// Используйте эту checkWinnerфункцию, чтобы определить победителя как для DATA 1 , так и для DATA 2 .

// На этот раз игнорируйте ничьи. Вместо этого войдите No team wins...в консоль, если победителя нет.


const calcAverage = (value1, value2, value3) => {
    const avgValue = (value1 + value2 + value3) / 3;

    return avgValue;
    
}

let scoreDolphins = console.log(calcAverage(80, 23, 71));
let scoreKoalas = console.log(calcAverage(65, 54, 49));



const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koals win ${avgKoalas} vs ${avgDolphins}`);
    }
    else {
        console.log('No team wins the trophy');
    }
    
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(500, 200);

// Test 2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);