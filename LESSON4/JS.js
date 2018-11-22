let money, time;




let appData = {
    budjet: money,
    date: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    start: function () {
        money = +prompt('Ваш бюджет на месяц?', 0);
        time = prompt('Введите дату в формате YYYY-MM-DD', 0);
        while (isNaN(money) || money == '' || money == null) {
            money = +prompt('Ваш бюджет на месяц?', 0);
        }
    },
    chooseExpentions: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', '');
            let b = prompt('Во сколько обойдется?', '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {

            }
        }

    },
    chooseOptExpentions: function () {
        for (let i = 1; i < 4; i++) {
            let a = prompt('Введите необязательную статью расходов в этом месяце', '');

            appData.optionalExpenses[i] = a;
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budjet / 30).toFixed();
        alert("Ваш бюджет на сегодня: " + appData.moneyPerDay);
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимум');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Нормально');
        } else if (appData.moneyPerDay < 1000) {
            console.log('Богато');
        } else {
            console.log('Ошибка');
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Введите сумму сбережений', ''),
                percent = +prompt('Под какой процент?', '');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита ' + appData.monthIncome);
        }
    },
    chooseIncome: function(){
        let items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)','');
        
    
    while (!isNaN(items) || items == '' || items == null) {
        alert('Ошибка! Попробуйте снова!');
        items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)','');
    
        
    }
    appData.income = items.split(', ');
    appData.income.push(prompt('Ничего не забыл?'));
    appData.income.sort();
    appData.income.forEach(function(item,i) {
        alert("Способы дополнительного заработка " + ++i + " " +  item);
    });
},
    writeProp: function(){
        for (key in appData){
            alert("Наша программа включает в себя " + key +' ' + appData[key]);
        }
    }
}
