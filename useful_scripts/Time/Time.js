
var T = new Object();

T.Time = new Date();
T.Months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
T.Days = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
T.DaysShort=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

function getD(){
    var d = this.Time.getDate();
    if(d <10){
        return "0"+ (d+1);
    }
    else{
        return d;
    }    
}
T.GetD = getD;

function getDay(){
    return this.Days[this.Time.getDate()] ;
}
T.GetDay = getDay;

function getDayShort(){
    return this.DaysShort[ this.Time.getDate()] ;
}
T.GetDayShort = getDayShort;

function getM(){
    var m = this.Time.getMonth();
    if(m <10){
        return "0"+ (m+1);
    }
    else{
        return m;
    }    
}
T.GetM = getM;


function getMonth(){
    return this.Months[this.Time.getMonth()];
}
T.GetMonth = getMonth;

function getY(){
    return this.Time.getFullYear();
}
T.GetY = getY;

function getYShort(){
    return this.Time.getFullYear()-2000;
}
T.GetYShort = getYShort;

function getDMY(){
    return this.GetD() + ":" + this.GetM() + ":" + this.GetYShort();
}
T.GetDMY = getDMY;

console.log(T.GetDMY());