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
    
    var shufflebutton= document.getElementById('shufflebutton');
    shufflebutton.addEventListener("click", shuffle);
     for(var i=0; i < puzzlepieces.length; i++){
         
          (function(index) {
              
            puzzlepieces[index].addEventListener("mouseover", function(){
            validMove(puzzlepieces[index])
            });
            
            puzzlepieces[index].addEventListener("click", function(){
            if (validMove(puzzlepieces[index])){
                console.log(puzzlepieces[index]);
                blockTop=puzzlepieces[index].offsetTop;
                blockLeft= puzzlepieces[index].offsetLeft;
                   move(puzzlepieces[index],blankTop,blankLeft); 
                     blankTop= blockTop + "px";
                     blankLeft=blockLeft + "px";
                     console.log(blankTop + " " + blankLeft);
           
            }
            });
            
            puzzlepieces[index].addEventListener("mouseout", function(){
                        puzzlepieces[index].setAttribute("class", "puzzlepiece");
            });
               
            
                
                         
           
       
          })(i);
          
     }
    
    
    function move(puzzlepiece, switchtop, switchleft){
            
            var bt= parseInt(switchtop);
            var bl= parseInt(switchleft);
           
            var id = setInterval(frame, 5);
           // console.log( " offsetTop= " + blockTop + " offsetLeft= " +blockLeft);
           //console.log(puzzlepiece);
           var top= blockTop;
           var left= blockLeft;
           
            function frame(){
               // console.log("top " + top);
                 
                if (top == bt && left == bl){
                    clearInterval(id);
                   // console.log("clearInterval");
                }
                else{
                     if (top != bt){
                        if (top < bt)  {
                            top++;
                            puzzlepiece.style.top= top + "px";
                        }
                         else          { 
                             top--;
                             puzzlepiece.style.top= top + "px";
                         }
                   
                     }
                      if (left != bl){
                        if (left < bl)  
                        {left++;
                            puzzlepiece.style.left= left + "px";
                        }
                         else          {left--;
                             puzzlepiece.style.left= left + "px";
                         }
                         
                   
                }
                
            }
            }
           
           // console.log(" Moved to Top = " + blankTop + " Left = " + blankLeft);
          
       
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
   
    
    function shuffle(){
       /* for (var i=0; i<4; i++){  
            var choice= Math.floor(Math.random() * 14);
            blockTop=puzzlepieces[choice].offsetTop;
                blockLeft= puzzlepieces[choice].offsetLeft;
            console.log(choice);
           // console.log(choice);
           move(puzzlepieces[choice],blankTop,blankLeft);
           //var puzzleswitch;
            blankTop= blockTop + "px";
            blankLeft=blockLeft + "px";
            
        }
        */
        var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
     
    /*   for (var i = 0; i <= 14; i++) {
            array.push(i);
            //console.log(foo.length);
        
            }
       */     
           // console.log(array);
            var choice;
            var temp=[];
            var index=0;
            
            for (var i=0; i<100; i++){ 
                choice=  Math.floor(Math.random() * 14);
                if (index < 14){
                    index=0;
                }
                
                temp[0]= array[index];
                array[index]= array[choice];
                array[choice]= temp[0];
               // console.log(array);
                index++;
            }
           console.log(array);
           
           
           //var temptop,templeft;
           
           for(var j=0; j < array.length; j++){
               
               blockTop=puzzlepieces[j].offsetTop;
               blockLeft= puzzlepieces[j].offsetLeft;
               console.log("chosen piece position: " + blockTop +" " + blockLeft);
               var a=puzzlepieces[array[j]].offsetTop;
               var b=  puzzlepieces[array[j]].offsetLeft;
               console.log("Switching with: " + a + ' ' + b);
               puzzlepieces[j].style.left= b + "px";
               puzzlepieces[j].style.top= a + "px";
               
               puzzlepieces[array[j]].style.top= blockTop + "px";
               puzzlepieces[array[j]].style.left= blockLeft + "px";
              // a = blockTop;
              // b= blockLeft;
             //  console.log("temp = " + temptop + " " + templeft);
              
              
              // move(puzzlepieces[i], a, b);
             //  console.log("switch to: " + puzzlepieces[array[i]].offsetTop + " " + puzzlepieces[array[i]].offsetLeft);
               //move(puzzlepieces[array[i]], temptop,templeft);
           }
             
             
            
             //console.log( " offsetTop= " + blockTop + " offsetLeft= " +blockLeft);
             
             //console.log( "blankTop was= " + blankTop + " blankLeft was= " + blankLeft);
            
            // blankTop= blockTop + "px";
            // blankLeft=blockLeft + "px";
    }
    
  
   
    
}