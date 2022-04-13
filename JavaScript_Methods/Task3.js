var paragraph="Однажды я шёл перед вечером мимо базарной площади в лесничество. "+
    "Оно помещалось на окраине городка над рекой. "+
    "Среди улицы мальчишки играли в футбол. "+
    "Громкоговоритель висел на телеграфном столбе. "+
    "Он неожиданно защёлкал. "


function sent(str){

    var sentences=[];
    var t=0;

var k=str.split(".");

for(t;t<k.length-1;t++) {


    var h = k[t].split(" ");
    if (t>0) {
        h.shift();
    }
    var p=h.length;
    h = h.concat(".");

    var sentence = {lenght: p, words: h};

    sentences[t] = sentence;
}
    return sentences;
}

console.log(sent(paragraph));