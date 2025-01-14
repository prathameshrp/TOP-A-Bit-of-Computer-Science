class HashMap
{
  loadFactor = 0.75;
  capacity;

  constructor(capacity = 16)
  {
    // this.loadFactor;
    this.capacity = capacity;
    this.buckets = Array.from({length: capacity}, () => []);
  }

  hash(key)
  {
    let hashCode = 0;
    const prime = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (prime*hashCode + key.charCodeAt(i))%this.capacity;
    }

    return hashCode;
  }

  entry(bucket, key)
  {
    for(let e of bucket)
    {
      if(e.key == key)
        return e;
    }
    return null;
  }

  getLoad()
  {
      let count = this.length();
      return count/this.buckets.length;
  }
  
  expand()
  {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = Array.from({length:this.capacity}, ()=> []);
    
    for(let bucket of oldBuckets)
    {
      for(let entry of bucket)
      {
        this.set(entry.key, entry.val);
      }
    }
  }
  set(key, val)
  {
    const bucketIndex = this.hash(key);
    // console.log(bucketIndex);
    const bucket = this.buckets[bucketIndex];
    // console.log(bucket);
    const e = this.entry(bucket, key);
    
    if(this.getLoad() > 0.75)
      this.expand();

    if(e)
      e.val = val;
    else
      bucket.push({key, val});

  }

  get(key)
  {
    let bucket = this.buckets[this.hash(key)];


    return this.entry(bucket, key);
  }

  has(key)
  {
    let bucket = this.hash(key);
    if(this.entry(bucket, key))
      return true;
    return false;
  }

  remove(key)
  {
    let bucket = this.buckets[this.hash(key)];
    let e = this.entry(bucket, key);
    if(e)
    {
      bucket = bucket.filter(x=>x === e);
     return true; 
    }
      else
      return false;
  }

  length()
  {
    let count = 0;
    for(let b of this.buckets)
      for(let e of b)
        ++count;
    
    return count;
  }

  clear()
  {
    this.buckets = [[],[],[]];
  }

  keys()
  {
    let ks = [];
    for(let b of this.buckets)
    {
      for(let e of b)
        ks.push(e.key);
    }

    return ks;
  }

  values()
  {
    let ks = [];
    for(let b of this.buckets)
    {
      for(let e of b)
        ks.push(e.val);
    }

    return ks;
  }

  entries()
  {
    let ks = [];
    for(let b of this.buckets)
    {
      for(let e of b)
        ks.push(e);
    }

    return ks;
  }
  
}

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')


console.log(test.entries());
console.log(test.getLoad());

test.set('moon', 'silver')
console.log(test.getLoad());
