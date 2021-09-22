function twoNumberSum(array, targetSum) {
    const numbers = {};
   for(const number of array ){
       const eval = targetSum - number
      
       if(eval in numbers){
           return [eval, number]
       }else{
            numbers[number] = true
            console.log(number) ;
       }
      
    return [];
    }
   

}
// Do not edit the line below.
exports.twoNumberSum = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6],  10)