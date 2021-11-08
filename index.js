function isWinner(element) {
    return (element.result === "W")
}
function superbowlWin(record) {
    const found = record.find(isWinner);
    //const found = record.find(element => isWinner(element));
    if (found) {
        return found.year
    } else {
        return undefined
    }  
    
}
