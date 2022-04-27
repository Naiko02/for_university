Array = ["Миша", "Гена", "Маша", "Олег", "Петя", "Вова", "Вера", "Лена", "Света"]

    k = 30
q=0
function snowball(arr,k){
    for(i=0;i<arr.length;i++){
        for (j=0;j<=i;j++){
            q++
            if(q==k){return arr[j];break}
        }
    }
}

console.log(snowball(Array,k))