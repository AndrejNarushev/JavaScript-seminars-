const productBox = document.querySelector('.demo'); // родительский элемент

    // тег article используется для отключения начального блока


    productData.forEach(productsData => {

    const productEl = document.createElement(`div`); // создаем тег div
    productEl.classList.add(`karta`); // присваиваем класс


    const productImg = document.createElement(`img`); // создаем фото
    productImg.classList.add(`img`); // присваиваем класс
    productImg.setAttribute(`alt`,productsData.alt); // присватваем значение alt
    productImg. src = productsData.src; // приваиваем фото
    
 

    const productLink = document.createElement(`a`); // создаем элемент (а) для указания ссылки
    productLink.classList.add(`product_a`);
    productLink.href = productsData.href; // указываем ссылку
    productLink.textContent = productsData.name // присваиваем новое описание
    productLink.setAttribute(`target`,"_blank"); // открытие ссылки в новом окне

    const productDivP = document.createElement(`div`); // создаем тег div
    productEl.classList.add(`divP`); // присваиваем класс

    const productText = document.createElement(`p`); //создаем элемент (p) для указания текста
    productText.classList.add(`product_p`); // присваиваем класс
    productText.textContent = productsData.option; // добавляем описание

   
    productEl.appendChild(productImg);  //добавляем фото в div
    productEl.appendChild(productLink); //добавляем ссылку в div
    productBox.appendChild(productEl); // добавляем div в родительский элемент
    productEl.appendChild(productDivP); //добавляем divP в родительский элемент
    productDivP.appendChild(productText); // добавляем  (p) параграф в divP

    });