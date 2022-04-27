Array1 = [
    ["WBWBWBWB"],
    ["BWBWBWBW"],
    ["BWBWBWBW"],
    ["BWWBWBWW"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
]
Array2 = [
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
]

function hhh(arr){
    for (i=0;i<arr.length;i++){
        str=arr[i][0].split('')
        for(j=0;j<arr.length-1;j++) {
            if (str[j] == str[j + 1]) {
                return false
                break
            }
        }

}
    return true
}

console.log(hhh(Array1))
console.log(hhh(Array2))