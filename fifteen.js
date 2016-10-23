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
        if (xpos < 300){
          xpos+=100;
        }
        else
        {
            xpos=0;
            ypos+=100;
        }
    }
    
    var xpx=0;
    var ypx=0; 
    for(var i=0; i < puzzlepieces.length; i++){ // place background on tile
        puzzlepieces[i].style.backgroundPosition= "-" + xpx + "px " + "-" + ypx + "px";
        console.log(i + "--> x: " + xpx + " y: " +ypx);
        if(xpx<300){
            xpx+=100;
        }
        else
        {
            xpx=0;
            ypx+=100;
        }
    
    }
    
    
  /*  puzzlepieces[0].style.backgroundPosition= "0px 0px"
    puzzlepieces[4].style.backgroundPosition= "0px -100px"
    puzzlepieces[8].style.backgroundPosition= "0px 200px"
    puzzlepieces[12].style.backgroundPosition="0px 300px"*/
    
    
}