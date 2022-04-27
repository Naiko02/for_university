var a= 90000400001240;
var b=24;
console.log(a)
function sub(a){
if (a%10!=0) {a-=1}
else {a/=10}
return a
}
for (i=0;i<b;i++) {a=sub(a),console.log(a)}