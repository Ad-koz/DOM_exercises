// Zad. 2
// a) Usuń wszystkie elementy z body przy pomocy którejś z poznanych metod.
// b) Odwtórz widok strony przy pomocy poznanych metod (document.createElement, element.appendChild())
// Nie dotykamy pliku HTMLowego, chyba ze to konieczne.


// const bodyElement = document.querySelector("body");
// const bodyToRemove = bodyElement.remove();

// const newHtml = document.querySelector("html");
// const rebuildBody = document.createElement("body");
// newHtml.append(rebuildBody);

// const newBody = document.querySelector("body");
// const rebuildNav = document.createElement("nav");
// newBody.appendChild(rebuildNav);

// const newNav = document.querySelector("nav");
// const rebuildSpan1 = document.createElement("span");
// const rebuildSpan2 = document.createElement("span");
// const rebuildSpan3 = document.createElement("span");
// const rebuildSpan4 = document.createElement("span");
// newNav.appendChild(rebuildSpan1);
// newNav.appendChild(rebuildSpan2);
// newNav.appendChild(rebuildSpan3);
// newNav.appendChild(rebuildSpan4);

// const newSpansArray = [...document.querySelectorAll("span")];

// newSpansArray.map((el) =>el.setAttribute("class","nav-span"));

// const rebuildH1 = document.createElement("H1");
// const newSpan = document.querySelector("span");
//NIEDOKOŃCZONE

//ROZWIĄZANIE Z ZAJĘĆ

// document.body.innerHTML = "";

// navElement.remove();
// contentDiv.remove();

// const navEl = document.createElement("nav");
// const navH1 = document.createElement("h1");
// navH1.setAttribute("id", "nav-h1");
// navH1.textContent = "DOM";
// navEl.appendChild(navH1);

// const spanTC = ["Home", "Page 1", "Page 2", "Page 3"];
// spanTC.forEach((el) => {
//   const span = document.createElement("span");
//   if (el === "Home") span.setAttribute("id", "first-span");
//   span.setAttribute("class", "nav-span");
//   span.textContent = el;
//   navEl.appendChild(span);
// });
// document.body.appendChild(navEl);

// const divContent = document.createElement("div");
// divContent.setAttribute("id", "content");
// document.body.appendChild(divContent);
// //
// const renderHomePage = () => {
//   const article = document.createElement("article");
//   const articleH2 = document.createElement("h2");
//   articleH2.textContent = "How to access the DOM?";
//   article.appendChild(articleH2);
//   const articleP = document.createElement("p");
//   articleP.setAttribute("class", "article-paragraph");
//   articleP.setAttribute("id", "5");
//   articleP.textContent =
//     "You don't have to install anything additional, just JavaScript will do. We have a few methods called 'selectors', these methods are used to access DOM elements and are found on the global 'document' object, which is an object representation of the whole HTML document. Here are some of them:";
//   article.appendChild(articleP);
//   const ul = document.createElement("ul");
//   article.appendChild(ul);
//   const li = document.createElement("li");
//   li.textContent = 'document.querySelector("cssSelectorHere")';
//   ul.appendChild(li);
//   divContent.appendChild(article);
// };
// renderHomePage();

//Zrobiliśmy wrapa "renderHomePage" aby zrobić tak, że to wszytsko wydarzy się jak klikniemy na homepage.

// Zad 3. Formularz kontaktowy
// a) stwórz funkcję displayForm
// W funkcji:
// b) stwórz element <form> i nadaj mu id 'contact-form'
// c) stwórz element <h2> i nadaj mu textContent 'Contact us!'
// d) stwórz element <input> i nadaj mu type 'email' oraz id 'contact-form-input-email'
// e) stwórz element <textarea> i nadaj mu id 'contact-form-textarea'
// f) stwórz element <button> i nadaj mu type 'submit', id 'contact-form-submit-button' oraz textContent 'Send'
// g) podepnij wszystkie elementy (przy pomocy appendChild) do elementu form, a sam form do diva id content
// h) testowo wywołaj funkcję

// function displayForm() {
//     const createForm = document.createElement("form");
//     createForm.setAttribute("id", "contact-form");
    
//     const createH2 = document.createElement("h2");
    
//     const newH2 = createForm.appendChild(createH2);
//     newH2.textContent = "Contact us!";
//     createForm.appendChild(createH2);

//     const newInput = document.createElement("input");
//     newInput.setAttribute("type", "email");
//     newInput.setAttribute("id", "contact-form-input-email");
//     createForm.appendChild(newInput);

//     const newTextArea = document.createElement("textarea");
//     newTextArea.setAttribute("id", "contact-form-textarea");
//     createForm.appendChild(newTextArea);

//     const newButton = document.createElement("button");
//     newButton.setAttribute("type", "submit");
//     newButton.setAttribute("id", "contact-form-submit-button");
//     newButton.textContent = "Send";

//     createForm.appendChild(newButton);

//     const divContent = document.querySelector("#content");
//     divContent.appendChild(createForm);

// }

// displayForm()

//ROZWIĄZANIE Z ZAJĘĆ
// const displayForm = () => {
//     const form = document.createElement("form");
//     form.setAttribute("id", "contact-form");
//     const h2 = document.createElement("h2");
//     h2.textContent = "Contact us!";
//     const input = document.createElement("input");
//     input.setAttribute("type", "email");
//     input.setAttribute("id", "contact-form-input-email");
//     const textarea = document.createElement("textarea");
//     textarea.setAttribute("id", "contact-form-textarea");
//     const button = document.createElement("button");
//     button.setAttribute("type", "submit");
//     button.setAttribute("id", "contact-form-submit-button");
//     button.textContent = "Send";
//     form.appendChild(h2);
//     form.appendChild(input);
//     form.appendChild(textarea);
//     form.appendChild(button);

//     const divContent = document.querySelector("#content");
//     divContent.appendChild(form);
    
    

//     //Tu poniżej sposób jak zablokować automatyczny refresh (czyli funkcję domyślną -deafultową). 
//   form.addEventListener("submit", (event) => {
//     event.preventDeafult();
//     console.log(event);

    
// //   //ŚCIĄGANIE WARTOŚCI Z INPUTÓW

//   const email = input.value;
//   const message = textarea.value;
//   console.log(email, message);
//   });
//     // //przykład eventu 
//     // h2.addEventListener('click', () => {
//     //     alert("H2 zostało kliknięte");
    
//       //}) //czyli fuknckja wykona się przez kliknięcie na h2

// //     //ELEMENT SELECT
  
//   const select = document.createElement('select');

//   const option1 = document.createElement('option');
//   option1.textContent = "Error";
//   option1.value = "error";
  
//   const option2 = document.createElement('option');
//   option2.textContent = "Suggestion";
//   option2.value = "suggestion";
  
//   const option3 = document.createElement('option');
//   option3.textContent = "Message";
//   option3.value = "message";

//   select.appendChild(option1);
//   select.appendChild(option2);
//   select.appendChild(option3);

// //     //nie wiem co to
   
// const spans = document.getElementsByTagName("span");

// spans[0].addEventListener("click", () => {
//   divContent.innerHTML = "";
//   renderHomePage();
// });

// spans[1].addEventListener("click", () => {
//   divContent.innerHTML = "";
  
// });
// }

//   displayForm();

  //FUNCKJA ADDEVENTLISTENER
  //funkcja addEventListener to funckja pozwalająna nam na nasłuchiwanie  na eventy i reakcje na te eventy
  //przyjmuje 2 argumenty: pierwszy to string dla eventu, drugi to funkcja która ma się wykonać przy wyłapaniu wcześniej zdefiniowanego eventu.

  //W evencie mamy dostęp do Emitera

  //dwa główne eventy używane najczęściej to: "click" i "submit"
//Czy strona ma się odświeżać po kliknięciu submit? Nie, chcemy tego unikać, to jest domyslna funkcja, którą chcemy zablokować.
//WZÓR DLA PRZYPADKU SUBMIT (ZAWSZE JEST PREVENTDEAFULT)
// form.addEventListener("submit", (event) => {
//     event.preventDeafult();
//     console.log(event);
//   });

//   //ŚCIĄGANIE WARTOŚCI Z INPUTÓW

//   const email = input.value;
//   const message = textarea.value;
//   console.log(email, message);

// Zad 4. Kalkulator
// 1. Stwórz funkcję renderCalculator (zwykła fn)
// W funkcji:
// 2. Stwórz element <form> i ustaw jego id na 'calculator'
// 3. Stwórz 2 inputy, oba będą miały type "number" (setAttribute), pierwszemu nadaj id 'first-number-input', drugiemu 'second-number-input'
// 4. Stwórz element <select>
// 5. Stwórz zwykły array ["+", "-", "*", "/"], nazwij go options.
// 6. Metodą map przejedź po arrayu options i zapisz wynikk do zmiennej optionElements.
// W metodzie:
// - stwórz element <option>
// - nadaj mu atrybut value na aktualny element po którym iterujesz (pierwszy parametr metody map)
// - nadaj mu textContent na aktualny element po którym iterujesz (pierwszy parametr metody map)
// - zwróć z mapa element <option> przy pomocy reutrn
// 7. Przypnij każdy element <option> do selecta (pkt 4)
// 8. Stwórz element button, type "submit", id 'calculator-submit-button', textContent 'Calculate'
// 9. Stwórz element <span>, nadaj mu id 'result-span'
// 10. Stwórz element <h2>, textContent 'Calculator'
// 11. Podepij wszystkie elementy do elementu form, kolejność:
// - h2, firstNumberInput, secondNumberInput, select, submitButton, resultSpan
// 12. Podepnij element <form> do diva content
// 13. Sam kalkulator wyświetlaj na podstronie pod przyciskiem Page 2 (opcjonalne)
// const optionElements = options.map((el) => {
//   ...
//   return option
// })  
const spans = document.getElementsByTagName("span");

const divContent = document.querySelector("#content");


const renderCalculator = () => {
    const form = document.createElement("form");
    form.setAttribute("id", "calculator");

    const input1 = document.createElement("input");
    const input2 = document.createElement("input");

    input1.setAttribute("type", "number");
    input2.setAttribute("type", "number");

    input1.setAttribute("id", "first-number-input");
    input2.setAttribute("id", "second-number-input");

    const button = document.createElement("button")
    button.setAttribute("type", "submit");
    button.setAttribute("id", "calculator-submit-button");
    button.textContent = "Calculate";

    const span = document.createElement("span");
    span.setAttribute("id", "result-span");

    const h2 = document.createElement("h2");
    h2.textContent = "Calculator";

    const select = document.createElement("select");

    const options = ["+", "-", "*", "/"];

    const option1 = document.createElement("option")
    option1.value = options[0]
    option1.textContent = options[0]
  
    const option2 = document.createElement("option")
    option2.value = options[1]
    option2.textContent = options[1]
 
    const option3 = document.createElement("option")
    option3.value = options[2]
    option3.textContent = options[2]
   
    const option4 = document.createElement("option")
    option4.value = options[3]
    option4.textContent = options[3]
    
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);

    form.appendChild(h2);
    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(select);
    form.appendChild(button);
    form.appendChild(span);

    divContent.appendChild(form);
    
    //Dalsza część zadania // Zad. 4.2
  // 1. Na form dodaj eventListener (addEventListener), reaguj na event 'submit', pamiętaj o preventDefault w środku funkcji callbackowej.
  //WZÓR DLA PRZYPADKU SUBMIT (ZAWSZE JEST PREVENTDEAFULT)
// form.addEventListener("submit", (event) => {
//     event.preventDeafult();
//     console.log(event);
//   });
form.addEventListener("submit", (event) => {
  event.preventDeafult();
// W EL:
//   // 2. Ściągnij wartości z obu inputów i selecta.

const number1 = Number(input1.value);
const number2 = Number(input2.value);
const operationType = select.value;

// 3. W zależności od wybranego typu działania, wykonaj odpowiednie operacje matematyczne i wyświetl wynik jako textContent resultSpana.
//   //resultSpan.textContent = *tutaj twój wynik*

if (operationType === options[0]) span.textContent = number1 + number2;
else if (operationType === options[1]) span.textContent = number1 - number2;
else if (operationType === options[2]) span.textContent = number1 * number2;
else if (operationType === options[3]) span.textContent = number1 / number2;
});  
};
//punkt 13

spans[2].addEventListener("click", () => {
    divContent.innerHTML = "";
    renderCalculator();
  });



//Zad 5. ZADANIE DODATKOWE

// "https://jsonplaceholder.typicode.com/todos/"
// 1. Stwórz funckję fetchAndDisplayJSON (async)
// const spans = document.querySelectorAll("span")
// const divContent = document.querySelector("#content");
const fetchAndDisplayJSON = () => {
    
// W funkcji:
// 2. Wykonaj fetcha i rozpakuj dane (fetch, .json())
const data = [];
fetch('https://jsonplaceholder.typicode.com/todos/')
.then(response => response.json())
.then((data) => (data));
// 3. Stwórz element <ul>

const ul = document.createElement("ul");

// 4. Za pomocą metody .map(), przejeżdżając po otrzymanych, stwórz listę z elementami li (w środku funkcji callbackowej mapa musisz stworzyć element <li>, w zależności od pola completed ustawić kolor na zielony lub czerwony oraz ustawić textContent w którym ma się znaleźć User id, id, i title, na końcu funkcji callbackowej zwróć skonfigurowany element li)
// element.style.color = 'red' / element.style.color = 'green'
// textContent: `User id: ${el.userId}, Todo id: ${el.id}, ${el.title}
// return li

const dataElements = data.map( (el) => {
    const li = document.createElement("li");
   
    if (el.completed) li.style.color = "green";
    else li.style.color = "red";

    li.textContent = `User id: ${el.userId}, Todo id: ${el.id}, ${el.title}`;
    return li;
});

// 5. Za pomocą pętli forEach podepnij wszystkie li do listy <ul> (pkt 3)
dataElements.forEach((dataElement) => {
    ul.appendChild(dataElement);
});
// 6. Podepnij <ul> (pkt 3) do content div.

divContent.appendChild(ul);
}
// (koniec funkcji)
// 7. Stwórz nową podstronę tak jak przed chwilą (homeSpans[2].addEventListener('click'...), w środku event listenera wywołaj fetchAndDisplayJSON
// const liList = data.map((el) => {
//   // const li = ...
//   // if(el.completed) li.style.color = 'green'
//   // else li.style.color = 'red'
//   // li.textContent
//   // return li
// });
spans[1].addEventListener("click", () => {
divContent.innerHTML = "";
fetchAndDisplayJSON()
});