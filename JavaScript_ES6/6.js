Array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

function sort(arr){
    k1=0
    k2=0

    for(element of arr){
        if(element%2==0){k1++}
        else{k2++}
    }
    if (k1!=k2 && k1!=k2-1) {return "Сортировка невозможна";exit}

    i=0
    j=1
    test=[]
    for (k=0;k<arr.length;k++){

        if (arr[k]%2==0) {test[j]=arr[k], j+=2}
        else {test[i]=arr[k], i+=2}

    }
    return test

}

console.log(sort(Array))