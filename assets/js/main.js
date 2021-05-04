//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti.

//Creare lista di ingrediente e assegnare prezzo a ciascuno
var ingredienti = [
    ['cheese', '1'],
    ['tomato', '1'],
    ['egg', '1.5'],
    ['lettuce', '2'],
    ['mustard', '0.5'],
    ['ketchup', '0.5'],
]

//Definire codici sconto
var coupons = ['boolean20', 'gicunho20']

/**
 * ### Generatore contenuto HTML per ingredienti
 * 
 * @param {object} list - lista array con ingredienti e prezzi
 * @param {object} el - collegamento a HTML per inserire il contenuto
 */
function generazioneIngredienti (list, el){
    for (i= 0; i < list.length; i++) {
        el.insertAdjacentHTML('beforeend',
        `
        <div class="form-group my-2">
            <img width=50 src="./assets/img/${list[i][0]}.svg"> </img>
            <span class="text-capitalize font-weight-bold mx-2">${list[i][0]}</span>
            <label class="checkbox text-pink">add
            <input type="checkbox" name="${list[i][0]}" id="${list[i][0]}" data-price="${list[i][1]}" class="mx-2">
            <span class="checkmark"></span>
            </label>
        </div>
        `
        )
    }
}

/* Richiamo funzione per generare gli ingredienti */
generazioneIngredienti (ingredienti, document.getElementById('ingredients'));

// Pulsante "calculate" per generare il prezzo con relativi extra con funzione anonima
document.getElementById('price_generator').addEventListener('click', function (){
    //Definire prezzo base panino
    var prezzoPanino = 10;

    var checks = document.querySelectorAll("input[type='checkbox']");
   
    //Incremento prezzo panino quando un ingrediente viene checkato
    var sommaIngredienti = null;

    for (i= 0; i < checks.length; i++) {
        var element = checks[i];
        if (element.checked){
            sommaIngredienti += Number(element.getAttribute('data-price'));
        }
    }

    var prezzoTotale = prezzoPanino + sommaIngredienti;

    //verifica codice sconto
    for (j= 0; j < checks.length; j++) {
        if (document.getElementById('coupon').value == coupons[j]) {
            
            //e calcolo prezzo finale scontato
            prezzoTotale = prezzoTotale - (prezzoTotale * 20)/100;
        }
    }
    document.querySelector('#price').innerHTML = '$ ' + prezzoTotale;
})

