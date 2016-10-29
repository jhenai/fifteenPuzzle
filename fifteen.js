/* global $ */
window.onload = function(){

    var puzzlearea=  $('#puzzlearea');
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
    
    var blankTop= "300px";
    var blankLeft= "300px";
    var blockTop, blockLeft;    
    
    var shufflebutton = document.getElementById("shufflebutton"); 
    shufflebutton.addEventListener("click", shuffle); // to shuffle board
    
      
    
     for(var i=0; i < puzzlepieces.length; i++){
         
          (function(index) { 
           
        
            puzzlepieces[index].addEventListener("mouseover", function(){
            validMove(puzzlepieces[index])
            });
            
            puzzlepieces[index].addEventListener("click", function(){
            if (validMove(puzzlepieces[index])){
                   move(puzzlepieces[index]);    
            }
            });
            
            puzzlepieces[index].addEventListener("mouseout", function(){
                        puzzlepieces[index].setAttribute("class", "puzzlepiece");
            });
               
            
                
                         
           
       
          })(i);
          
     }
     
     function shuffle(){
          var tempTop, tempLeft;
          for(var i=0; i <=10; i++){
                var choice;
             //   console.log("tile " + choice)
                choice= Math.abs(Math.floor(Math.random() * 14)) ;
                console.log(choice);
              //  console.log("switch with : " + choice);
               tempTop= puzzlepieces[choice].offsetTop;
               tempLeft= puzzlepieces[choice].offsetLeft;
              console.log("tile: " + choice + " moving to: " + blankTop + " " + blankLeft + " from: " + tempTop + " " + tempLeft); 
                move(puzzlepieces[choice]);
                //blankTop= tempTop + "px";
               // blankLeft = tempLeft + "px";

     }
     }
    
    
    function move(puzzlepiece){
            
            blockTop=puzzlepiece.offsetTop;
            blockLeft= puzzlepiece.offsetLeft;
            
           
            var top= parseInt(blockTop);
            var left= parseInt(blockLeft);
            var bt = parseInt(blankTop);
            var bl = parseInt(blankLeft);
            var id = setInterval(frame, 5);
            //console.log( "top= " + top + " left= " + left + " bl= " + bl + " bt = " + bt);
            
            
            function frame(){
                if (top == bt && left == bl){
                    clearInterval(id);
                    //console.log("clearInterval");
                }
                else{
                    //console.log("switch!");
                  if (left != bl){
                       
                        if (left < bl){
                        left+=10;
                        puzzlepiece.style.left= left + "px";
                    }
                    else{
                         left-=10;
                        puzzlepiece.style.left= left + "px";
                        
                    }
                   //  console.log("left: " + left);   
                    }
                   if (top != bt){
                        if(top < bt){
                    top+=10;
                    puzzlepiece.style.top= top + "px";
                        }
                        else{
                            top-=10;
                            puzzlepiece.style.top= top + "px";
                        }
                       // console.log("top: " + top);
                    }
                   // console.log( "top= " + top + " left= " + left);
                }
            }
            //console.log( "blankTop was= " + blankTop + " blankLeft was= " + blankLeft);
             puzzlepiece.style.left= bl + 'px';
             puzzlepiece.style.top= bt + 'px';
          //  console.log("puzzlepiece new top " +  puzzlepiece.offsetTop);
           // console.log("puzzlepiece new left " +  puzzlepiece.offsetLeft);
            blankTop= blockTop + "px";
            blankLeft=blockLeft + "px";
          //  console.log( "top= " + top + " left= " + left);
            
            
       
    }
    
    function validMove(puzzlepiece){
                blockTop=puzzlepiece.offsetTop;
                blockLeft= puzzlepiece.offsetLeft;
                var top= blockTop + "px";
                var left= blockLeft + "px";
               
                
                var testleft= Math.abs(parseInt(left) - parseInt(blankLeft));
                if (top == blankTop && testleft==100){
                        
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        //console.log("yup should b right");
                        return true;
                      
                       }
                        
                var testright= Math.abs(parseInt(top) - parseInt(blankTop));
                if (left == blankLeft && testright==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                      
                        return true;
                       
                       }
                        
        
    }
   
    
    
    
   
    
}