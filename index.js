// Code your solution in this file
function findMatching(drivers, name){

 let sameCaseName  = name.toUpperCase();
 return drivers.filter(function(ele){
   return sameCaseName == ele.toUpperCase();
   

    
  });  
  
}

function fuzzyMatch(drivers, string){
  
  
}
