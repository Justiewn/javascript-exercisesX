const removeFromArray = function() {
    myList = arguments[0];
    console.log(myList);
    numItemsRemovable = arguments.length;
    for (i = 1; i < numItemsRemovable; i++) {
        let index = myList.indexOf(arguments[i]);
        if (index > -1) {
            myList.splice(index,1);
        }
    }
    return myList;
}

module.exports = removeFromArray
