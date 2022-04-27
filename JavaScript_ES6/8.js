Array = [
    ["+Миша"], ["+Олег"], ["+Антон"],
    ["+Таня"], ["-Миша"],
    ["Таня:Как дела?"],
    ["Олег:Все хорошо!"],
    ["-Таня"], ["+Толя"],
    ["Толя:Я что-то пропустил?"]
]

function chat (arr) {

    k=0
    s=0
    for (i=0;i<arr.length;i++) {
        str = arr[i][0].split('')
        q=0
        if(str[0]=="+") {k++}
        else if (str[0]=="-") {k--}
        else {p=str.indexOf(":"), q=str.length-(p+1)}

        s+=(k-1)*q


    }
    return s
}

console.log(chat(Array))