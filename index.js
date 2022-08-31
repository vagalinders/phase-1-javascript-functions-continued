function saturdayFun(activity="roller-skate"){
    //It should return a String like "This Saturday, I want to ....!" Fill in the ... with the activity that's passed in as the first parameter. 
    // If nothing is passed in, default to "roller-skate".
    return `This Saturday, I want to ${activity}!`
    
}
 function mondayWork(work="go to the office"){
    // The function should return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter.
    // If nothing is passed in, default to "go to the office".
    return `This Monday, I will ${work}.`
 }

 function wrapAdjective(flair = "*"){
    const innerFunction = function(adjective= "special"){
        return `You are ${flair}${adjective}${flair}!`;

    }
return innerFunction;
 }
 console.log(wrapAdjective()())