$(function()
  { 
    $stackValue = $(' input.stack');
    $stackTake  = $(' .stack.take');
    $stackAdd   = $(' .stack.add ');
    $stackSlots = $($('#stackSlots > div').get().reverse());
    
    function checkInput(){
      if($stackValue.val() != ""){
        if(stack.canPush()){
          stack.push($stackValue.val())
          return true
        }
        else{
          paintOverflow()
          return false
        }
      }
      else{
        alert("Please provide value!")
        return false
      }  
    }
    function checkFreeSlot(){
      $stackSlots.each(function( slot ) {
        if(!$(this).text()){
          paintText($(this))
          //Dirty solution to get out of the loop
          return false
        }
      }) 
    }
    function paintText(selected){
      selected.text($stackValue.val())
      selected.toggleClass('filled')
    }
    function paintOverflow(){
      $stackSlots.last().removeClass("filled").addClass("overflow").text("Stack Overflow");
    }
    $stackAdd.on('click',function(){
      if(checkInput()){
        checkFreeSlot()
      }
    })

    $stackTake.on('click', function(){

    })


  }
)