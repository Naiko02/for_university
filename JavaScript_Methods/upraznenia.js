var firstArray = [1,2,3,"n",5,6,7,8,9,10];
var secondArray = [1,2,3,4,5,6,7,"n",9,10];

function closeToN (mas){
    var i= mas.indexOf("n",0);
    var ret=[i-1,i+1];
    return ret;
}

console.log(closeToN(firstArray));
console.log(closeToN(secondArray));

function numbersAfterN(mas){

    var i= mas.indexOf("n",0);
    var ret=mas.slice(i+1,mas.length);
    return ret;

}

console.log(numbersAfterN(firstArray));
console.log(numbersAfterN(secondArray));

function mergerNumbersAfterN(mas1,mas2){

    var i= mas1.indexOf("n",0);
    var j= mas2.indexOf("n",0);
    newMas1=mas1.slice(i+1,mas1.length);
    newMas2=mas2.slice(j+1,mas1.length);
    var ret=newMas1.concat(newMas2);
    return ret;

}

console.log(mergerNumbersAfterN(firstArray,secondArray));


var arr=[1,2,3,4,/*...*/];

function callback(previousValue,item){
    return previousValue*item;
}

function factorial(mas){

    var ret=mas.reduce(callback);
    return ret;

}

console.log(factorial(arr));

function reverseString(mas){

    var mas1=mas.reverse();
    var ret= mas1.join("-");
    return ret;

}

console.log(reverseString(arr));


var str = "?Я?предпочитаю?вести?здоровый?образ?жизни";

function splitStr(str){
    str=str.split("?");
    return str.slice(1,str.length);

}

console.log(splitStr(str));

function toEnd(str,underStr){

    var i= str.indexOf(underStr);
    if(i==-1)
        return " ";

    return str.slice(i,str.length);

}

console.log(toEnd(str,"здоровый"));
console.log(toEnd(str,"нездоровый"));

var str1="JavaScript";

function toCase(index,str){

    if (index==0)
        return str.toLowerCase();
    if (index==1)
        return str.toUpperCase();


}

console.log(toCase(0,str1));
console.log(toCase(1,str1));

function startOrEnd(str,underStr){

    if ((str.startsWith(underStr)==true)||(str.endsWith(underStr)==true)) {
        return true;
    }else{
        return false;
    }

}

console.log(startOrEnd(str1,"Java"));
console.log(startOrEnd(str1,"ipt"));
console.log(startOrEnd(str1,"Scr"));