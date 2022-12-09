//1. document
//Document to obiekt globalny generowany przez preglądarkę, jest to obiektowa reprezentacja naszego dokumentu HTML.
// console.log(document);
// console.log(document.head);
// console.log(document.body);
//czyli można wykonać reperezentację dokumentu html w sposób obiektowy

//2. selektory


// Selektory to funkcje do wybierania elementów ze strony.
//a.) document.querySelector()
//Queryselector przyjmuje jako argument selektor CSSowy, zwraca pierwszy pasujący element (uwaga - pierwszy pasujący), jeżeli nie znajdzie nic to zwraca null.

// - id
//const navH1 = document.querySelector("#nav-h1");//czyli jesli chcę odnieść się do jakiegos id z arkusza CSS to używam takiego samego znacznika jak w stylach css, czyli #.

//console.log(navH1); // i wyswietli się tak jak jest to zapisane w arkuszu CSS

//- class - tu użyjemy kropki
// const firstNavSpan = document.querySelector(".nav-span");
// console.log(firstNavSpan);

// - tagname - jak odołac się do konkretnego taga, oczywiście wyswietli się pierwszy pasujący
// const navElement = document.querySelector("nav");
// console.log(navElement);

//b.) document.querySelectorAll()
//Przyjmuje jako argument selektor CSSowy, zwraca
//Nodelist to array ale nie da się na nim zbyt wielu metod wywołać
// const navSpans = document.querySelectorAll(".nav-span");
// console.log(navSpans);
//aby wyświetlić konkretny span, np trzeci:
// console.log(navSpans[2]);
//Zamiana Navspans w zwykły array
// const navSpansArray = [...navSpans];
// console.log(navSpansArray);
// navSpansArray.map((el) =>el.id);
// spread - rozbicie listy na pojedyncze elementy
//przykład [1, 2, 3, 4] => ...[1, 2, 3, 4] => 1, 2, 3, 4
//spread wykorzystujemy żeby wyciągnąć z tablicy, lub innego obiektu, wszystkie elementy poza, dostajemy listę pojedynczych elementow niezaleznych od siebie. Głównie stosowane do kopiowania głębokiego, oraz do rozrzucania elementów do funkcji

//c.) document.getElementById()
//Metoda przyjmuje stringa z id, zwraca element o danym id, jeżeli nie znajdzie nic to zwraca null. Nie trzeba stosować #, bo ta metoda służy tylko do id.
// const contentDiv = document.getElementById("content");
// console.log(contentDiv);
//d.) document.getElementByClassName()
//Metoda przyjmuje stringa z klasą, zwraca HTMLCollection, jeżeli nie znajdzie żadnego elementu to zwróci null.

// const articleParagraphs = document.getElementsByClassName("article-paragraph");

//HTMLCollection to coś podobnego co Nodelista, ale nie można na tym zadnych metod wykonać, w przeciwienstwie do Nodelisty. 
//warto zastosować taki zapis, żeby od razu wykonać spread, żeby pozbyc się tej tablicy HTMLCollection, która jest niewygodna
// const articleParagraphs = [...document.getElementsByClassName("article-paragraph"),
// ];
// console.log(articleParagraphs);

//2. SUB-SELECTORy (nazwa wymyslona przez trenera, taka nazwa nie istnieje w dokumentacji) Jakaś własność na juz wybranym elemencie i odwolanie się do jakiegos elementu względem tego elementu, np do dzieci danego elementu

//a.) element.children - tu się pobiora wszystkie elementy ktore są dziecmi tego elementu, w praktyce stosuje się to czesciej niż childNodes
// const contentDiv = document.getElementById("content")
// console.log(contentDiv);
// console.log(contentDiv.children);

//b.) element.childNodes - tu się pobierze Nodelist, czyli wszytskie nody a nie tylko elementy
// console.log(contentDiv.childNodes);

//c.) element.firstElementChild
//const list = document.querySelector("ul");
// console.log(list);
// console.log(list.firstElementChild);


//d.) element.lastElementChild
// const list = document.querySelector("ul");
// console.log(list.lastElementChild);

//e. element.nextElementSibling / previousElementSibling
// const middleLi = list.children[1];
// console.log(middleLi.nextElementSibling);
//previousElementSibling działa tak samo jesli chodzi o zapis

//f.) element.parentElement - dostaję element wyżej

// //console.log(middleLi.parentElement);

// //ZADANIE 1. 
// //Zapisz w zmiennych wszystkie elementy występujące w naszym dokumencie HTML. Staraj się nie modyfikować samego HTMLa, lecz jeżeli będzie to konieczne, zrób to.

// //po elemencie
// const headElement = document.querySelector("head");
// console.log(headElement);

// //po rodzicu elementu
// const navElement = document.querySelector("nav");
// console.log(navElement.parentElement);

// //po id
// const divId = document.querySelector("#content");
// console.log(divId);

// //po klasie
// const pClass = document.querySelector(".article-paragraph");
// console.log(pClass);

// //po querySelectorAll

// const allArticles = document.querySelectorAll("article");
// console.log(allArticles);

// //wyświetlenie trzeciego artykułu

// console.log(allArticles[2]);

// //po getElementById

// const h1ById = document.getElementById("nav-h1");
// console.log(h1ById);

// //po getElementbyClassName

// console.log(document.getElementsByClassName("nav-span"));

//po nextElementSibling

//ROZWIĄZANIE Z ZAJĘĆ
// const body = document.querySelector("body");
// console.log(body);
// const nav = document.querySelector("nav");
// const articles = contentDiv.children;
// const firstArticleH2 = articles[0].firstElementChild;
// const firstArticleP = articles[0].lastElementChild;
// const listItems = list.children;
// console.log(nav);
// console.log(articles);
// console.log(firstArticleH2);
// console.log(firstArticleP);
// console.log(listItems);

//3. TWORZENIE I DODAWANIE ELEMENTÓW

//a.) document.createElement()
//createElement jest funkcją która tworzy elementy jako obiekty JSowe. Ten obiekt możemy dowolnie modyfikować do DOM aby wyświetlić element na stronie. Jako argument przyjmuje nazwę tagu w stringu.
// const additionalLi = document.createElement('Li')
// console.log(additionalLi);
// additionalLi.textContent = "This was appended using .appendChild() method";
// additionalLi.id = 'additional-Li';
// console.log(additionalLi);

//b.) element.appendChild()
//czyli najpierw tworzymy ten element za pomocą createElement a potem go dodajemy za pomocą appendchild
//appendChild to metoda do wstawiania elementów stworzonych w JSie do DOM. wywołuje się tą metodę na elemencie do którego chcemy wstawić nowy element, a jako argument podajemy element do wstawienia (element stworzony w JSie). AppendChild wstawia elementy na sam koniec.
//list to zmienna przechowująca selektor do ul'a na stronie (jest wyżej)
//list.appendChild(additionalLi)

//c.) element.insertBefore()
//Metoda doda nowy element (1 argument przed element podany w drugim argumencie. Metodawywołana na elemencie w którym mają zajść zmiany
// const additionalLi2 = document.createElement('li')
// additionalLi2.textContent.Content = 'NoweLi, wstawione przy pomocy insertBefore()'
// const firstLi = list.firstElementChild;
// list.insertBefore(additionalLi2, firstLi)// pierwszy argument to ten element który chcemy wstawić, a drugi to gdzie chcemy to wstawić

//d.) string + insertAdjacentHTML()
//const html = `<li id= "li-to-remove">Li to remove</li>`;
//list.insertAdjacentHTML("beforeend", html); //beforeend to określenie gdzie ma się pojawic ten wstawiony element, więcej na temat tej lokalizacji w MDN w element.insertAdjacentHTML()

//4. USUWANIE ELEMENTÓW
//a.) Czyszczenie zawartości elementów przy pomocy innerHTML.
//const liToRemove = document.getElementById('li-to-remove')
//liToRemove.innerHTML = '';
// <li id="li-to-remove">Li to remove <p>123321</p></Li>
//*innerHTML ='' *
/*<li id = "li-to-remove"></li>*/

//b.) element.remove()
//Ta metoda po prostu usuwa element na ktorym zostala wypowlana
//liToRemove.remove();

//c.)element.removeChild()
// Metoda usuwa wskazany element dziecko elementu na którym została wyowałana.
//list  to wyżej zdefiniowana zmienna
// list.removeChild(list.firstElementChild);

// 5. ZAMIANA ELEMENTÓW.
// a.) element.replaceChild()
//Matoda zamienia podane w argumentach elementy, 1 wstawia, 2 usuwa.
////list.replaceChild(additionalLi2, list.firstElementChild);
//replaceChild() = remove() + appendChild() /insertBefore() / insertAdjacentHTML()

//6. KLONOWANIE ELEMENTÓW

// a.) element.cloneNode()
//Metoda klonująca element.
//Metoda klonująca element. Wywoływana na elemencie, który chcemy sklonować.
//a1.) klonowanie płytkie - same tagi
// //
//a2.) klonowanie głębokie - tag z całą zawartością
// const deepDivClone = contentDiv.cloneNode(true);
// console.log(deepDivClone);

//klonowanie płytkie - false, klonowanie głębokie - true

//7. AKTUALIZACJA/DODAWANIE/USUWANIE ZAWARTOŚCI ELEMENTÓW
//Metody stosowane zamiennie, jednak standardem jest textContent, tej własności będziemy używać.
// shallowDivClone.textContent = "123321";
// console.log(shallowDivClone);
// shallowDivClone.innerText = "321123";
// console.log(shallowDivClone);

//b.) element.innerHTML
// console.log(list.innerHTML);
// const html2 = "<h1>lalalalala</h1>";
// list.innerHTML = html2;

//c.) element.appendChild() - też słuzy do aktualizacji zaw elementow

//8. AKTUALIZACJA/DODAWANIE/USUWANIE ATRYBUTÓW ELEMENTÓW.

// A.) element.attributes
//Główne zastosowanie attributes to sprawdzenie ilości atrybutów danego elementu.
// console.log(liToRemove.attributes.length);

//b.) element.setAttribute()
//Metoda w pierwszym argumencie przyjmuje nazwę atrybutu do dodania, w drugim wartość tego atrybutu.
// const contentDiv = document.getElementById("content")
// contentDiv.setAttribute("class", "main-container");
// Zad. Na wszystkich h2 w article dodaj klasę "article - heading"
// const allH2 =[...document.querySelectorAll("h2")]
// allH2.forEach((h2) =>{
// h2.setAttribute("class", "article-heading")
// });

const allH2 = document.querySelectorAll("h2");
allH2.setAttribute("class", "article-heading");



//c.) element.removeAttribute() - a wrgumencie metoda przyjmuje nazwę atrybutu który ma usunąć, metoda jest wywoływana na elemencie z którego chcemy usunąć atrybut
// allH2.forEach((h2) => {
//     h2.removeAttribute("class");
// });
// //d) inne
// contentDiv.id = "123";
// contentDiv.className = "312";
// contentDiv.name = "456";