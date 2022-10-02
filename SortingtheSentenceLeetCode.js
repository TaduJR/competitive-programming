const sortSentence = function(s) {
    const strArr = s.split(" ");
    const result = new Array(strArr.length);
    for(let i = 0; i < strArr.length; i++) {
        let pos = strArr[i][strArr[i].length - 1];
        result[pos - 1] = strArr[i].slice(0, strArr[i].length - 1);
    }
    return result.join(" ");
};
