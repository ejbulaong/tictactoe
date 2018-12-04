const cells = document.getElementsByClassName("cell");
const box = document.getElementById("box");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const game = {
    player: 1,
    character: "X",
}
let output = [];

box.addEventListener("click", function (e) {

    if (e.target.classList.contains("cell")) {
        const checkWinner = function () {
            if (output[0] === output[1] && output[1] === output[2] && output[0, 1, 2] != undefined) {
                alert(`Player ${game.player} Win`);
                newGame();
            } else if (output[0] === output[3] && output[3] === output[6] && output[0, 3, 6] != undefined) {
                alert(`Player ${game.player} Win`);
                newGame();
            } else if (output[1] === output[4] && output[4] === output[7] && output[1, 4, 7] != undefined) {
                alert(`Player ${game.player} Win`);
                newGame();
            } else if (output[2] === output[5] && output[5] === output[8] && output[2, 5, 8] != undefined) {
                alert(`Player ${game.player} Win`);
                newGame();
            } else if (output[3] === output[4] && output[4] === output[5] && output[3, 4, 5] != undefined) {
                alert(`Player ${game.player} Win`);
                newGame();
            } else if (output[6] === output[7] && output[7] === output[8] && output[6, 7, 8] != undefined) {
                alert(`Player ${game.player} Win`);
                newGame();
            } else if (output[0] === output[4] && output[4] === output[8] && output[0, 4, 8] != undefined) {
                alert(`Player ${game.player} Win`);
                newGame();
            } else if (output[2] === output[4] && output[4] === output[6] && output[2, 4, 6] != undefined) {
                alert(`Player ${game.player} Win`);
                newGame();
            } else {
                if (document.getElementsByClassName("clicked").length === 9) {
                    alert("The Game is Draw!")
                    newGame();
                }
            }
        }
        
        if (game.player === 1) {
            if (e.target.classList != "cell clicked") {
                e.target.innerHTML = `<i class="fas fa-times"></i>`;
                e.target.classList.add("clicked");
                output[e.target.dataset.cellNumber] = "X";
                checkWinner();
                game.player = 2;
            }
        } else {
            if (e.target.classList != "cell clicked") {
                e.target.innerHTML= `<i class="far fa-circle"></i>`;
                e.target.classList.add("clicked");
                output[e.target.dataset.cellNumber] = "O";
                checkWinner();
                game.player = 1;
            }
        }
    }    

});

document.getElementById("new-button").addEventListener("click", function () {
    newGame();
});
const newGame = function () {
    output = [];
    for (let x = 0; x <= 8; x++) {
        document.getElementById(`cell${x}`).innerHTML = "";
        document.getElementById(`cell${x}`).classList.remove("clicked");
        game.player = 1;
    }
}