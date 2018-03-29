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
        if(!$(this).text() || $(this).text() === "Stack Underflow"){
          paintText($(this))
          //Dirty solution to get out of the loop
          return false
        }
      }) 
    }
    
    function paintText(selected){
      selected.text($stackValue.val())
      selected.removeClass('overflow')
      selected.addClass('filled')
    }
    function paintOverflow(){
      $stackSlots.last().removeClass("filled").addClass("overflow").text("Stack Overflow");
    }
    function paintUnderflow(){
      $stackSlots.first().addClass("overflow").text("Stack Underflow");
    }
    function removeLast(){
      $('#stackSlots > div:not(:empty):first').removeClass("filled").removeClass("overflow").text("")
    }
    $stackAdd.on('click',function(){
      if(checkInput()){
        checkFreeSlot()
      }
    })

    $stackTake.on('click', function(){
      if(stack.pop === "Stack Underflow"){
        paintUnderflow()
      }
      else{
        removeLast()
      }
    })


  }
)