function chunk(array, size) 
{
  //console.log(size);
  let resultArr= [];// the resulting array
  let nestArr= [];// array of the length of given size

  array.forEach(function(ele){
    
      nestArr.push(ele);
    if (nestArr.length === size){
      resultArr.push(nestArr);
      nestArr=[];
      }
      else {
        if(ele === array[array.length-1])
        resultArr.push(nestArr);
      }
 
  })
  
  
   console.log(resultArr);
  return;
}
//chunk([1, 2, 3, 4], 2);
chunk([1, 2, 3, 4, 5], 3);
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
// chunk([1, 2, 3, 4, 5], 10)