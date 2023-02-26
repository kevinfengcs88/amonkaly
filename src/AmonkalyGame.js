
let p1cards = [];
let p1points = 0;
let p2cards = [];
let p2points = 0;
let p3cards = [];
let p3points = 0;
let p4cards = [];
let p4points = 0;

let players = [[p1cards,p1points], [p2cards,p2points], [p3cards,p3points], [p4cards,p4points]];

function addCard(player, card) {
    players[player][0].push(card);
}

function removeCard(player) {
    players[player][0].pop();
}

function adjustPoint(player, changeValue) {
    players[player][1] += changeValue;
}


