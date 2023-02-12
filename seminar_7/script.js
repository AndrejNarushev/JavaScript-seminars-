/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
*/

// Решение
/*
let c = document.querySelectorAll('.dropdown-item').forEach(c => c.classList.add('.super-dropdown'));
*/


/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
*/

//Решение
/*
document.querySelector('.btn').classList.toggle('btn-secondary');
*/


/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
*/

//Решение
/*
document.querySelector('.menu').classList.remove('dropdown-menu');
*/


/*
4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
`<a href="#">link</a>`
*/

//Решение
/*
document.querySelector('div.dropdown').insertAdjacentHTML('afterend', '<a href="#">link</a>');
*/


/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/

//Решение
/*
document.getElementById('dropdownMenuButton').id = 'superDropdown';
*/


/*
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/

//Решение
/*
document.querySelector('[aria-labelledby="dropdownMenuButton"]').dataset.dd = "3";
*/



/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/
//Решение
/*
document.querySelector('.dropdown-toggle').removeAttribute('type');
*/

