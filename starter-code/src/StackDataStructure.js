function StackDataStructure () {
  this.stackControl = [],
  this.MAX_SIZE = 9,
  this.lastAdded 
}
var stack = new StackDataStructure()

StackDataStructure.prototype.isEmpty = function(){
  if(this.stackControl.length === 0){
    return true
  }
  return false
}
StackDataStructure.prototype.canPush = function(){
  if(this.stackControl.length >= this.MAX_SIZE){
    return false
  }
  return true
  
} 
StackDataStructure.prototype.push    = function(element){
  if(this.stackControl.length < this.MAX_SIZE){
    this.stackControl.push(element)
    this.lastAdded = element
    return this.stackControl
  }
  else{
    return "Stack Overflow"
  }
}  
StackDataStructure.prototype.pop     = function(popped){
  if(this.isEmpty()){
    return "Stack Underflow"
  }else{
    this.stackControl = this.stackControl.splice(0,this.stackControl-1)
    return this.lastAdded 
  }
}
