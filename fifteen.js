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
     for(var i=0; i < puzzlepieces.length; i++){
          (function(index) {
            puzzlepieces[index].addEventListener("click", move
           /* {
            blockTop=this.offsetTop;
            blockLeft= this.offsetLeft;
            console.log( " offsetTop= " + blockTop + " offsetLeft= " +blockLeft);
            this.style.left= blankLeft;
            this.style.top= blankTop;
            
            blankTop= blockTop + "px";
            blankLeft=blockLeft + "px";
            console.log( "blankTop= " + blankTop + " blankLeft= " + blankLeft);
         } */
         );
          })(i);
          
     }
    
    
    function move(){
     
        blockTop=this.offsetTop;
            blockLeft= this.offsetLeft;
            console.log( " offsetTop= " + blockTop + " offsetLeft= " +blockLeft);
            this.style.left= blankLeft;
            this.style.top= blankTop;
            
            blankTop= blockTop + "px";
            blankLeft=blockLeft + "px";
            console.log( "blankTop= " + blankTop + " blankLeft= " + blankLeft);
       
    }
    
  
   
    
    
    
   
    
}