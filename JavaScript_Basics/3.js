
var l=console.log;

var tournament={NumberOfMember: 200,
    PrisePool:1000000,

    ChangeMoney:function (money){
    tournament.PrisePool=money;},

    Output:function() {
    l(tournament.NumberOfMember);
    l(tournament.PrisePool);
    l(tournament.TypeOfSport);
    l(tournament.Stage);
    l("В нашем турнире существуют такие категории " + tournament.Weight)},

    set number(num){
    tournament.NumberOfMember=num;
    }
};

Object.defineProperty(tournament, 'TypeOfSport',{
    value: "Бокс",
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(tournament, 'Stage',{
    value: "Всероссийский этап",
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(tournament, 'Weight',{
    value: ["Наилегчайший вес","Полулёгкий вес","Лёгкий вес","Полусредний вес","Средний вес","Полутяжёлый вес","Тяжёлый вес","Сверхтяжёлый вес"],
    writable: false,
    enumerable: false,
    configurable: false
});

tournament.Output();

l("\n");

tournament.ChangeMoney(500000);

tournament.Output();

l("\n");

tournament.number=70;

tournament.Output();
