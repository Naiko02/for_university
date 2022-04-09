var Target ={shows:[
    ["Дэйв","машины"],
        ["Анна","цветы"],
    ],
    targetWork:function([name,interest]){

    var i=0;


    console.log("Привет, " + name + ", мы следили за вами и знаем, что вас интересует " + interest + ". Присоединяйтесь к TheBestCompany! С нами уже:");

    for (var element of this.shows){

        console.log("\n"+(i+1)+". "+this.shows[i][0]+", который(ая) любит "+this.shows[i][1])
    i++;
    }
        this.shows.push([name,interest]);
}
}

Target.targetWork(["Валера","Гачи"]);
Target.targetWork(["Владимир","Дота"]);