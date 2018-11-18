let money = prompt('Ваш бюджет на месяц?', 0);
let time = prompt('Введите дату в формате YYYY-MM-DD', 0);

let appData = {
    budjet: money,
    date: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}
for(let i = 0; i<2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    let b = prompt('Во сколько обойдется?', '');
    
    if ( (typeof(a))=== 'string' && (typeof(a))!= null && (typeof(b))!= null && a != '' && b != '' && a.length < 50 ){
        console.log('done');
        appData.expenses[a] = b;
    } else {

    }
};  


appData.moneyPerDay = appData.budjet/30;

alert("Ваш бюджет на сегодня: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log('Минимум');
} else if (appData.moneyPerDay > 100 &&  appData.moneyPerDay < 2000){
    console.log('Нормально');
} else if (appData.moneyPerDay < 1000) {
    console.log('Богато');
} else {
    console.log('Ошибка');
}