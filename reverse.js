console.log(myReverse([1, 2, 3, 4])); 
function myReverse(a){
 console.log (length =  a.length);
 console.log (midPoint = Math.trunc(length/2));
 if (midPoint% 2 ===0)
   endPoint  = midPoint+1;
  
 for ( let i = 0; i < midPoint;i++){
    for ( let j = length-1; (j>= endPoint) ; j--){
      let temp =  a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
  return a;
}