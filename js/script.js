/*
Consegna
L'utente clicca su un bottone
che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella,
la cella cliccata si colora di azzurro ed emetto
un messaggio in console con il numero della cella cliccata.
*/

// Creo variabili per utilizzare i buttons
const playBtnEl = document.getElementById("play-btn");
const refreshBtnEl = document.getElementById("refresh-btn");

const refreshEl = document.getElementById("refresh");

const youLose = document.getElementById("you-lose");
const youWin = document.getElementById("you-win");

// Creo una variabile per bersagliare il container dove creeremo la griglia
const gridEl = document.getElementById("grid");

// Creo variabile per bersagliare il selettore per la difficoltà
const difficultyEl = document.getElementById("difficulty-select");

// Variabile per terminare non rendere piu cliccabile la griglia
let endGame = false;

let contatore = 0;




// Creo un evento al click del button
playBtnEl.addEventListener("click", function() {
    
    // al click il play button sparisce
    playBtnEl.style.display = "none";
    // e compare il button per ricaricare la pagina e giocare di nuovo
    refreshEl.style.display = "block";
    
    // al click il display della griglia passa da none a flex
    gridEl.style.display = "flex";
    
    // Creo variabile per usare il valore della difficoltà selezionato
    let difficulty = difficultyEl.value;
    
    // Creo un array di 16 numeri casuali
    const bombs = [];
    
    console.log(bombs);

    if (difficulty == 1) {

        // Creo un ciclo che genera le celle all'interno della griglia
        for (let i = 1; i <= 100; i++) {
            
            const squareEl = createSquare(i, 10, gridEl);

            createRandomNum(bombs, 100);
        
            refreshBtnEl.addEventListener("click", function(){
                window.location.reload();
            });

            // creo un evento al click della cella
            squareEl.addEventListener("click", function(){

                if(endGame) {
                    return;
                };

                console.log(bombs);

                if (bombs.includes(i)){

                    gridEl.style.filter = "blur(2px)";

                    youLose.style.display = "block";

                    squareEl.style.backgroundColor = "red";
                    squareEl.style.color = "white";


                    endGame = true;


                } else {

                    // al click della cella deve essere aggiunta la classe active
                    squareEl.classList.add("active");

                        contatore++
                        
                        if (contatore == 100 - 16){
    
                            gridEl.style.filter = "blur(2px)";
    
                            youWin.style.display = "block";
    
                            endGame = true;
                        };

                        console.log(contatore);

                    // Mostro in console il numero della cella cliccata
                    console.log(`Hai cliccato la cella n. ${i}`);


                };
                
            });
        };
        
    } else if (difficulty == 2) {

        // Creo un ciclo che genera le celle all'interno della griglia
        for (let i = 1; i <= 81; i++) {

            const squareEl = createSquare(i, 9, gridEl);

            createRandomNum(bombs, 81);

            refreshBtnEl.addEventListener("click", function(){
            window.location.reload();
            });

            // creo un evento al click della cella
            squareEl.addEventListener("click", function(){

                if(endGame) {
                    return;
                };

                console.log(bombs);

                if (bombs.includes(i)){

                    gridEl.style.filter = "blur(2px)";

                    youLose.style.display = "block";

                    squareEl.style.backgroundColor = "red";
                    squareEl.style.color = "white";

                    endGame = true;

                } else {

                    // al click della cella deve essere aggiunta la classe active
                    squareEl.classList.add("active");

                    contatore++
                        
                        if (contatore == 81 - 16){
    
                            gridEl.style.filter = "blur(2px)";
    
                            youWin.style.display = "block";
    
                            endGame = true;
                        };
                    
                    // Mostro in console il numero della cella cliccata
                    console.log(`Hai cliccato la cella n. ${i}`);
                };
                
            });

        };
           
    } else if (difficulty == 3) {

        // Creo un ciclo che genera le celle all'interno della griglia
        for (let i = 1; i <= 49; i++) {

            const squareEl = createSquare(i, 7, gridEl);

            createRandomNum(bombs, 49);

            refreshBtnEl.addEventListener("click", function(){
            window.location.reload();
            });

            // creo un evento al click della cella
            squareEl.addEventListener("click", function(){

                if(endGame) {
                    return;
                };

                console.log(bombs);

                if (bombs.includes(i)){

                    gridEl.style.filter = "blur(2px)";

                    youLose.style.display = "block";

                    squareEl.style.backgroundColor = "red";
                    squareEl.style.color = "white";

                    endGame = true;

                } else {

                    // al click della cella deve essere aggiunta la classe active
                    squareEl.classList.add("active");

                    contatore++
                        
                        if (contatore == 49 - 16){
    
                            gridEl.style.filter = "blur(2px)";
    
                            youWin.style.display = "block";
    
                            endGame = true;
                        };
                    
                    // Mostro in console il numero della cella cliccata
                    console.log(`Hai cliccato la cella n. ${i}`); 
                };
                
            });
        };
    };   
});


// Functions

// Funzione per creare le celle, il numero all'interno e definire la lunghezza delle righe

function createSquare (cellNum, cellRow, container) {

    // Creo variabile per creare nuovo elemento in pagina
    let squareEl = document.createElement("div");
    // gli asseglo una classe
    squareEl.className = "square";
    // faccio in modo che ci siano 10 celle per ogni riga
    squareEl.style.width = `calc(100% / ${cellRow}`;
    // faccio comparire un numero crescente da 1 a 100 al suo interno usando i
    squareEl.innerHTML = cellNum;
    // dico che l'elemento deve essere aggiunto all'interno della griglia
    container.append(squareEl);

    return squareEl;

};

// Funzione per creare 16 numeri random diversi tra loro e inserirli in un array

function createRandomNum (array, cellNum) {

    while (array.length < 16){
   
        let newNumber = Math.floor(Math.random() * cellNum) + 1;
    
        if (!array.includes(newNumber)) {
    
            array.push(newNumber);
        };
    };
};

// Funzione per terminare il gioco



    
