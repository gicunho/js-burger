//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

//Creare lista di ingrediente e assegnare prezzo a ciascuno
var ingredienti = [
    ['cheese', '1'],
    ['egg', '1.5'],
    ['mustard', '0.5'],
    ['tomato', '1'],
    ['lettuce', '2'],
    ['ketchup', '0.5'],
]

function generazioneIngredienti (list, el){
    for (i= 0; i < list.length; i++) {
        el.insertAdjacentHTML('afterbegin',
        `
        <div class="form-group">
            <img width=30 src="./assets/img/${list[i][0]}.svg"> </img>
        
            <label for="${list[i][0]}">${list[i][0]}</label>
            <input type="checkbox" name="${list[i][0]}" id="${list[i][0]}" data-price="${list[i][1]}">
        </div>
        `
        )
    }
}

generazioneIngredienti (ingredienti, document.getElementById('ingredients'))
//Incremento prezzo panino quando un ingrediente viene checkato
document.getElementById('price_generator').addEventListener('click', function (){
    //Definire prezzo base panino
    var prezzoPanino = 10;

    var checks = document.querySelectorAll("input[type='checkbox']");

    var sommaIngredienti = null;

    for (i= 0; i < checks.length; i++) {
        var element = checks[i];
        if (element.checked){
            sommaIngredienti += Number(element.getAttribute('data-price'))
        }
    }
    console.log(sommaIngredienti);

    var prezzoTotale = prezzoPanino + sommaIngredienti;
    console.log(prezzoTotale);
})
//Definire codici sconto e calcolo prezzo finale scontato
//Funzione per pulsante di generazione prezzo

