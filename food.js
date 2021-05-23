class Food {
    constructor(foodS){
        this.image = loadImage("Milk.png");
        this.foodS = foodS;        
        this.lastFed = lastFed;   
    }
    

    updateFoodStock(foodStock){
        foodS = foodStock
       // if(x <= 0){
      //      x=0;
      //  }else{
      //      x=x-1;
      //  }
      //  foodS = x;
          
    }
    deductFood(){
        if(foodS > 0){
            foodS =foodS-1;
        } 
    }
    getFedtime(){
        return lastFed;
    }

    getFoodStock(){
        return foodS;
    }
    display(){ 
        var x=80,y=100; 

        imageMode(CENTER);
        
        if(foodS!=0){ 
            for(var i=0;i<foodS;i++){
                 if(i%10==0){ 
                    x=80; 
                    y=y+50; 
                } 
                image(this.image,x,y,50,50); 
                x=x+30;
            }
        }
    }             
        




}
