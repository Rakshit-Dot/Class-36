var game, player, form, playerCount, database;
var position;


function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start()

}

function draw() {
  background("white");

}



