let money, time;


function start() {
    money = +prompt('Ваш бюджет на месяц?', 0);
    time = prompt('Введите дату в формате YYYY-MM-DD', 0);
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', 0);
    }
}
start();

let appData = {
    budjet: money,
    date: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpentions() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', '');
        let b = prompt('Во сколько обойдется?', '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {

        }
    }
};
chooseExpentions();

// 3) Создать функцию для определения необязательных расходов (chooseOptExpenses):

// Необходимо 3 раза спросить у пользователя “Статья необязательных расходов?”

// Записать ответы в объект optionalExpenses в формате Номер - Ответ.

// optionalExpenses: {
// 1 : “ответ на вопрос”
// }

function chooseOptExpentions() {
    for (let i = 1; i < 4; i++) {
        let a = prompt('Введите необязательную статью расходов в этом месяце', '');
        
            appData.optionalExpenses[i] = a;
    }    
};
chooseOptExpentions();


// 1) Оформить расчет дневного бюджета  и вывод на экран этого значения как одну функцию (detectDayBudget)

function detectDayBudget(){
appData.moneyPerDay = (appData.budjet / 30).toFixed();
alert("Ваш бюджет на сегодня: " + appData.moneyPerDay);
}
detectDayBudget();

// 2) Оформить блок кода с расчетом уровня достатка как отдельную функцию (detectLevel)

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log('Минимум');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Нормально');
    } else if (appData.moneyPerDay < 1000) {
        console.log('Богато');
    } else {
        console.log('Ошибка');
    }
}
detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt('Введите сумму сбережений', ''),
        percent = +prompt('Под какой процент?', '');

        appData.monthIncome = save/100/12 * percent;
        alert('Доход в месяц с вашего депозита ' + appData.monthIncome);
    }
}

checkSavings();