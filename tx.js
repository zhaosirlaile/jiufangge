var myBut = document.getElementById("consoles").getElementsByClassName("button");
var myBlock = document.getElementsByClassName("xgz");

for(var i = 0 ; i < myBut.length; i ++){
    myBut[i].onmouseover = overChangeBut;
    myBut[i].onmouseout = outChangeBut;
    if(i === 0 ){
        myBut[0].onclick = showblock;
    }else if(i === 1){
        myBut[i].onclick = jieshu;

    }
}
//开始闪、结束闪的效果
function overChangeBut() {
    this.setAttribute("class","button bgcolor");
}
function outChangeBut() {
    this.setAttribute("class","button")
}
//开始闪、结束闪的效果
function showblock() {
    for(var i = 0 ; i < myBut.length ; i ++){
        if(myBut[i] === this){
            kaishi();
        }else{
            huanyuan();
        }
    }
}
//开始功能
function kaishi() {
    huanyuan();
//随机生成0-9的随机数
    var arr = new Array();
    while (true) {
        var num = Math.floor(Math.random() * 9);
        if (arr.length === 3) {
            break;
        }
        if (arr.indexOf(num) >= 0) {
            continue;
        } else {
            arr.push(num);
        }
    }
// 随机生成0-9九的随机数
    //变色
    for(var i = 0 ; i < arr.length; i ++ ){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        myBlock[arr[i]].style.backgroundColor = "rgb(" + r + "," + g +"," + b + ")";
    }
    //变色
     id = setTimeout(kaishi,1000);
}
//开始功能
function huanyuan() {
    for (var i = 0;i < myBlock.length ; i ++){
        myBlock[i].style.backgroundColor = "orange";
    }
}
//结束功能
function jieshu() {
    window.clearTimeout(id);
    for (var i = 0;i < myBlock.length ; i ++){
        myBlock[i].style.backgroundColor = "orange";
    }
}
//结束功能



