var l=console.log;

var x=50;

function TypeVar(x){

    if (typeof (x)=="number"){
        l("Число");
    }

    if (typeof (x)=="string"){
        l("Строка");
    }

    if (typeof (x)=="boolean"){
        l("Логический тип");
    }

    if (typeof (x)=="null"){
        l("Отсутствующее значение");
    }

    if (typeof (x)=="undefined"){
        l("Отсутствие примитива");
    }

    if (typeof (x)=="object"){
        l("объект");
    }

    if (typeof (x)=="function"){
        l("функция");
    }
}
TypeVar(x);