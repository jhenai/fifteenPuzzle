

/**
 *  ID Number:      620067672
 *  Extra feature:  Animations and/or transitions (piece slides in place)
 *
 */
 
window.onload = function(){

   // var puzzlearea=  $('#puzzlearea');
    var puzzlepieces = document.querySelectorAll("#puzzlearea div"); // to select all puzzle pieces
    
      
        var xpos=0; 
        var ypos= 0;
    for(var i=0; i < puzzlepieces.length; i++){  // set layout of tiles
       
        puzzlepieces[i].setAttribute("class", "puzzlepiece") ;
        puzzlepieces[i].style.left= xpos + 'px';
        puzzlepieces[i].style.top= ypos + 'px';
        puzzlepieces[i].style.backgroundPosition= "-" + xpos + "px " + "-" + ypos + "px";
        if (xpos < 300){
          xpos+=100;
        }
        else
        {
            xpos=0;
            ypos+=100;
        }
    }
    
    var BLANKTOP= "300px";
    var BLANKLEFT= "300px";
    var BLOCKTOP, BLOCKLEFT; 
    
    var shufflebutton= document.getElementById('shufflebutton');
    shufflebutton.addEventListener("click", shuffle);
     for(var i=0; i < puzzlepieces.length; i++){
         
          (function(index) {
              
            puzzlepieces[index].addEventListener("mouseover", function(){
            validMove(this);
            });
            
            puzzlepieces[index].addEventListener("click", function(){
            if (validMove(this)){
               console.log(this);
                BLOCKTOP=this.offsetTop;
                BLOCKLEFT=this.offsetLeft;
                     
                     move(puzzlepieces[index],BLANKTOP,BLANKLEFT); 
                     BLANKTOP= BLOCKTOP + "px";
                     BLANKLEFT=BLOCKLEFT + "px";
                    
            }
            });
            
            puzzlepieces[index].addEventListener("mouseout", function(){
                       this.setAttribute("class", "puzzlepiece");
            });
          })(i);
          
     }
     
     /**
      * FUNCTION move: Moves the clicked puzzlepiece to the blank space
      *                Implements the slide animation
      */
    
    
    function move(puzzlepiece, switchtop, switchleft){
            var bt= parseInt(switchtop);
            var bl= parseInt(switchleft);
            var top= BLOCKTOP;
            var left= BLOCKLEFT;
            
            puzzlepiece.setAttribute("id", "selected");
            console.log(puzzlepiece);
            
            if (left < bl){
            $('#selected').animate(
                    {backgroundImage: "url(background.jpg)",
                	border: "2px solid black",
                	height: "96px",
                	lineHeight: "96px",
                	position: "absolute",
                	textAlign: "center",
                	verticalAlign: "middle",
                	width: "96px",
                    left: '+=100px'
                    });
            }
            
             if (left > bl){
                  $('#selected').animate(
                    {backgroundImage: "url(background.jpg)",
                	border: "2px solid black",
                	height: "96px",
                	lineHeight: "96px",
                	position: "absolute",
                	textAlign: "center",
                	verticalAlign: "middle",
                	width: "96px",
                    left: '-=100px'
                    });
             }
             
             if (top < bt)  {
                 $('#selected').animate(
                    {backgroundImage: "url(background.jpg)",
                	border: "2px solid black",
                	height: "96px",
                	lineHeight: "96px",
                	position: "absolute",
                	textAlign: "center",
                	verticalAlign: "middle",
                	width: "96px",
                    top: '+=100px'
                    });
             }
             
              if (top > bt)  {
                   $('#selected').animate(
                    {backgroundImage: "url(background.jpg)",
                	border: "2px solid black",
                	height: "96px",
                	lineHeight: "96px",
                	position: "absolute",
                	textAlign: "center",
                	verticalAlign: "middle",
                	width: "96px",
                    top: '-=100px'
                    });
              }
          
    }
          
    
    /**
     * FUNCTION validMove : checks that the black space is beside the chosen puzzlepiece before sliding 
     *
     */
    
    
    function validMove(puzzlepiece){
                BLOCKTOP=puzzlepiece.offsetTop;
                BLOCKLEFT= puzzlepiece.offsetLeft;
                var top= BLOCKTOP + "px";
                var left= BLOCKLEFT + "px";
               
                var testleft= Math.abs(parseInt(left) - parseInt(BLANKLEFT));
                if (top == BLANKTOP && testleft==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;
                      
                       }
                        
                var testright= Math.abs(parseInt(top) - parseInt(BLANKTOP));
                if (left == BLANKLEFT && testright==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        return true;
                       
                       }
        
    }
    /**
     * FUNCTION shuffle: creates a shuffles an array 100 times and moves piece to the assigned position
     *
     */
    
    function shuffle(){
        
      
        var shuffleArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
     
   
            var choice;
            var temp=[];
            var index=0;
            
            for (var i=0; i<100; i++){ 
                choice=  Math.floor(Math.random() * 15);
                if (index <= 14){
                    index=0;
                }
                
                temp[0]= shuffleArray[index];
                shuffleArray[index]= shuffleArray[choice];
                shuffleArray[choice]= temp[0];
             
                index++;
            }
          
           
           
         
           for(var j=0; j < shuffleArray.length; j++){
               
               BLOCKTOP=puzzlepieces[j].offsetTop;
               BLOCKLEFT= puzzlepieces[j].offsetLeft;
               console.log("chosen piece position: " + BLOCKTOP +" " + BLOCKLEFT);
               var a=puzzlepieces[shuffleArray[j]].offsetTop;
               var b=  puzzlepieces[shuffleArray[j]].offsetLeft;
               console.log("Switching with: " + a + ' ' + b);
               puzzlepieces[j].style.left= b + "px";
               puzzlepieces[j].style.top= a + "px";
               
               puzzlepieces[shuffleArray[j]].style.top= BLOCKTOP + "px";
               puzzlepieces[shuffleArray[j]].style.left= BLOCKLEFT + "px";
              }
        
    }
    
};