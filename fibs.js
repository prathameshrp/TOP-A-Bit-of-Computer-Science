function fibs(n) {
  if(n <= 0) return [];
  if(n === 1) return [0];
  if(n === 2) return [0, 1];

  const arr = [0, 1];

  for(let i = 3; i<=n; ++i)
  {
    arr.push(arr[arr.length-1]+arr[arr.length-2]);
  }
  return arr;
}

module.exports = fibs;