class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1=createSprite(100,100);
    car2=createSprite(300,100);
    car3=createSprite(500,100);
    car4=createSprite(700,100);
    car1.addImage(car1img)
    car2.addImage(car2img)
    car3.addImage(car3img)
    car4.addImage(car4img)
    
    cars = [car1,car2,car3,car4]

  }
play(){
  form.hide()
  // text("gameStart",120,100);
  Player.getPlayerInfo()
  player.getcarsatend()
  console.log(allPlayers)
  if(allPlayers !== undefined){
    background(groundimg)
    image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
    var positionX = 300;
    var positionY 
    var index = 0;
    for(var p in allPlayers){
      
      
      // text(allPlayers[p].name +": " + allPlayers[p].distance, 100,positionY)

      positionY = displayHeight - allPlayers[p] .distance;
      cars[index].x = positionX ;
      cars[index].y = positionY;
      if ( index === player.index - 1){
        // cars[index]. shapeColor = "red";
        fill("red")
       stroke ("black")
        ellipse(positionX,positionY,60,60)
        camera.position.x = displayWidth/2
        camera.position.y = cars[index].y
      }
      positionX  += 200;
      index += 1;
      

    }
  }
  if(keyDown("up")&& player.index != null){
    player.distance = player.distance + 50
    player.update()
  }
  if(player.distance>3550){
    gameState = 2
    player.rank += 1
    Player.updatecarsatend(player.rank)
  }

  drawSprites()
}

end(){
  console.log("Game End")
  console.log("playerrank" + player.rank)
}
}