class LinkedList{
  head = null;
  tail = null;
  size = 0;

  constructor(head)
  {
    this.head = head;
    this.tail = head;
  };
  
  append(value){
 
    let newNode = new Node(value);
    this.tail.nextNode = newNode;
    this.tail = newNode;
    ++this.size;
    if(this.head.nextNode == null)
      {
        this.head.nextNode = this.tail;
      }

  };

  prepend(value){
    let newNode = new Node(value);
    this.newNode = value;
    let prevFirstNode = this.head.nextNode;
    this.head.nextNode = newNode;
    newNode.nextNode = prevFirstNode;
    ++this.size;
  };

  get returnSize(){
    return this.size;
  }
  get returnHead()
  {
    return this.head;
  }
  get returnTail()
  {
    return this.tail;
  }

  at(index){
    let temp = new Node();
    temp = this.head;
    while(--index)
    {
      temp = temp.nextNode;
    }
    return temp;
  };

  pop(){
    let temp = new Node();
    temp = this.head;
      while(temp.nextNode != this.tail)
        temp = temp.nextNode;
      
      this.tail = temp;
      temp.newNode = null;
      --this.size;
  };

  contains(value){
    let temp = new Node();
    temp = this.head;
    while(temp != null && temp.value != value)
    {
      temp = temp.nextNode;
    }
    if(!temp)
      return false;
    return true;
  };

  find(value)
  {
    let temp = new Node();
    temp = this.head;
    let index = 0;
    while(temp != null &&  temp.value != value)
    {
      ++index;
      temp = temp.nextNode;
    }
    if(index >this.size)
      return -1;

    return index;
  };

  toString()
  {
    let stringLL = "";
    let temp = new Node();
    temp = this.head.nextNode;
    while(temp != null)
    {
      stringLL += `( ${temp.value} ) -> `;
      temp = temp.nextNode;
    }
    stringLL += "NULL"
    return stringLL;
  };

  insertAt(){

  };

  removeAt(){

  };

}

class Node{
  value;

  constructor(val)
  {
    this.value = val;
  }
  nextNode = null;
}


const list = new LinkedList(new Node());

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("rat");


console.log(list.toString());
console.log(list.returnSize);
console.log("dog is at pos: ", list.find("dog"));
console.log("cat is at pos: ", list.find("cat"));
console.log("anaconda is at pos: ", list.find("anaconda"));
console.log("Does list contains parrot?", list.contains("parrot"));
console.log("Does list contains bird?", list.contains("bird"));


console.log(list.returnHead);
console.log(list.returnTail);