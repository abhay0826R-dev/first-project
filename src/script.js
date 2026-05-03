let userCard = 0;
let dealerCard = 0;

let userSum = 0;
let dealerSum = 0;

let gameOver = false;
let userWon = false;

// DOM
let userCardEl = document.getElementById("user-current-card")
let dealerCardEl = document.getElementById("dealer-current-card")

let userSumEl = document.getElementById("user-sum")
let dealerSumEl = document.getElementById("dealer-sum")

let resultEl = document.getElementById("result")

// chatGPT told: 
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 1 for win ; 0 for lose
function finalResult(res) {
    if (res) {// win (res = 1)
        resultEl.innerText = "YOU WIN !!!!!"
        userWon = true;
    }
    else {   // loose condition (res = 0)
        resultEl.innerText = "YOU LOOSE !!!"
        userWon = false;
    }
    revealDealersCard()
    gameOver = true;
}

function alertUserToRestart() {
    if (userWon)
        resultEl.innerText = "you win, restart game !"
    else
        resultEl.innerText = "you lost, restart game !"
}

function revealDealersCard() {
    dealerCardEl.innerText = "Card : " + dealerCard
    dealerSumEl.innerText = "Sum : " + dealerSum
}

function dealersPlay() {
    dealerCard = randomInt(1,12)
}

function checkUserState() {
    if (userSum < 21)
        if (dealerSum > userSum)
            finalResult(0)
        else
            finalResult(1)
    if (userSum == 21)
        finalResult(1)
}

function rollUser() {
    if (gameOver) {
        alertUserToRestart()
        return;
    }
    userCard = randomInt(1,12);
    userCardEl.innerText = "Card : " + userCard
    userSum += userCard
    userSumEl.innerText = "Sum : " + userSum

    if (userSum > 21)
        finalResult(0)
    else if (userSum == 21)
        finalResult(1)

    dealersPlay()
}

function hitUser() {
    checkUserState();
}

function startGame() {
    userSum = 0
    dealerSum = 0
    userCard = 0
    dealerCard = 0
    userCardEl.innerText = "Card : " + userCard
    userSumEl.innerText = "Sum : " + userSum
}