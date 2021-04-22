// Fig. 13.4: draw.js 
// A simple drawing program. 
 //initialization function to insert cells into the table
function createCanvas()
{
   var side = 100;
   var tbody = document.getElementById( "tablebody" );
   var count = 0;
   var button = document.getElementById("clean");
   button.addEventListener( "click", clean_all, false );
   for ( var i = 0; i < side; ++i )
   {
      var row = document.createElement( "tr" );
      for ( var j = 0; j < side; ++j )
      {
         var cell = document.createElement( "td" );
         cell.setAttribute("id",count);
         count++;
         row.appendChild( cell );
      } // end for
     
      tbody.appendChild( row );
   } // end for
   set();
   // register mousemove listener for the table
   document.getElementById( "canvas" ).addEventListener( 
      "mousemove", processMouseMove, false );
} // end function createCanvas

// processes the onmousemove event
function processMouseMove( e )
{        
   if ( e.target.tagName.toLowerCase() == "td" )
   {
      // turn the cell blue if the Ctrl key is pressed
      if ( e.ctrlKey )
      {
         e.target.setAttribute( "class", "blue" );
         localStorage.setItem(e.target.id,"blue");
      } // end if

      // turn the cell red if the Shift key is pressed
      if ( e.shiftKey )
      {
         e.target.setAttribute( "class", "red" );
         localStorage.setItem(e.target.id,"red");
      }
      if ( e.altKey)
      {
         e.target.setAttribute("class","black");
         localStorage.setItem(e.target.id,"black");   
      }
      if( e.which )
      {
            e.target.classList.remove("blue");
            e.target.classList.remove("red");
            e.target.classList.remove("black");
            localStorage.removeItem(e.target.id);
      }// end if
   } // end if
}
function set()
{
      var keys = [];
      var len = localStorage.length;
      for(var i=0;i< len;i++)
            keys[i] = localStorage.key(i);
      for(var i = 0 ;i < len ;i++)
      {     
            var cell = document.getElementById(keys[i]);
            cell.setAttribute("class",localStorage.getItem(keys[i]));
      }	
}
function clean_all()
{
      var keys = [];
      var len = localStorage.length;
      for(var i=0;i< len;i++)
            keys[i] = localStorage.key(i);
      for(var i =0;i < len; i++)
      {
            var cell = document.getElementById(keys[i]);
            localStorage.removeItem(keys[i]);
            cell.classList.remove("blue");
            cell.classList.remove("red");
            cell.classList.remove("black");
      }
} // end function processMouseMove
window.addEventListener( "load", createCanvas, false );

/*************************************************************************
* (C) Copyright 1992-2012 by Deitel & Associates, Inc. and               *
* Pearson Education, Inc. All Rights Reserved.                           *
*                                                                        *
* DISCLAIMER: The authors and publisher of this book have used their     *
* best efforts in preparing the book. These efforts include the          *
* development, research, and testing of the theories and programs        *
* to determine their effectiveness. The authors and publisher make       *
* no warranty of any kind, expressed or implied, with regard to these    *
* programs or to the documentation contained in these books. The authors *
* and publisher shall not be liable in any event for incidental or       *
* consequential damages in connection with, or arising out of, the       *
* furnishing, performance, or use of these programs.                     *
*************************************************************************/