/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal (ad esempio).
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
Consigli del giorno:
1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"


-preparare array imgs
-" array elem html
- memorizzare un indice
-pulsante up
    -indice--
    -aggiornare img
    -aggiornare template
- pulsante down
    -indice ++
    -aggiornare img
    -aggiornare template
*/





const imgs = ["img/01.webp", "img/02.webp",
              "img/03.webp", "img/04.webp",
              "img/05.webp"];
            
const upArrowEl = document.getElementById("up-arrow");
const downArrowEl = document.getElementById("down-arrow");
const activeImgEl = document.getElementById("my-img");
const dotsContainerEl = document.getElementById("dots-container");

let indice = 4;

activeImgEl.src = imgs[indice];

upArrowEl.addEventListener("click", function() {
        if ((indice - 1) < 0) {
            indice = imgs.length - 1;
        } else {
            indice--;
        }
        activeImgEl.src = imgs[indice];
        console.log(indice)
    })

downArrowEl.addEventListener("click", function() {
        if ((indice + 1) == imgs.length) {
            indice = 0;
        } else {
            indice++;
        }
        activeImgEl.src = imgs[indice];
        console.log(indice)
    })







