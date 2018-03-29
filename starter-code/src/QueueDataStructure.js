function QueueDataStructure () {
  this.queueControl = [], 
  this.MAX_SIZE = 9
}
var queue = new QueueDataStructure()

QueueDataStructure.prototype.isEmpty = function(){
  if(this.queueControl.length === 0){
    return true
  }else{
    return false
  }
}
QueueDataStructure.prototype.canEnqueue = function(el){
  if(this.queueControl.length >= this.MAX_SIZE){
    return false
  }
  else{
    return true
    this.enqueue(el)
  }
}
QueueDataStructure.prototype.enqueue = function(el){
  if(this.canEnqueue()){
    if(el < this.queueControl.slice(-1)[0]){
      this.queueControl.push(el)
    }
    else(
      this.queueControl.unshift(el)
    )
    return this.queueControl
  }
  else{
    return "Queue Overflow"
  }
}
QueueDataStructure.prototype.dequeue = function(){
  if(this.queueControl.length > 1){
    return this.queueControl.pop()
  }
  else{
    return "Queue Underflow"
  }
}