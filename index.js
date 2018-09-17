// Code your solution in this file
function findMatching(drivers, name){

 let sameCaseName  = name.toUpperCase();
 drivers.filter(function(ele){
   return sameCaseName == ele.toUpperCase();
   

    
  });  
  
}
