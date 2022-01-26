
var _slideespecieindex = 1;
var _slideracaindex = 1;
var _slidedoglist =[];
var _slidecatlist =[];
var _slidebirdlist =[];
var _sliderodentlist =[];
Load();
ShowespecieDivs(1);
ShowracaDivs(1);


function plusespeciedivs(n){
    ShowespecieDivs(_slideespecieindex += n);
}

function ShowespecieDivs(n){
    var i;
    var x = document.getElementsByClassName("MyespecieSlides");
    var y = document.getElementsByClassName("imgfieldraca");
    if( n > x.length) { _slideespecieindex = 1 }
    if( n < 1 ) { _slideespecieindex = x.length }

    for(i = 0 ; i < x.length ; i++)
    {
        x[i].style.display="none";
        y[i].style.display="none";

    }
    x[_slideespecieindex-1].style.display="block";
    y[_slideespecieindex-1].style.display="block";

    _slideracaindex=1;
    ShowracaDivs(_slideespecieindex);
}


function Load()
{

    _slidedoglist = document.getElementsByClassName("MydogSlides");
    _slidecatlist = document.getElementsByClassName("MycatSlides");
    _slidebirdlist = document.getElementsByClassName("MybirdSlides");
    _sliderodentlist = document.getElementsByClassName("MyrodentSlides");

}


function plusracadivs(n){
    ShowracaDivs(_slideracaindex += n);
}

function ShowracaDivs(n){
    var i;
    var x = [];
    if(_slideespecieindex == 1){x=_slidedoglist}
    else if(_slideespecieindex == 2){x=_slidecatlist}
    else if(_slideespecieindex == 3){x=_slidebirdlist}
    else if(_slideespecieindex == 4){x=_sliderodentlist}


    if( n > x.length) { _slideracaindex = 1 }
    if( n < 1 ) { _slideracaindex = x.length }

    for(i = 0 ; i < x.length ; i++)
    {
        x[i].style.display="none";

    }
    x[_slideracaindex-1].style.display="block";
}