const number = document.querySelector('#number');
const button = document.querySelector('button')
const btnMinus = document.querySelector('#minus');
const btnPlus = document.querySelector('#plus');
let counter = Number(number.textContent);

// тут у меня было 2 идеи:
// 1 - написать атрибут disable в теге в HTML
// 2 - написать условие (закомментированно ниже; специально не стал это
// удалять) в случае если пользователь уже нажимал на кнопки и число > 0.
// решил выбрать 1 т.к., понятное дело, при перезагрузке сайта число 
// (данные) не сохраняет(ют)ся, а сделать так, чтобы они сохранялись еще
// не знаю 
 
// if (!counter) {
//     button.setAttribute('disabled', '');
//     console.log('set outta function');
// }
    
btnMinus.onclick = () => {
    number.textContent = --counter;
    if (!counter) {
        button.setAttribute('disabled', '');
        console.log('set');
    }
}
btnPlus.onclick = () => {
    number.textContent = ++counter;
    if (button.hasAttribute('disabled')) {
        button.removeAttribute('disabled');
        console.log('removed');
    }
}