
function Rectangle(x, y, width, height, path, tower) {
    this.x = (x == null) ? 0 : x;
    this.y = (y == null) ? 0 : y;
    this.width = (width == null) ? 0 : width;
    this.height = (height == null) ? this.width : height;
    this.path = (path == null) ? 0 : path;
    this.tower = (tower == null) ? this.tower : false;
}



function TextArea(x, y, width, height, index) {
    if (index >= 0) {
        this.x = (x == null) ? 0 : x;
        this.y = (y == null) ? 0 : y;
        this.width = (width == null) ? 0 : width;
        this.height = (height == null) ? this.width : height;
        this.img = imgTextArea;
        this.texttitle = tipotower[index].name;
        this.textgunters = tipotower[index].gunter + " gunters";
        this.textbinding = "[" + tipotower[index].binding + "]";
        this.titledes = "Descripcion:";
        this.description = tipotower[index].description.split("\n");
    } else if (index < 0) {
        index = -index;
        this.x = (x == null) ? 0 : x;
        this.y = (y == null) ? 0 : y;
        this.width = (width == null) ? 0 : width;
        this.height = (height == null) ? this.width : height;
        this.img = imgTextArea;
        this.texttitle = texthelp[index].name;
        this.textgunters = "";
        this.textbinding = "[" + texthelp[index].binding + "]";
        this.titledes = "Descripcion:";
        this.description = texthelp[index].description.split("\n");
    }




}


function LifeBar(x, y, width, height, initLife) {
    this.x = (x == null) ? 0 : x;
    this.y = (y == null) ? 0 : y;
    this.width = (width == null) ? 0 : width;
    this.height = (height == null) ? this.width : height;
    this.img = imgLife;
    this.imgwidth = width;
    this.initLife = initLife;
    this.updateLife = function(life) {
        if (life >= 0) {
            this.imgwidth = life / this.initLife * this.width;
        } else {
            this.imgwidth = 0;
        }
    }

    this.updatePosition = function(x, y) {
        this.x = (x == null) ? 0 : x;
        this.y = (y == null) ? 0 : y;
    }

}


function Bullet(x, y, Enemy, damage, index, direccion) {

    this.x = (x == null) ? 0 : x;
    this.y = (y == null) ? 0 : y;
    this.xi = this.x;
    this.yi = this.y;
    this.direccion = direccion;
    this.bulletType = tipotower[index].bulletType;
    this.width = tipotower[index].bulletSize;
    this.height = tipotower[index].bulletSize;
    this.damage = (damage == null) ? 0 : damage;
    this.img = new Image();
    this.img.src = tipotower[index].imgbullet;
    this.Enemy = Enemy;
    this.velocity = tipotower[index].velocity;
    this.radio = tipotower[index].radio;
    this.countradio = 0;
    this.intersects = function(rect) {
        if (rect != null) {
            return(this.x <= rect.x + rect.width &&
                    this.x + this.width > rect.x &&
                    this.y <= rect.y + rect.height &&
                    this.y + this.height > rect.y);
        }
    }

    this.move = function() {
        if (this.bulletType == "target") {
            var dx = Enemy.x + Enemy.width / 2 - this.x;
            var dy = Enemy.y + Enemy.height / 2 - this.y;
            var angle = Math.atan(dy / dx);
            var dxf = Math.cos(angle) * this.velocity;
            var dyf = Math.sin(angle) * this.velocity;

            if (dx < 0) {
                dxf = dxf * -1;
                dyf = dyf * -1;
            }

            this.x += dxf;
            this.y += dyf;

        } else if (this.bulletType == "lineal" || this.bulletType == "area") {
            switch (this.direccion) {
                case "top":
                    this.y -= this.velocity;
                    break;
                case "left":
                    this.x -= this.velocity;
                    break;
                case "bot":
                    this.y += this.velocity;
                    break;
                case "right":
                    this.x += this.velocity;
                    break;
            }
            this.countradio += this.velocity;

        }


    }





}

function Tower(x, y, width, height, damage, radio, img, index) {
    this.x = (x == null) ? 0 : x;
    this.y = (y == null) ? 0 : y;
    this.index = index;
    this.width = (width == null) ? 0 : width;
    this.height = (height == null) ? this.width : height;
    this.damage = (damage == null) ? 0 : damage;
    this.radio = (radio == null) ? 0 : radio;
    this.img = new Image();
    this.img.src = img;
    this.Enemy = null;
    this.bulletType = tipotower[index].bulletType;
    this.delay = tipotower[index].delay;
    this.count = this.delay;




    this.shoot = function() {
        if (this.Enemy != null) {
            if (this.bulletType == "target") {
                ArrayBullet.push(new Bullet(this.x, this.y, this.Enemy, this.damage, index));

            } else if (this.bulletType == "lineal" || this.bulletType == "area") {
                ArrayBullet.push(new Bullet(this.x, this.y, this.Enemy, this.damage, index, "top"));
                ArrayBullet.push(new Bullet(this.x, this.y, this.Enemy, this.damage, index, "bot"));
                ArrayBullet.push(new Bullet(this.x, this.y, this.Enemy, this.damage, index, "left"));
                ArrayBullet.push(new Bullet(this.x, this.y, this.Enemy, this.damage, index, "right"));

            }
            this.Enemy = null;
        }

    }



    this.selecttarget = function() {
        if (this.Enemy == null && this.count >= this.delay) {
            var modulomin = this.radio;

            for (var i = 0; i < horda.ArrayEnemy.length; i++) {
                var modulo = Math.sqrt(Math.pow(horda.ArrayEnemy[i].x - (this.x), 2) + Math.pow(horda.ArrayEnemy[i].y - (this.y), 2));
                if (modulo <= modulomin) {
                    modulomin = modulo;
                    this.Enemy = new Enemy();
                    this.Enemy = horda.ArrayEnemy[i];
                    this.count = 0;

                }

            }
            this.shoot();

        }

        this.count += 30;
    }
}



function Enemy(x, y, width, height, positionpath, img, hp, gunter, princess) {
    this.x = (x == null) ? 0 : x;
    this.y = (y == null) ? 0 : y;
    this.width = (width == null) ? 0 : width;
    this.height = (height == null) ? this.width : height;
    this.positionpath = (positionpath == null) ? 0 : positionpath;
    this.porcentaje = 0;
    this.img = img;
    this.hp = hp;
    this.gunter = gunter;
    this.princess = princess;
    this.lifebar = new LifeBar(x, y - 15, width, 5, hp);

    this.move = function() {
        this.x = (path[this.positionpath + 1].x - path[this.positionpath].x) * this.porcentaje + path[this.positionpath].x;
        this.y = (path[this.positionpath + 1].y - path[this.positionpath].y) * this.porcentaje + path[this.positionpath].y;
        this.porcentaje += 0.03;
        if (this.porcentaje >= 1) {
            this.porcentaje = 0;
            this.positionpath++;
        }
        this.lifebar.updatePosition(this.x, this.y - 15);
    }

    this.damaged = function(damage) {
        this.hp -= damage;
        this.lifebar.updateLife(this.hp);
    }



}


function Horde() {
    this.count = 0;
    this.ArrayEnemy = Array();
    this.index = -1;
    this.Ammount = 0;
    this.addEnemy = function() {
        if (this.index >= 0) {
            if (this.count >= 1500 && this.Ammount > 0) {
                var img = new Image();
                img.src = oleada[this.index].img;
                this.ArrayEnemy.push(new Enemy(path[0].x, path[0].y, squareSize, squareSize, 0, img, oleada[this.index].hp, oleada[this.index].gunter, oleada[this.index].princess));
                this.Ammount--;
                this.count = 0;
            } else if (this.Ammount == 0 && this.ArrayEnemy.length == 0) {
                var start = document.getElementById("start");
                start.setAttribute("style", "background-image: url(../Resources/iconogo.jpg);");
            }
            this.count += 30;
        }
    }

    this.nextHorde = function() {
        var start = document.getElementById("start");
        if (countoleada > this.index && this.Ammount <= 0 && this.ArrayEnemy.length == 0 && this.index < oleada.length - 1) {

            this.index++;
            this.Ammount = oleada[this.index].ammount;

            if (timespeed == 10) {
                start.setAttribute("style", "background-image: url(../Resources/iconorapido1.jpg);");
            } else if (timespeed == 20) {
                start.setAttribute("style", "background-image: url(../Resources/iconorapido.jpg);");
            }
        } else {
            if (timespeed == 20) {
                setTimeSpeed(10);
                start.setAttribute("style", "background-image: url(../Resources/iconorapido1.jpg);");
            } else if (timespeed == 10) {
                setTimeSpeed(20);
                start.setAttribute("style", "background-image: url(../Resources/iconorapido.jpg);");
            }
        }
    }
    this.spliceEnemy = function(index) {

        gunters += this.ArrayEnemy[index].gunter;
        this.ArrayEnemy.splice(index, 1);
        soundead.volume = volumen;
        soundead.play();
    }

    this.reset = function() {
        this.ArrayEnemy = new Array();
        this.index = -1;
        this.Ammount = 0;
    }




}

window.addEventListener('load', init, false);
var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
var princess = 50;
var gunters = 20;
var timespeed = 20;
var horda = new Horde();
var canvas = null, ctx = null;
var mapa;
var path;
var pathimg = new Image();
this.pathimg.src = "../Resources/path2.jpg";
var imgCircle = new Image();
this.imgCircle.src = "../Resources/circulo.png";
var imgCircleRed = new Image();
this.imgCircleRed.src = "../Resources/circulored.png";
var imgLife = new Image();
this.imgLife.src = "../Resources/life.jpg";
var valuetower;
var canvasHeight = 600;
var canvasWidth = 800;
var squareSize = 50;
var mousetower = null;
var mousex, mousey, xdondecolocarlatorre, ydondecolocarlatorre;
var mousetowerrange;
var cuadradodondeponertorre;
var ArrayTower = Array();
var ArrayBullet = Array();
var TowerRangeVisible = null;
var soundead = new Audio("../Resources/chomp.wav"); // buffers automatically when created
var soundlosthp = new Audio("../Resources/dies.wav"); // buffers automatically when created
var nobuild = new Audio("../Resources/nobuild.wav");
var innitpath = "0300";
var textarea = null;
var imgTextArea = new Image();
this.imgTextArea.src = "../Resources/textarea.png";
var PRESSING = new Array();
var ivictoria = new Image();
this.ivictoria.src = "../Resources/victoria.png";
var iderrota = new Image();
this.iderrota.src = "../Resources/derrota.png";
var win = false;
var reproductor;
var volumen;
var buttonice;
var buttonlemon;
var buttonmagic;
var buttonhudson;
var buttonlich;
var buttonsell;
var data =
        '[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],' +
        '[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0],' +
        '[0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0],' +
        '[1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0],' +
        '[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],' +
        '[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],' +
        '[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],' +
        '[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],' +
        '[0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1],' +
        '[0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0],' +
        '[0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0],' +
        '[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]';
var oleada = [
    {"img": "../Resources/lsp.png", "hp": 6, "gunter": 1, "princess": 1, "ammount": 20},
    {"img": "../Resources/beemo.png", "hp": 8, "gunter": 1, "princess": 1, "ammount": 30},
    {"img": "../Resources/treetrunk.png", "hp": 16, "gunter": 1, "princess": 1, "ammount": 40},
    {"img": "../Resources/susan.png", "hp": 22, "gunter": 1, "princess": 1, "ammount": 50},
    {"img": "../Resources/billy.png", "hp": 34, "gunter": 1, "princess": 2, "ammount": 60},
    {"img": "../Resources/ladyraincorn.png", "hp": 48, "gunter": 1, "princess": 2, "ammount": 70},
    {"img": "../Resources/jake.png", "hp": 65, "gunter": 1, "princess": 2, "ammount": 80},
    {"img": "../Resources/finn.png", "hp": 79, "gunter": 1, "princess": 2, "ammount": 90},
    {"img": "../Resources/marceline.png", "hp": 94, "gunter": 1, "princess": 4, "ammount": 100},
    {"img": "../Resources/fionna.png", "hp": 115, "gunter": 1, "princess": 4, "ammount": 150},
    {"img": "../Resources/finnandjake.png", "hp": 130, "gunter": 1, "princess": 4, "ammount": 200}
];
var tipotower = [
    {"img": "../Resources/Original_Ice_King.png", "name": "Ice King", "damage": 4, "radio": 200, "gunter": 10, "velocity": 3, "imgbullet": "../Resources/ice.png", "bulletSize": 15, "bulletType": "target", "delay": 3000, "description": "Ice King inflge 4 de dano a una \nvelocidad lenta y con un enfriamiento medio \na un solo objetivo por disparo. Ice King tiene un \nrango de 200 px.", "binding": "Q"},
    {"img": "../Resources/lemongrab.png", "name": "Lemongrab", "damage": 2, "radio": 300, "gunter": 20, "velocity": 6, "imgbullet": "../Resources/lemon.png", "bulletSize": 15, "bulletType": "target", "delay": 1000, "description": "Lemongrab inflge 2 de dano a una \nvelocidad rapida y con un enfriamiento rapido \na un solo objetivo por disparo. Lemongrab tiene \nun rango de 300 px.", "binding": "W"},
    {"img": "../Resources/Magic_Man.png", "name": "Magic Man", "damage": 8, "radio": 400, "gunter": 30, "velocity": 4, "imgbullet": "../Resources/arcoiris.png", "bulletSize": 35, "bulletType": "lineal", "delay": 5000, "description": "Magic Man inflge 8 de dano a una \nvelocidad normal y con un enfriamiento lento, \ndispara 4 balas simultaniamente en los 4 sentidos \ncardinales. Magic Man tiene un rango de 400 px.", "binding": "E"},
    {"img": "../Resources/hunson.png", "name": "Hunson", "damage": 0.08, "radio": 130, "gunter": 50, "velocity": 6, "imgbullet": "../Resources/bat.png", "bulletSize": 35, "bulletType": "area", "delay": 500, "description": "Hudson inflge 0.08 de dano a una \nvelocidad rapida y con un enfriamiento muy \nrapido, dispara 4 balas simultaniamente en los 4 \nsentidos cardinales y traviesa a los enemigos. \nHudson tiene un rango de 130 px.", "binding": "R"},
    {"img": "../Resources/The_Lich_King.png", "name": "Lich King", "damage": 16, "radio": 300, "gunter": 60, "velocity": 8, "imgbullet": "../Resources/skull.png", "bulletSize": 15, "bulletType": "target", "delay": 2000, "description": "Lich King inflge 16 de dano a una \nvelocidad muy rapida y con un enfriamiento \nrapido a un solo objetivo por disparo. Lich King \ntiene un rango de 300 px.", "binding": "T"}
];

var texthelp = [
    {},
    {"name": "Go/Speed/Normal", "binding": "G", "description": "Inicia oleada a una velocidad normal \no augmenta la velocidad del juego o la vuelve \na la normalidad segun el estado del boton."},
    {"name": "Vender Torre", "binding": "F", "description": "Vendes la torre seleccionada y \nrecuperas la mitat de su precio."},
    {"name": "Reiniciar", "binding": "L", "description": "Se reinicia la partida."},
];
var countoleada = Object.keys(oleada).length;
var mapconfiguration = JSON.parse(data);
var interval;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    reproductor = document.getElementById('player');
    volumen = reproductor.volume;
    buttonsell = document.getElementById('gunter');
    buttonice = document.getElementById('ice');
    buttonlemon = document.getElementById('lemon');
    buttonmagic = document.getElementById('magic');
    buttonhudson = document.getElementById('hudson');
    buttonlich = document.getElementById('lich');
    loadMap();
    run();
    //listener raton
    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(evt);
        mousex = mousePos.x;
        mousey = mousePos.y;
    }, false);
}


function loadMap() {

//creo array de 1 dimesion 
    mapa = new Array(canvasWidth / squareSize);
    // ahora lo transformo en 2 dimesiones    
    for (var i = 0; i < (canvasWidth / squareSize); i++) {
        mapa[i] = new Array(canvasHeight / squareSize);
    }
//creo array camino
    path = new Array();
    var coorWidth = 0;
    var coorHeight = 0;
    //ahora añado cuadrados en la array


    for (var i = 0; i < (canvasHeight / squareSize); i++) {

        for (var j = 0; j < (canvasWidth / squareSize); j++) {
            mapa[j][i] = new Rectangle(coorWidth, coorHeight, squareSize, squareSize, 0);
            coorWidth += squareSize;
        }
        coorWidth = 0;
        coorHeight += squareSize;
    }

    var load = true;
    var i = parseInt(innitpath.substring(0, 2));
    var j = parseInt(innitpath.substring(2, 4));
    var oldi = i;
    var oldj = j;
    mapa[j][i].path = 1;
    var rectangle = mapa[j][i];
    path.push(rectangle);
    var p;
    var rectangle;
    while (load) {
        p = true;
        if (i > 0) {

            if (mapconfiguration[i - 1][j] == 1 && oldi != (i - 1)) {
                oldi = i;
                oldj = j;
                i -= 1;

                mapa[j][i].path = 1;
                rectangle = mapa[j][i];
                path.push(rectangle);

                p = false;
            }
        }

        if (j > 0) {

            if (mapconfiguration[i][j - 1] == 1 && oldj != (j - 1)) {

                oldi = i;
                oldj = j;
                j -= 1;

                mapa[j][i].path = 1;
                rectangle = mapa[j][i];
                path.push(rectangle);

                p = false;
            }
        }
        if ((canvasHeight / squareSize) - 1 > i) {
            if (mapconfiguration[i + 1][j] == 1 && oldi != (i + 1)) {

                oldi = i;
                oldj = j;
                i += 1;
                mapa[j][i].path = 1;
                rectangle = mapa[j][i];
                path.push(rectangle);

                p = false;
            }
        }
        if ((canvasWidth / squareSize) - 1 > j) {

            if (mapconfiguration[i][j + 1] == 1 && oldj != (j + 1)) {

                oldi = i;
                oldj = j;
                j += 1;
                mapa[j][i].path = 1;
                rectangle = mapa[j][i];
                path.push(rectangle);

                p = false;
            }
        }

        if (p) {

            load = false;
        }

    }
    var rectangle = mapa[j][i];
    path.push(new Rectangle(path[path.length - 1].x, path[path.length - 1].y, squareSize, squareSize, 1));
}

function run() {
    paint();
    game();
}

function game() {
    interval = setTimeout(game, timespeed);
    horda.addEnemy();

    for (var i = 0; i < horda.ArrayEnemy.length; i++) {

        horda.ArrayEnemy[i].move();
        if (horda.ArrayEnemy[i].hp <= 0) {

            horda.spliceEnemy(i);
        } else if ((horda.ArrayEnemy[i].x == path[path.length - 2].x) && (horda.ArrayEnemy[i].y == path[path.length - 2].y)) {
            princess -= horda.ArrayEnemy[i].princess;
            horda.ArrayEnemy.splice(i, 1);
            soundlosthp.volume = volumen;
            soundlosthp.play();
        }


    }





    for (var i = 0; i < ArrayBullet.length; i++) {

        ArrayBullet[i].move();
        if (ArrayBullet[i].intersects(ArrayBullet[i].Enemy) && ArrayBullet[i].bulletType == "target") {
            ArrayBullet[i].Enemy.damaged(ArrayBullet[i].damage);
            ArrayBullet.splice(i, 1);
        } else if ((ArrayBullet[i].bulletType == "lineal" || ArrayBullet[i].bulletType == "area") && ArrayBullet[i].countradio >= ArrayBullet[i].radio) {
            ArrayBullet.splice(i, 1);
        } else if (ArrayBullet[i].bulletType == "lineal" || ArrayBullet[i].bulletType == "area") {
            for (var j = 0; j < horda.ArrayEnemy.length; j++) {
                try {
                    if (ArrayBullet[i].intersects(horda.ArrayEnemy[j])) {

                        horda.ArrayEnemy[j].damaged(ArrayBullet[i].damage);
                        if (ArrayBullet[i].bulletType == "lineal") {
                            ArrayBullet.splice(i, 1);
                        }
                    }
                } catch (err) {
                    ArrayBullet.splice(i, 1);
                }
            }
        }

    }

    for (var i = 0; i < ArrayTower.length; i++) {
        ArrayTower[i].selecttarget();
    }

//para calcular donde se puede construir una torre  y que torre se mostra su rango
    // if (mousetower != null) {

    for (var i = 0; i < mapa.length; i++) {
        for (var j = 0; j < mapa[i].length; j++) {
            if (mousex >= mapa[i][j].x && mousex <= mapa[i][j].x + squareSize && mousey >= mapa[i][j].y && mousey <= mapa[i][j].y + squareSize && mapa[i][j].path == 0) {
                cuadradodondeponertorre = new Rectangle();
                cuadradodondeponertorre = mapa[i][j];

            }
        }
    }
    checkGunters();
    setwin();
    lose();


}

function paint() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#918C89';
    ctx.stroke();

    for (var i = 0; i < canvasHeight / squareSize; i++) {
        for (var j = 0; j < canvasWidth / squareSize; j++) {
            if (mapa[j][i].path == 1) {
                //ctx.fillRect(mapa[j][i].x, mapa[j][i].y, mapa[j][i].width, mapa[j][i].height);
                ctx.drawImage(pathimg, mapa[j][i].x, mapa[j][i].y, mapa[j][i].width, mapa[j][i].height);
            }
            //ctx.strokeRect(mapa[j][i].x, mapa[j][i].y, mapa[j][i].width, mapa[j][i].height);
        }
    }

//pintar enemigos
    for (var i = 0; i < horda.ArrayEnemy.length; i++) {
        ctx.drawImage(horda.ArrayEnemy[i].img, horda.ArrayEnemy[i].x, horda.ArrayEnemy[i].y, horda.ArrayEnemy[i].width, horda.ArrayEnemy[i].height);
        ctx.strokeRect(horda.ArrayEnemy[i].lifebar.x, horda.ArrayEnemy[i].lifebar.y, horda.ArrayEnemy[i].lifebar.width, horda.ArrayEnemy[i].lifebar.height);
        ctx.drawImage(horda.ArrayEnemy[i].lifebar.img, horda.ArrayEnemy[i].lifebar.x, horda.ArrayEnemy[i].lifebar.y, horda.ArrayEnemy[i].lifebar.imgwidth, horda.ArrayEnemy[i].lifebar.height);
    }
//pintar tower
    for (var i = 0; i < ArrayTower.length; i++) {
        ctx.drawImage(ArrayTower[i].img, ArrayTower[i].x, ArrayTower[i].y, ArrayTower[i].width, ArrayTower[i].height);
        if (ArrayTower[i].visibleRange) {

            ctx.arc(ArrayTower[i].x + (ArrayTower[i].width / 2), ArrayTower[i].y + (ArrayTower[i].height / 2), ArrayTower[i].radio, 0, 2 * Math.PI);
            ctx.closePath();
        }
    }

    for (var i = 0; i < ArrayBullet.length; i++) {
        ctx.drawImage(ArrayBullet[i].img, ArrayBullet[i].x, ArrayBullet[i].y, ArrayBullet[i].width, ArrayBullet[i].height);
    }
    if (mousetower != null) {

        TowerRangeVisible = null;
        ctx.drawImage(mousetower, cuadradodondeponertorre.x, cuadradodondeponertorre.y, 50, 50);
        if (!cuadradodondeponertorre.tower) {
            ctx.drawImage(imgCircle, cuadradodondeponertorre.x - mousetowerrange * 2 / 2 + 50 / 2, cuadradodondeponertorre.y - mousetowerrange * 2 / 2 + 50 / 2, mousetowerrange * 2, mousetowerrange * 2);
        } else {
            ctx.drawImage(imgCircleRed, cuadradodondeponertorre.x - mousetowerrange * 2 / 2 + 50 / 2, cuadradodondeponertorre.y - mousetowerrange * 2 / 2 + 50 / 2, mousetowerrange * 2, mousetowerrange * 2);
        }
    }
    if (TowerRangeVisible != null) {

        ctx.drawImage(imgCircle, TowerRangeVisible.x - TowerRangeVisible.radio * 2 / 2 + TowerRangeVisible.width / 2, TowerRangeVisible.y - TowerRangeVisible.radio * 2 / 2 + TowerRangeVisible.height / 2, TowerRangeVisible.radio * 2, TowerRangeVisible.radio * 2);

    }

    if (textarea != null) {
        ctx.lineWidth = 3;
        ctx.strokeRect(textarea.x, textarea.y, textarea.width, textarea.height);
        ctx.drawImage(textarea.img, textarea.x, textarea.y, textarea.width, textarea.height);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = "bold 20px calibri";
        var ytext = textarea.y + 25;
        var xtext = textarea.x + 10;
        ctx.fillText(textarea.texttitle, xtext, ytext);
        ctx.fillText(textarea.textbinding, xtext + (textarea.width - textarea.width * 0.14), ytext);
        ctx.font = "bold 14px calibri";
        ytext += 22;
        ctx.fillText(textarea.textgunters, xtext, ytext);
        ytext += 12;
        ctx.fillStyle = '#9f9ac3';
        for (var i = 0; i < textarea.description.length; i++) {
            ytext += 14;
            if (i != 0) {
                ctx.fillText(textarea.description[i], xtext, ytext);
            } else {
                ctx.fillStyle = '#dfaa38';
                ctx.fillText(textarea.titledes, xtext, ytext);
                ctx.fillStyle = '#9f9ac3';
                ctx.fillText(textarea.description[i], xtext + 76, ytext);
            }


        }
    }
    ctx.fillStyle = '#000000';
    ctx.font = "20px calibri";
    ctx.fillText("Princesas: " + princess, 520, 25);
    ctx.fillText("Gunters: " + gunters, 650, 25);
    if (princess <= 0) {

        ctx.drawImage(iderrota, 175, 210, 450, 180);
    } else if (win) {
        ctx.drawImage(ivictoria, 175, 210, 450, 180);
    }

    requestAnimationFrame(paint);
}


function setTimeSpeed(value) {
    this.timespeed = value;
}

function sellTower() {
    var tx = null;
    var ty = null;
    for (var i = 0; i < ArrayTower.length; i++) {
        if (TowerRangeVisible == ArrayTower[i]) {
            tx = ArrayTower[i].x;
            ty = ArrayTower[i].y;
            gunters += tipotower[ArrayTower[i].index].gunter / 2;
            ArrayTower.splice(i, 1);
            TowerRangeVisible = null;
        }
    }
    if (tx != null && ty != null) {
        for (var i = 0; i < mapa.length; i++) {
            for (var j = 0; j < mapa[i].length; j++) {
                if (mapa[i][j].x == tx && mapa[i][j].y == ty) {
                    mapa[i][j].tower = false;
                }
            }
        }
    }

}

function basictower(value) {
    if (gunters >= tipotower[value].gunter) {
        if (mousetower == null || value != valuetower) {
            mousetower = new Image();
            mousetower.src = tipotower[value].img;
            mousetowerrange = tipotower[value].radio;
            valuetower = value;

        } else {
            mousetower = null;
        }
    }



}




//posicion mouse
function getMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function showTextArea(index) {
    if (textarea == null) {
        textarea = new TextArea(canvasWidth * 0.30, canvasHeight * 0.65, canvasWidth * 0.40, canvasHeight * 0.25, index);
    } else {
        textarea = null;
    }
}

function hiddenTextArea() {
    textarea = null;
}

//funcion para colocar la torre una vez clickado en algun botton
function clickReporter() {
    if (mousetower != null && cuadradodondeponertorre.x <= mousex && cuadradodondeponertorre.x + cuadradodondeponertorre.width >= mousex && cuadradodondeponertorre.y <= mousey && cuadradodondeponertorre.y + cuadradodondeponertorre.height >= mousey) {
        if (!cuadradodondeponertorre.tower) {

            if (gunters >= tipotower[valuetower].gunter) {
                ArrayTower.push(new Tower(cuadradodondeponertorre.x, cuadradodondeponertorre.y, squareSize, squareSize, tipotower[valuetower].damage, tipotower[valuetower].radio, tipotower[valuetower].img, valuetower));
                gunters -= tipotower[valuetower].gunter;
                cuadradodondeponertorre.tower = true;
                mousetower = null;
            }
        } else {
            nobuild.volume = volumen;
            nobuild.play();
        }

    } else if (cuadradodondeponertorre.tower) {
        for (var i = 0; i < ArrayTower.length; i++) {
            if (ArrayTower[i].x == cuadradodondeponertorre.x && ArrayTower[i].y == cuadradodondeponertorre.y) {
                TowerRangeVisible = ArrayTower[i];
            }
        }
    } else {
        TowerRangeVisible = null;
    }
}


function setwin() {
    if (this.horda.index == oleada.length - 1 && horda.ArrayEnemy.length == 0) {
        this.win = true;
        reproductor.src = "../Resources/victory.wav";
        reproductor.load();
        this.clearInterval(interval);
    }
}
function lose() {
    if (this.princess <= 0) {
        reproductor.src = "../Resources/defeat.wav";
        reproductor.load();
        this.clearInterval(interval);
    }
}

function reset() {
    this.intervalClear();
    setTimeSpeed(20);
    interval = setTimeout(game, timespeed);
    win = false;
    ArrayBullet = new Array();
    ArrayTower = new Array();
    for (var i = 0; i < canvasHeight / squareSize; i++) {
        for (var j = 0; j < canvasWidth / squareSize; j++) {
            mapa[j][i].tower = false;
        }
    }
    horda.reset();
    gunters = 20;
    princess = 50;
    var start = document.getElementById("start");
    start.setAttribute("style", "background-image: url(../Resources/iconogo.jpg);");
    reproductor.src = "../Resources/opening.wav";
    reproductor.load();
}

function setVolumen(value) {
    if (volumen + value > 0 && volumen + value < 1) {
        reproductor = document.getElementById('player');
        reproductor.volume += value;
        volumen = reproductor.volume;
    }
}

function playReproductor() {
    reproductor = document.getElementById('player');
    reproductor.volume = 1;
    volumen = reproductor.volume;
}

function muteReproductor() {
    reproductor = document.getElementById('player');
    reproductor.volume = 0;
    volumen = reproductor.volume;
}


function intervalClear() {
    this.clearInterval(interval);
}

function checkGunters() {
    if (gunters >= tipotower[0].gunter) {
        buttonice.setAttribute("style", "background-image: url(../Resources/iconice.jpg);");
    } else {
        buttonice.setAttribute("style", "background-image: url(../Resources/iconicegrey.jpg);");
    }

    if (gunters >= tipotower[1].gunter) {
        buttonlemon.setAttribute("style", "background-image: url(../Resources/iconlemon.jpg);");
    } else {
        buttonlemon.setAttribute("style", "background-image: url(../Resources/iconlemongrey.jpg);");
    }

    if (gunters >= tipotower[2].gunter) {
        buttonmagic.setAttribute("style", "background-image: url(../Resources/iconmagic.jpg);");
    } else {
        buttonmagic.setAttribute("style", "background-image: url(../Resources/iconmagicgrey.jpg);");
    }

    if (gunters >= tipotower[3].gunter) {
        buttonhudson.setAttribute("style", "background-image: url(../Resources/iconhudson.jpg);");
    } else {
        buttonhudson.setAttribute("style", "background-image: url(../Resources/iconhudsongrey.jpg);");
    }

    if (gunters >= tipotower[4].gunter) {
        buttonlich.setAttribute("style", "background-image: url(../Resources/iconlich.jpg);");
    } else {
        buttonlich.setAttribute("style", "background-image: url(../Resources/iconlichgrey.jpg);");
    }
    if (TowerRangeVisible == null) {
        buttonsell.setAttribute("style", "background-image: url(../Resources/iconguntergrey.jpg);");
    } else {
        buttonsell.setAttribute("style", "background-image: url(../Resources/icongunter.jpg);");
    }
}

document.addEventListener('keydown', function(evt) {
    PRESSING[evt.keyCode] = true;
    if (PRESSING[81]) {
        basictower(0);
    } else if (PRESSING[87]) {
        basictower(1);
    } else if (PRESSING[69]) {
        basictower(2);
    } else if (PRESSING[82]) {
        basictower(3);
    } else if (PRESSING[84]) {
        basictower(4);
    } else if (PRESSING[71]) {
        horda.nextHorde();
    } else if (PRESSING[70]) {
        sellTower();
    } else if (PRESSING[76]) {
        reset();
    }
}, false);

document.addEventListener('keyup', function(evt) {
    PRESSING[evt.keyCode] = false;
    if (PRESSING[81]) {
        basictower(0);
    } else if (PRESSING[87]) {
        basictower(1);
    } else if (PRESSING[69]) {
        basictower(2);
    } else if (PRESSING[82]) {
        basictower(3);
    } else if (PRESSING[84]) {
        basictower(4);
    }
}, false);