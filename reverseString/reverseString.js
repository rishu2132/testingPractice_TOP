function reverseString(str){
    let reverse = "";
    for (i=0;i<=str.length;i++){
        reverse = reverse + str.charAt(str.length-i);
    }
    return reverse;
}

export {reverseString}