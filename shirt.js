class Shirt{
    constructor(x,y,width,height){
        var options={

        isStatic:true
        }
    
   this.x=x;
   this.y=y;
    this.width=width;
    this.height=height;
   

}

    display(){

     rect(this.x,this.y,100,100);


    }
    change(){
       if(mouseIsPressed){
           shirt.addImage(shirtImg2);

       }else{
           shirt.addImage(shirtImg1);
       }

    }
}