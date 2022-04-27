Array = [
    ["A", "B", true], ["A", "C", true], ["B", "C", true],
    ["A", "D", true], ["B", "D", true], ["D", "C", true],
    ["E", "D", true], ["E", "B", true], ["A", "E", false],
    ["C", "E", false]
]

letter=["A","B","C","D","E"]
sorting=[]

function sort(arr, str) {
    k = 0
    for (i = 0; i < arr.length; i++){
        if (arr[i][0] == str && arr[i][2] == false) {k++}
        if (arr[i][1] == str && arr[i][2] == true) {k++}
}
    return k
}
for (j=0;j<letter.length;j++){
sorting[sort(Array,letter[j])]=letter[j]
}
console.log(sorting)