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
    
    
    function move(puzzlepiece){
            
           
            blockTop=puzzlepiece.offsetTop;
            blockLeft= puzzlepiece.offsetLeft;
            //console.log( " offsetTop= " + blockTop + " offsetLeft= " +blockLeft);
            puzzlepiece.style.left= blankLeft;
            puzzlepiece.style.top= blankTop;
            //console.log( "blankTop was= " + blankTop + " blankLeft was= " + blankLeft);
            blankTop= blockTop + "px";
            blankLeft=blockLeft + "px";
           
       
    }
    
    function validMove(puzzlepiece){
                blockTop=puzzlepiece.offsetTop;
                blockLeft= puzzlepiece.offsetLeft;
                var top= blockTop + "px";
                var left= blockLeft + "px";
               // console.log( " offsetTop= " + top + " offsetLeft= " + left);
               // console.log( "blankTop was= " + blankTop + " blankLeft was= " + blankLeft);
                
                var testleft= Math.abs(parseInt(left) - parseInt(blankLeft));
                if (top == blankTop && testleft==100){
                        
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                        //console.log("yup should b right");
                        return true;
                      
                       }
                        
                var testright= Math.abs(parseInt(top) - parseInt(blankTop));
                if (left == blankLeft && testright==100){
                        puzzlepiece.setAttribute("class", "puzzlepiece movablepiece");
                       // console.log("yup should b right");
                        return true;
                       
                       }
                        
        
    }
   
    
    
    
   
    
}