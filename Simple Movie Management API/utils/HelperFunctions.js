const findElementByID = (arr, id)=>{
    return arr.find(el => el.id == id);
}


module.exports = {
    findElementByID,
}