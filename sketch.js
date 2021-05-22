var dog, happyDog, dogImg, happydogImg; 
var database;
var foodS, foodStock;
 

function preload()
{
dogImg = loadImage("images/dogImg.png");
happydogImg = loadImage("images/dogImg1.png");	
}

function setup() {
	database = firebase.database();
  
  createCanvas(500, 500);

  dog = createSprite(250,250,30,30);
  dog.addImage(dogImg);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}

function draw() {
  background(46, 139, 87);

  if(keyDown(UP_ARROW)){
    foodStock = foodStock-1;
    writeStock(foods);
    dog.addImage(happydogImg);
  }
  


  
  
  drawSprites();

  textSize(25);
  fill("red");
  text("Food Stock :"+ foodStock,250,50);
}

function readStock(){
 
 foods = data.val();
}
function writeStock(){
 
 database.ref('/').update({
   Food:x
 })
}
  


