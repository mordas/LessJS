let money = prompt('Ваш бюджет на месяц?', 0);
let time = prompt('Введите дату в формате YYYY-MM-DD', 0);
let a = prompt('Введите обязательную статью расходов в этом месяце');
let b = prompt('Во сколько обойдется?');
let c = prompt('Введите обязательную статью расходов в этом месяце');
let d = prompt('Во сколько обойдется?');
let appData = {
    budjet: money,
    date: time,
    expenses: {},
    optionalExpenses: {

    },
    income: [],
    savings: false
}
appData.expenses.a = b;
appData.expenses.c = d;
alert("Ваш бюджет на сегодня: " + money/30);