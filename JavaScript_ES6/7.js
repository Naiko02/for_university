str = "ГозулиагртГтГроаугитглтГроауГрулзиораороуизлтГроуулГиатзлилит"
test= ['Г','р','о','у','л','и','т']

function Groulit(str,test){

    q=100

    str1=str.split('')

    for(i=0;i<test.length;i++){
        r=0
        for(j=0;j<str1.length;j++){

            if (str1[j]==test[i]) {r++}

        }
        if (r<q) {q=r}
    }
    return q

}

console.log(Groulit(str,test))