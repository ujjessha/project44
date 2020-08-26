class Player{
    constructor(){

        this.spot=0;
    }
    roll(tiles){
        var rand=Math.round(random(1,6));
        this.spot=this.spot+rand;
        var tile=tiles[this.spot];
        if(tiles[this.SorL]!==0 && tile){
            this.spot=this.spot+tile.SorL;
        }
    }
    display(tiles){
        //console.log(this.spot);
      // console.log(tiles[this.spot]);
       var currentTile=tiles[this.spot];
      var pose= currentTile.getCentre();
     //s console.log(pose);
      ellipse(pose[0],pose[1],15,15);

    }
    reset(){
        this.spot=0;
    }
}