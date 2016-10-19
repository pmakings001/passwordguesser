$(document).ready(function(){
   //code
   var MagicWord = "ScriptEd";
   $("button").click(function()
   {
      var Guess = $(PassGuess).val();
      if (MagicWord === Guess)
      {
         $("#Message").html("You got the magic word");
      }
      else
      {
         $("#Message").html("Try again sunshine");
      }
       
   });
});