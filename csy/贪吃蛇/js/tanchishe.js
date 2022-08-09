var snakebody = [], food;
let direction = 'x';
let score = 0;
let time;
let off = document.getElementById('off');
let scoreinput = document.getElementById('score');
let container = document.getElementById("container");
let upbtn = document.getElementById('up');
let leftbtn = document.getElementById('left');
let bottombtn = document.getElementById('bottom');
let rightbtn = document.getElementById('right');
let isturn = false;
let containerrect=container.getBoundingClientRect();
console.log(containerrect)
let width=containerrect.width;
let height=containerrect.height;
let topdis=containerrect.top;
let left=containerrect.left;
off.onclick = function () {
    let text = off.innerText;
    if (text == '继续游戏' || text == '开始游戏') {
        time = setInterval(function () {
            move()
            off.blur();
        }, 500);
        off.innerText = '暂停游戏';
    } else if (text == '暂停游戏') {
        clearInterval(time);
        off.innerText = '继续游戏';
    } else if (text == '重新开始') {
        score = 0;
        snakebody = [];
        food = null;
        direction = 'x'
        restart();
        time = setInterval(function () {
            move()
            off.blur();
        }, 500);
        off.innerText = '暂停游戏';
    }

};

function establishsnakebody() {

    snake(6);
    for (let index = 0; index < snakebody.length; index++) {
        const element = snakebody[index];
        element.style.top = '0px';
        element.style.left = 0 + index * 25 + 'px';

        container.appendChild(element)


    }
    establifood()
}
establishsnakebody();
function snake(num) {

    for (let index = 0; index < num; index++) {
        let size = document.createElement('div');
        size.classList.add('snakesize')
        snakebody.push(size);
    }


}


function move() {
    let size1 = snakebody[0];
    let size2 = snakebody[snakebody.length - 1];
    let size2x = size2.offsetLeft;
    let size2y = size2.offsetTop;
    let x, y
    if (direction == 'x') {
        if (size2x + 25 >= width) {
            clearInterval(time);
            off.innerText = '重新开始';
            return;
        }
        x = size2x + 25;
        y = size2y;

    }
    if (direction == '-x') {
        if (size2x - 25 < 0) {
            clearInterval(time);
            off.innerText = '重新开始';
            return;
        }
        x = size2x - 25;
        y = size2y;
    }
    if (direction == 'y') {
        if (size2y + 25 >= height) {
            clearInterval(time);
            off.innerText = '重新开始';
            return;
        }
        x = size2x;
        y = size2y + 25;
    }
    if (direction == '-y') {
        if (size2y - 25 < 0) {
            clearInterval(time);
            off.innerText = '重新开始';
            return;
        }
        x = size2x;
        y = size2y - 25;
    }
    let iscollision = collision(x, y);
    if (iscollision == true) {
        clearInterval(time);
        off.innerText = '重新开始';
        return;
    }
    snakebody.shift();
    if (foodposition[0] == x && foodposition[1] == y) {
        snakebody.splice(0, 0, food);
        establifood();
        score += 10;
        scoreinput.innerText = score;
    }
    size1.style.left = x + 'px';
    size1.style.top = y + 'px';

    snakebody.push(size1);
    isturn = true;
}




document.addEventListener('keydown', onkeydown, false);

function onkeydown(event) {
    if (isturn == false) return;

    switch (event.key) {
        case 'w':
            if (direction != 'y') {
                direction = '-y';
                isturn = false
            }
            break;
        case 'a':
            if (direction != 'x') {
                direction = '-x';
                isturn = false
            }
            break;
        case 's':
            if (direction != '-y') {
                direction = 'y';
                isturn = false
            }
            break;
        case 'd':
            if (direction != '-x') {
                direction = 'x';
                isturn = false
            }
            break;
    }
}
upbtn.onclick = function () {
    if (direction != 'y') {
        direction = '-y';
        isturn = false
    }
}
leftbtn.onclick = function () {
    if (direction != 'x') {
        direction = '-x';
        isturn = false
    }
}
bottombtn.onclick = function () {
    if (direction != '-y') {
        direction = 'y';
        isturn = false
    }
}
rightbtn.onclick = function () {
    if (direction != '-x') {
        direction = 'x';
        isturn = false
    }
}



function establifood() {
    let x, y;
    let xitem=width/25/10;
    let yitem=height/25/10;
    console.log(xitem)
    console.log(yitem)
    while (true) {
        x = Math.ceil(Math.random() * 10 * xitem) * 25;
        y = Math.ceil(Math.random() * 10 * yitem) * 25;
        console.log(x)
        console.log(y)
        let iscollision = collision(x, y);
        if (!iscollision) {
            break;
        }
    }

    let size = document.createElement('div');
    size.classList.add('snakesize');
    size.style.top = y + 'px';
    size.style.left = x + 'px';
    container.appendChild(size)
    foodposition = [x, y];
    food = size;
}
function collision(x, y) {
    let iscollision = false;
    for (let index = 1; index < snakebody.length; index++) {
        const element = snakebody[index];
        let sizex = element.offsetLeft;
        let sizey = element.offsetTop;

        console.log(x == sizex && y == sizey)
        if (x == sizex && y == sizey) {
            iscollision = true;
            return iscollision;
        }
    }
    return iscollision;
}

function restart() {
    container.innerHTML = '';
    establishsnakebody();
}