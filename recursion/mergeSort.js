// merge sort algorithm:
// sort left half
// sort right half
// merge them together

function merge(arr, l, mid, h)
{
    const arr2 = new Array(h-l+1);
    let i = l;
    let j = mid+1;
    let k = 0;

    while(i <= mid && j <= h)
    {
      if(arr[i] < arr[j])
        arr2[k++] = arr[i++];
      else
        arr2[k++] = arr[j++];
    }

    while(i <= mid)
        arr2[k++] = arr[i++];
    while(j <= h)
      arr2[k++] = arr[j++];

    for (let i = 0; i < arr2.length; i++) {
      arr[l + i] = arr2[i];
  }

 }

function mergeSort(arr, l, h) {
  if(l < h)
  {
    let mid = Math.floor((l+h)/2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid+1, h);
    merge(arr, l, mid, h);
  }
}

module.exports = mergeSort;