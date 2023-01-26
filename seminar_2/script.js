
/*Задание 1
Создать переменные num1, num2 которые пользователь вводит с клавиатуры
Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
*/

//Решение

/*
const num1 = Number(prompt(`Введите первое число`));
const num2 = Number(prompt(`Введите второе число`));

if ( num1 >= 1 ) {
    alert(`Число ${num1} больше или равно 1`)
} else {
    alert(`Число ${num1} меньше 1`) };

if ( num2 >= 3 ) {
    alert(`Число ${num2} больше или равно 3`)
} else {
    alert(`Число ${num2} меньше 3`) };
*/


/* Задание 2
Перепишите код к тернарному оператору
let test = true;
if (test === true) {
console.log('+++');
} else {
console.log('---');
}
*/

//Решение

/*
let test = true;
console.log((test === true) ? '+++':'---');
*/


/*
Задание 3
В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
*/

//Решение

/*
const day = Number(prompt`Введите число в диапозоне от 1 до 31`);
if (day >=1 & day <= 10) {
    alert(`Число ${day} относится к первой декаде`); 
} else if (day >=11 & day <= 20) {
    alert(`Число ${day} относится к второй декаде`);
} else if(day >=21 & day <= 31) {
    alert(`Число ${day} относится к третьей декаде`);
} else {
    alert(`Введено ${day} не соответствует условию`);
}
*/

/*
Задание 4
Необходимо от пользователя получить число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: пользователь всегда вводит корректное положительное целое число.
*/

//Решение

/*
const num = Number(prompt`Введите корректное положительное целое число`);
const units = (num%10);
const dozens = Math.trunc (num%100/10);
const hundreds = Math.trunc (num%1000/100);
alert(`"В числе ${num} количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${units}"`);
*/
