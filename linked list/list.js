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

  insertAt(val, index){
    let temp = new Node();
    temp = this.head;
    if(index > this.size) return "can't insert at a index bigger than list size, use append instead";
    else if(index === this.size)
      {

        this.append(val);
        return "added";
      }
    else if(index === 0)
      {
        this.prepend(val);
        return "added";
      } 
    else{
    while(--index)
    {
      temp = temp.nextNode;
    }
    let newNode = new Node(val);
    newNode.nextNode = temp.nextNode;
    temp.nextNode = newNode;
    ++this.size;
    return "added";
    }
    // return -1;
  };

  removeAt(index){
    let temp = new Node();
    temp = this.head;
      if(index < 0 || index > this.size) return "index out of range";
      else
      {
        while(--index)
        {
          temp = temp.nextNode;
        }
        let dNode = new Node();
        dNode = temp.nextNode;
        temp.nextNode = dNode.nextNode;
        dNode = null;
        --this.size;
        return "removed";
      }
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
console.log(list.insertAt("tiger", 2));
console.log(list.insertAt("lion", 0));
console.log(list.insertAt("bat", list.returnSize));
console.log(list.insertAt("man", 20));

console.log(list.toString());
console.log(list.removeAt(3));
console.log(list.toString());

console.log(list.returnHead);
console.log(list.returnTail);