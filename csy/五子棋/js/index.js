//画布画笔
var chess = document.getElementById("chess");
var context = chess.getContext("2d"); // context可以看作画笔
context.strokeStyle = "#bfbfbf";//画笔颜色
var ok = document.getElementById("ok");
//加载棋盘
window.onload = function () {
    create();
};
//创建棋盘
function create() {

    for (var i = 0; i < 15; i++) {
        context.moveTo(15, 15 + 30 * i); //横线（x,y）起始点
        context.lineTo(435, 15 + 30 * i); //横线(x,y)终止点
        context.stroke();  //画一条横线

        context.moveTo(15 + 30 * i, 15);  //竖线
        context.lineTo(15 + 30 * i, 435);
        context.stroke();
    }
}
//玩家点击下棋
chess.onclick = function (e) {
    var i = (e.offsetX / 30) | 0;//得到点击的x坐标
    var j = (e.offsetY / 30) | 0;//得到点击的y坐标
    var x = i;
    var y = j;
    if (isChess[x][y] == 0) { //是否有棋子，没有下子
        isChess[x][y] = 1; //值变1
        oneStep(x, y, true); //玩家颜色
        for (var i = 0; i < count; i++) {
            if (wins[x][y][i]) {
                manWin[i]++;
            }
            if (manWin[i] == 5) {
                alert("你赢了");
            }
        }
        computerPlayerAction();//玩家下完电脑下

    }
};
ok.onclick = function () {
    context.clearRect(0, 0, chess.width, chess.height);
    Gobang();
    create()

}
//电脑下棋
function computerPlayerAction() {
    var max = 0;
    var u = 0;                      //电脑棋x坐标
    var v = 0;                   //电脑棋y坐标

    var manOfValue = [];            //玩家赢的权值
    var computerOfValue = [];     //电脑赢的权值

    for (var x = 0; x < 15; x++) {
        manOfValue[x] = [];
        computerOfValue[x] = [];
        for (var y = 0; y < 15; y++) {
            manOfValue[x][y] = 0;
            computerOfValue[x][y] = 0;
        }
    }

    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 15; y++) {
            if (isChess[x][y] == 0) {     //查找空白棋

                for (var i = 0; i < count; i++) {    //遍历count
                    if (wins[x][y][i]) {
                        if (manWin[i] == 1) { manOfValue[x][y] += 200; }    //给予权值
                        else if (manWin[i] == 2) { manOfValue[x][y] += 400; }
                        else if (manWin[i] == 3) { manOfValue[x][y] += 2000; }
                        else if (manWin[i] == 4) { manOfValue[x][y] += 10000; }

                        if (computerWin[i] == 1) { computerOfValue[x][y] += 220; }    //电脑相同条件权值要比玩家高，主要还是自己赢
                        else if (computerWin[i] == 2) { computerOfValue[x][y] += 420; }
                        else if (computerWin[i] == 3) { computerOfValue[x][y] += 2200; }
                        else if (computerWin[i] == 4) { computerOfValue[x][y] += 20000; }
                    }
                }


                if (manOfValue[x][y] > max) {          //循环判断最大权值
                    max = manOfValue[x][y];
                    u = x;
                    v = y;
                }
                if (computerOfValue[x][y] > max) {
                    max = computerOfValue[x][y];
                    u = x;
                    v = y;
                }


            }
        }
    }

    oneStep(u, v, false);   //电脑判断完成，下棋

    isChess[u][v] = 1;      //标记已下

    for (var i = 0; i < count; i++) {     //（x，y）在赢法i上 该赢法将赢数加一
        if (wins[u][v][i]) {
            computerWin[i]++;
        }
        if (computerWin[i] == 5) {
            alert("电脑赢了");
        }
    }
}
//p2
// function computerPlayerAction2(){
//     var max2=0;
//     var u2=5;                      //电脑棋x坐标
//     var v2=5;                   //电脑棋y坐标

//     var manOfValue2=[];            //玩家赢的权值
//     var computerOfValue2=[];     //电脑赢的权值

//     for(var x=0;x<15;x++){
//         manOfValue2[x]=[];
//         computerOfValue2[x]=[];
//         for(var y=0;y<15;y++){
//             manOfValue2[x][y]=0;
//             computerOfValue2[x][y]=0;
//         }
//     }

//     for(var x=0;x<15;x++){
//         for(var y=0;y<15;y++){
//             if(isChess[x][y]==0){     //查找空白棋

//                 for(var i=0;i<count;i++){    //遍历count
//                     if(wins[x][y][i]){
//                         if(manWin[i]==1)
//                         {manOfValue2[x][y]+=200;}    //给予权值
//                         else if(manWin[i]==2)
//                         {manOfValue2[x][y]+=400;}
//                         else if(manWin[i]==3)
//                         {manOfValue2[x][y]+=2000;}
//                         else if(manWin[i]==4)
//                         {manOfValue2[x][y]+=10000;}

//                         if(computerWin[i]==1)
//                         {computerOfValue2[x][y]+=220;}    //电脑相同条件权值要比玩家高，主要还是自己赢
//                         else if(computerWin[i]==2)
//                         {computerOfValue2[x][y]+=420;}
//                         else if(computerWin[i]==3)
//                         {computerOfValue2[x][y]+=2200;}
//                         else if(computerWin[i]==4)
//                         {computerOfValue2[x][y]+=20000;}
//                     }	
//                 }


//                 if(manOfValue2[x][y]>max){          //循环判断最大权值
//                     max=manOfValue2[x][y];
//                     u=x;
//                     v=y;
//                 }
//                 if(computerOfValue2[x][y]>max){
//                     max=computerOfValue2[x][y];
//                     u=x;
//                     v=y;
//                 }


//             }	
//         }
//     }

//     oneStep(u,v,false);   //电脑判断完成，下棋

//     isChess[u][v]=1;      //标记已下

//     for(var i=0;i<count;i++){     //（x，y）在赢法i上 该赢法将赢数加一
//         if(wins[u][v][i]){
//             computerWin[i]++;
//         }
//         if(computerWin[i]==5){
//             alert("电脑2赢了");
//         }
//     }
//     setInterval(computerPlayerAction2,1000);
//     // computerPlayerAction();
// }

// player true 为玩家，false为电脑
function oneStep(x, y, player) {

    var color;
    context.beginPath();//开始画园
    context.arc(15 + 30 * x, 15 + 30 * y, 13, 0, 2 * Math.PI);//（x,y,半径，起始点，终止点2*PI）
    context.closePath();//结束画圆
    if (player) {
        color = "black";//玩家是黑色
    } else {
        color = "red";//电脑是红色
    }
    context.fillStyle = color;//设置填充色
    context.fill();//填充颜色
    context.shadowBlur = 5;
    context.shadowOffsetX = -5;
    context.shadowOffsetY = -5;
    context.shadowColor = "white";
};
//赢法数组
var wins = [];
// for (var i = 0; i < 15; i++) {   //定义三维数组
//     wins[i] = [];
//     for (var j = 0; j < 15; j++) {
//         wins[i][j] = [];
//     }
// }
var count = 0; //(x,y)在的赢法种类
// //横线能赢得情况
// for (var x = 0; x < 11; x++) {
//     for (var y = 0; y < 15; y++) {
//         for (var z = 0; z < 5; z++) {  //z代表向后5个子
//             wins[x + z][y][count] = true;  //true代表是一种赢法，用count记录下来
//         }
//         count++; //(x,y)在另一个赢法中
//     }
// }
// //竖线能赢的情况
// for (var x = 0; x < 15; x++) {
//     for (var y = 0; y < 11; y++) {
//         for (var z = 0; z < 5; z++) {
//             wins[x][y + z][count] = true;
//         }
//         count++;
//     }
// }
// //正斜线
// for (var x = 0; x < 11; x++) {
//     for (var y = 0; y < 11; y++) {
//         for (var z = 0; z < 5; z++) {
//             wins[x + z][y + z][count] = true;
//         }
//         count++;
//     }
// }
// //反斜线
// for (var x = 0; x < 11; x++) {

//     for (var y = 4; y < 15; y++) {
//         for (var z = 0; z < 5; z++) {
//             wins[x + z][y - z][count] = true;
//         }
//         count++;
//     }
// }
//遍历棋盘，是否由其子，默认为0没有
var isChess = [];
function Gobang() {
    isChess = [];
    wins = [];
    count = 0;
    manWin = [];
    computerWin = [];
    for (var i = 0; i < 15; i++) {   //定义三维数组
        wins[i] = [];
        for (var j = 0; j < 15; j++) {
            wins[i][j] = [];
        }
    }
    //横线能赢得情况
    for (var x = 0; x < 11; x++) {
        for (var y = 0; y < 15; y++) {
            for (var z = 0; z < 5; z++) {  //z代表向后5个子
                wins[x + z][y][count] = true;  //true代表是一种赢法，用count记录下来
            }
            count++; //(x,y)在另一个赢法中
        }
    }
    //竖线能赢的情况
    for (var x = 0; x < 15; x++) {
        for (var y = 0; y < 11; y++) {
            for (var z = 0; z < 5; z++) {
                wins[x][y + z][count] = true;
            }
            count++;
        }
    }
    //正斜线
    for (var x = 0; x < 11; x++) {
        for (var y = 0; y < 11; y++) {
            for (var z = 0; z < 5; z++) {
                wins[x + z][y + z][count] = true;
            }
            count++;
        }
    }
    //反斜线
    for (var x = 0; x < 11; x++) {

        for (var y = 4; y < 15; y++) {
            for (var z = 0; z < 5; z++) {
                wins[x + z][y - z][count] = true;
            }
            count++;
        }
    }
    for (var i = 0; i < 15; i++) {
        isChess[i] = [];
        for (var j = 0; j < 15; j++) {
            isChess[i][j] = [];
        }
    }
    for (var i = 0; i < count; i++) {
        manWin[i] = 0;
        computerWin[i] = 0;
    }
}
Gobang();
//人和电脑赢的子占赢法的情况
var manWin = [];
var computerWin = [];
for (var i = 0; i < count; i++) {
    manWin[i] = 0;
    computerWin[i] = 0;
}
