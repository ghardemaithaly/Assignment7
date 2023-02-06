function isLowerCase(str,index){
    //checking and returing string 
    return str.charAt(index).toLowerCase()===str.charAt(index);

}
console.log(isLowerCase('test First Character is in Lowercase or Not',0));
console.log(isLowerCase('Test First Character is in Lowercase or Not',0));