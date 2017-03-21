//aby dodać skrypt na strone trzeba dodać w index.html w sekcji head:
// <script type="text/javascript" src="myscript.js"></script> 


//document.write() służy do wypisywania zawartości na ekran w sposób dynamiczny
document.write('<h1>Witaj na mojej stronie!</h1>');

//dodanie alertu - wyskakującego okienka po uruchomieniu strony
//alert("Cześć");


//ZDARZENIA
/*
1. onclick - uruchomienie skryptu następuje w momencie kliknięcia na wybrany element na stronie
	(    np. <button id="zmien" onclick="zmienElementId()">Zmien element<button>     )

2. onload - uruchomienie skryptu następuje w momencie uruchomienia/odświeżenia strony (np.    window.onload)

3. onscroll - przewinięcie paska

4. onresize - zmiana rozmiaru okna przeglądarki
*/


//FUNKCJE JavaScript

//1.tworzymy funkcje zmienElementId();  gdzies w index.html musi byc przycisk z wywołaniem funckji  --> onlaod="zmienElementId()"
function zmienElementId() 
{
	var napis = "Lasy";		//zmienna pomocnicza

	document.getElementById('strefa1').innerHTML = napis + " równikowe";	//pobieramy element o id strefa1 i podmieniamy zawartosc
	document.getElementById('strefa1').style.color = 'white'; 			//zmieniamy kolor tekstu na biały
}

//2. zamiana wszystkich tagów na stronie jak np tag p
function zmienTag()
{
	var pharagraphs = document.getElementsByTagName('p');
	console.log('Na stronie znajdują się: ' + pharagraphs.length + " akapity");		//liczy ilość akapitów i wyświetla info
}

// #######################################################################################################################

//FUNKCJE jQuery --> wywoływane kiedy struktura dokumentu jest już utworzona (  $(document).ready(function(){});  )
$(document).ready(function()
{
	$('.slider_unslider').unslider();

});

// #######################################################################################################################

//FUNKCJE underscore.js

//1. Funkcja mieszajaca liczby _.shuffle
//każda funkcja w tej bibliotece musi zaczynać się od "podłogi i kropki" --> _.nazwaFunkcji(argument);
var array = [1,2,3,4,5,6];
var shuffle = _.shuffle(array);

console.log(shuffle);

