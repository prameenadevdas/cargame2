class Player {
  constructor(){
    this.index = null
    this.name = null
    this.distance = 0
    this.rank = null
  }

  getCount(){
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value",(data) =>{
      playerCount = data.val();
      console.log(playerCount)
    })
  }

  updateCount(count){
    database.ref("/").update({
      playerCount: count
    });
  }
getcarsatend(){
  database.ref("caratend").on("value",(data) =>{
    this.rank = data.val();
  })
}
static updatecarsatend(rank){
  database.ref("/").update({
    caratend:rank
  })
}

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,distance:this.distance
    });
  }
  static getPlayerInfo(){
    var playerRef = database.ref("players")
    playerRef.on("value",(data)=>{allPlayers = data.val()})
  }
}
