// Стивену нужен очень простой калькулятор чаевых, когда бы он ни пошел поесть в ресторан. В его стране принято давать чаевые в размере 15%, если сумма счета составляет от 50 до 300 долларов. Если сумма другая, чаевые составляют 20%.

// Ваши задачи:

// Рассчитайте чаевые в зависимости от суммы купюры. Создайте переменную, вызывающую tip. Запрещено использовать if...elseоператор (если вам проще, можете начать с if...elseоператора, а потом попробовать преобразовать его в тернарный оператор).

// Выведите на консоль строку, содержащую значение bill , tipи конечное значение ( ).bill + tip

// Пример: The bill was 275, the tip was 41.25, and the total value 316.25.

// Примечание. Для создания этой строки используйте значения переменных billи . tipНе кодируйте их жестко 🙂

// ТЕСТОВЫЕ ДАННЫЕ: Тест с разными billзначениями: 275, 40 и 430.
const bill = 430;
let tip;

(bill > 50 ) && (bill < 300) ? tip = 0.15 * bill  : tip = 0.20 * bill

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)




