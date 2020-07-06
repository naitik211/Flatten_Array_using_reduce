const arr = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];

function flattenArray(arr) {
    //create an inital array
    let initialValue = [];
    
    
    return arr.reduce((acc, item) => {
        //Using Simple if else loop to understand it how it works
        if(Array.isArray(item)){
             return acc.concat(flattenArray(item));
        }else {
            return acc.concat(item);
        }
        
        /*Modify it by one liner code to make it more organized 
          return acc.concat(Array.isArray(item) ? flattenArray(item) : item); */
        
    }, initialValue)
}

console.log(flattenArray(arr));
