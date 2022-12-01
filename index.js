function saturdayFun(activity){
  let value = activity || "roller-skate"

  return "This Saturday, I want to " + value +"!";

}

const mondayWork = function(event){
  let var1 = event || "go to the office"

  return "This Monday, I will " + var1 + "."

}
function wrapAdjective(visualFlair){

  return function(statement){

      let finalStatement = statement || "special";

      return `You are ${visualFlair}${finalStatement}${visualFlair}!`;
}
}