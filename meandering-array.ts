// Print Meandering Array

let unsortedArr = [1, 5, 8 , 7, 6, -1, -5, 4, 9, 5]

let output = [];

function meanderArray(unsorted: any){
  let sorted = unsorted.sort((a: any, b: any) => b-a);
  console.log("sorted", sorted);
  let output = [];

  for(let i = 0; i < sorted.length/2; i++){
    output.push(sorted[i])
    if(i !== sorted.length - 1 - i){
        output.push(sorted[sorted.length - 1 - i]);
    }
  } 
 return output;
}
let result = meanderArray(unsortedArr);
console.log(result);
