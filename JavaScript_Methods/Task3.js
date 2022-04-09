var paragraph="Однажды я шёл перед вечером мимо базарной площади в лесничество. "+
    "Оно помещалось на окраине городка над рекой. "+
    "Среди улицы мальчишки играли в футбол. "+
    "Громкоговоритель висел на телеграфном столбе. "+
    "Он неожиданно защёлкал. "


function sent(str){

    var i=-1;
    var sentences=[];
    var t=0;
    for(;;) {

        var k=str.indexOf(".",i+1);
        var h=str.slice(i+1,k);
        h=h.split(" ");
        h=h.concat(".");
        var p=h.indexOf(".");
        var sentence = {lenght: p, words: h};

        sentences[t]=sentence;
        t++;
        i=k+1;

        if ((k+2)==str.length)
            break;

    }
    return sentences;
}

console.log(sent(paragraph));
