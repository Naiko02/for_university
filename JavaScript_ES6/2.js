Array = [
    [0, 0], [0, 1], [0, -1], [1, 0],
    [-1, 0], [4, 5], [4, 4], [3, 4],
    [4, 3], [3, 3], [11, 2], [5, 5],
    [6, 9], [3, 6], [1, 4], [9, 1],
    [7, 10], [4, -1], [-3, 0], [-5, 2],
    [0, 2], [0, 2], [3, 2],
    [-2, 0], [4, 5], [4, 4],
    [4, 6], [5, 3], [3, -1], [3, 0],
    [6, 9], [2, 6], [3, -7], [6, 7],
    [7, 10], [4, -1], [-5, 2], [-1, 2],
]
function Centre(arr, i){
    r=false,l=false,t=false,bo=false
    for (j=0;j<arr.length;j++) {
        if (arr[i][0] < arr[j][0]  && arr[i][1] == arr[j][1]) {r = true}
        if (arr[i][0] > arr[j][0]  && arr[i][1] == arr[j][1]) {l = true}
        if (arr[i][1] < arr[j][1]  && arr[i][0] == arr[j][0]) {t = true}
        if (arr[i][1] > arr[j][1]  && arr[i][0] == arr[j][0]) {bo = true}
    }
    
    if((r==true) && (l==true) && (t==true) && (bo==true)) { return 1} else {return 0}

}
k=0
for(i=0;i<Array.length;i++) {k+=Centre(Array,i)}

console.log(k)