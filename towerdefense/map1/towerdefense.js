/**
 * Clase que construye un retangulo
 * @class Rectangle
 * @constructors
 * @this {Rectangle}
 * @param {Number} x Posicion X en el que se encuentra
 * @param {Number} y Posicion Y en el que se encuentra
 * @param {Number} width Anchura del rectangulo
 * @param {Number} height Altura del rectangulo
 * @param {Number} path especifica si es un camino o no, 1 camino 0 no camino
 * @param {Boolean} tower especifica si en ese cuadrado hay una torre o no
 * 
 * @returns {Rectangle}
 */
function Rectangle(x, y, width, height, path, tower) {
    /**
     * Posicion X en el que se encuentra. Por defecto 0.
     * @type Number
     */
    this.x = (x == null) ? 0 : x;
    /**
     * Posicion Y en el que se encuentra. Por defecto 0.
     * @type Number
     */
    this.y = (y == null) ? 0 : y;
    /**
     * Anchura del rectangulo. Por defecto 0.
     * @type Number
     */
    this.width = (width == null) ? 0 : width;
    /**
     * Altura del rectangulo Por defecto el tamano de la anchura.
     * @type Number
     */
    this.height = (height == null) ? this.width : height;
    /**
     * Atributo que especifica si es un camino o no, 1 camino 0 no camino. Por defecto 0.
     * @type Number
     */
    this.path = (path == null) ? 0 : path;
    /**
     * Atributo que especifica si en ese cuadrado hay una torre o no. Por defecto 0.
     * @type Boolean
     */
    this.tower = (tower == null) ? this.tower : false;
}


/**
 * Clase que construye un TextArea
 * @class TextArea
 * @constructors
 * @this {TextArea}
 * @param {Number} x Posicion X en el que se encuentra
 * @param {Number} y Posicion Y en el que se encuentra
 * @param {Number} width Anchura del TextArea
 * @param {Number} height Altura del TextArea
 * @param {Number} index numero que especifica que linea de que json tiene que sacar la informacion
 * si es mayor o igual que 0 lo cojera del json tipotower si es menor que 0 lo sacara de texthelp.
 * @returns {TextArea}
 */
function TextArea(x, y, width, height, index) {
    if (index >= 0) {
        /**
         * Posicion X en el que se encuentra. Por defecto 0.
         * @type Number
         */
        this.x = (x == null) ? 0 : x;
        /**
         * Posicion Y en el que se encuentra. Por defecto 0.
         * @type Number
         */
        this.y = (y == null) ? 0 : y;
        /**
         * Anchura del TextArea. Por defecto 0.
         * @type Number
         */
        this.width = (width == null) ? 0 : width;
        /**
         * Altura del TextArea Por defecto el tamano de la anchura.
         * @type Number
         */
        this.height = (height == null) ? this.width : height;
        /**
         * Imagen de la Textarea lo coje de una variable global imgTextArea
         * @type imgTextArea
         */
        this.img = imgTextArea;
        /**
         * Titulo de la TextArea, lo coje del json tipotower o texthelp con el indice que tiene.
         * @type String
         */
        this.texttitle = tipotower[index].name;
        /**
         * Texto de la TextArea que muestra los gunters, lo coje del json tipotower o texthelp con el indice que tiene.
         * @type String
         */
        this.textgunters = tipotower[index].gunter + " gunters";
        /**
         * Texto de la TextArea que muestra el binding, lo coje del json tipotower o texthelp con el indice que tiene.
         * @type String|String
         */
        this.textbinding = "[" + tipotower[index].binding + "]";
        /**
         * Titulo de la descripcion de la Textarea, lo coje del json tipotower o texthelp con el indice que tiene.
         * @type String
         */
        this.titledes = "Descripcion:";
        /**
         * Texto de descripcion de la TextArea, lo coje del json tipotower o texthelp con el indice que tiene y divide por filas
         * por el signo \n
         * @type String[]
         */
        this.description = tipotower[index].description.split("\n");
    } else if (index < 0) {
        //si le entra un negativo area una text area con menos atributos y invertira el signo para poder cojerlo del json.  
        index = -index;
        /* * Posicion X en el que se encuentra. Por defecto 0.
         * @type Number
         */
        this.x = (x == null) ? 0 : x;
        /* * Posicion Y en el que se encuentra. Por defecto 0.
         * @type Number
         */
        this.y = (y == null) ? 0 : y;
        /**
         * Anchura del TextArea. Por defecto 0.
         * @type Number
         */
        this.width = (width == null) ? 0 : width;
        /**
         * Altura del TextArea Por defecto el tamano de la anchura.
         * @type Number
         */
        this.height = (height == null) ? this.width : height;
        /**
         * Imagen de la Textarea lo coje de una variable global imgTextArea
         * @type imgTextArea
         */
        this.img = imgTextArea;
        /**
         * Titulo de la TextArea, lo coje del json tipotower o texthelp con el indice que tiene.
         * @type String
         */
        this.texttitle = texthelp[index].name;
        this.textgunters = "";
        /**
         * Texto de la TextArea que muestra el binding, lo coje del json tipotower o texthelp con el indice que tiene.
         * @type String|String
         */
        this.textbinding = "[" + texthelp[index].binding + "]";
        /**
         * Titulo de la descripcion de la Textarea, lo coje del json tipotower o texthelp con el indice que tiene.
         * @type String
         */
        this.titledes = "Descripcion:";
        /**
         * Texto de descripcion de la TextArea, lo coje del json tipotower o texthelp con el indice que tiene y divide por filas
         * por el signo \n
         * @type String[]
         */
        this.description = texthelp[index].description.split("\n");
    }




}


/**
 * Clase que construye un LifeBar
 * @class LifeBar
 * @constructors
 * @this {LifeBar}
 * @param {Number} x Posicion X en el que se encuentra
 * @param {Number} y Posicion Y en el que se encuentra
 * @param {Number} width Anchura del LifeBar
 * @param {Number} height Altura del LifeBar
 * @param {Number} initLife valor de la vida inicial 
 * @returns {LifeBar}
 */
function LifeBar(x, y, width, height, initLife) {
    /* * Posicion X en el que se encuentra. Por defecto 0.
     * @type Number
     */
    this.x = (x == null) ? 0 : x;
    /* * Posicion Y en el que se encuentra. Por defecto 0.
     * @type Number
     */
    this.y = (y == null) ? 0 : y;

    /*  * Anchura del TextArea. Por defecto 0.
     * @type Number
     */
    this.width = (width == null) ? 0 : width;

    /**
     * Altura del TextArea Por defecto el tamano de la anchura.
     * @type Number
     */
    this.height = (height == null) ? this.width : height;
    /**
     * Imagen de la barra de vida que lo saca de una variable global llamada imgLife
     * @type imgLife
     */
    this.img = imgLife;
    /**
     * Anchura de la imagen, es la vida actual que mostrara respecto la barra entera de vida
     * @type Number
     */
    this.imgwidth = width;
    /**
     * Vida inicial
     * @type Number
     */
    this.initLife = initLife;

    /**
     * Metodo para actualizar la barra vida
     * @param {Number} life vida actual
     * @returns {void}
     */
    this.updateLife = function(life) {
        if (life >= 0) {
            this.imgwidth = life / this.initLife * this.width;
        } else {
            this.imgwidth = 0;
        }
    }

    /**
     * Metodo que updatea la posicion de la barra de vida
     * @param {Number} x nueva posicion x
     * @param {Number} y nueva posicion y 
     * @returns {void}
     */
    this.updatePosition = function(x, y) {
        this.x = (x == null) ? 0 : x;
        this.y = (y == null) ? 0 : y;
    }

}

/**
 * Clase Bullet que construye un Bullet
 * @class Bullet
 * @constructors
 * @this {Bullet}
 * @param {Number} x Posicion X en el que se encuentra
 * @param {Number} y Posicion Y en el que se encuentra
 * @param {Enemy} Enemy enemigo que tiene seleccionado
 * @param {Number} damage dano que inflije la bala
 * @param {Number} index indice para sacar la informacion del json
 * @param {String} direccion  direccion que va a disprar
 * @returns {Bullet}
 */
function Bullet(x, y, Enemy, damage, index, direccion) {
    /* * Posicion X en el que se encuentra. Por defecto 0.
     * @type Number
     */
    this.x = (x == null) ? 0 : x;
    /* * Posicion Y en el que se encuentra. Por defecto 0.
     * @type Number
     */
    this.y = (y == null) ? 0 : y;
    /* * Posicion X inicial coje el valor de X al construir el objeto.
     * @type Number
     */
    this.xi = this.x;
    /* * Posicion Y inicial coje el valor de Y al construir el objeto.
     * @type Number
     */
    this.yi = this.y;
    /**
     * Direccion donde va disparar "bot" || "top" || "left" || "right" solo se usara si bulletType es  "lineal" o "area".
     * @type String
     */
    this.direccion = direccion;
    /**
     * Tipo de la bala coje el valor del json tipotower.
     * @type String
     */
    this.bulletType = tipotower[index].bulletType;
    /**
     * Anchura de la bala coje el valor del json tipotower.
     * @type Number
     */
    this.width = tipotower[index].bulletSize;
    /**
     * Altura de la bala coje el valor del json tipotower.
     * @type Number
     * 
     */
    this.height = tipotower[index].bulletSize;
    /**
     * Dano de la bala por defecto 0.
     * @type Number
     */
    this.damage = (damage == null) ? 0 : damage;
    /**
     * Imagen de la bala coje la src del json tipotower.
     * @type Image
     */
    this.img = new Image();
    this.img.src = tipotower[index].imgbullet;
    /**
     * Enemigo que tiene seleccionado solo lo utilizara si el  bulletType es "target"
     * @type Enemy
     */
    this.Enemy = Enemy;
    /**
     * Velocidad de la bala coje el valor del json tipotower.
     * @type Number
     */
    this.velocity = tipotower[index].velocity;
    this.radio = tipotower[index].radio;
    this.countradio = 0;

    /**
     * Metodo que comprueba si se ha chocado con otro cuerpo
     * @param {type} rect
     * @returns {boolean}
     */
    this.intersects = function(rect) {
        if (rect != null) {
            return(this.x <= rect.x + rect.width &&
                    this.x + this.width > rect.x &&
                    this.y <= rect.y + rect.height &&
                    this.y + this.height > rect.y);
        }
    }

    /**
     * Metodo para mover la bala. Actualiza su posicion.
     * Si bulletType es target seguira al Enemy que tiene.
     * Si bulletType es lineal o area la bala mirara que direccion tiene y se movera en esa direccion.
     * @returns {void}
     */
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

/**
 * Clase Tower que construye un Tower
 * @class Tower
 * @constructors
 * @this {Tower}
 * @param {Number} x posicion x
 * @param {Number} y posicion y
 * @param {Number} width anchura del Tower
 * @param {Number} height altura del Tower
 * @param {Number} damage dano de del Tower
 * @param {Number} radio radio de ataque del Tower
 * @param {String} img src de la imagen del Tower
 * @param {Number} index indice del json tipotower donde sacara informacion
 * @returns {Tower}
 */
function Tower(x, y, width, height, damage, radio, img, index) {
    /* * Posicion X en el que se encuentra. Por defecto 0.
     * @type Number
     */
    this.x = (x == null) ? 0 : x;
    /* * Posicion Y en el que se encuentra. Por defecto 0.
     * @type Number
     */
    this.y = (y == null) ? 0 : y;
    /* * indice del json tipotower donde sacara informacion
     * @type Number
     */
    this.index = index;
    /*  * Anchura del Tower. Por defecto 0.
     * @type Number
     */
    this.width = (width == null) ? 0 : width;
    /*  * Altura del Tower. Por defecto coje el valor del width.
     * @type Number
     */
    this.height = (height == null) ? this.width : height;
    /**
     * Dano de la torre por dejecto 0
     * @type Number
     */
    this.damage = (damage == null) ? 0 : damage;
    /**
     * Radio de la torre por defecto es 0
     * @type Number
     */
    this.radio = (radio == null) ? 0 : radio;
    /**
     * Imagen de la torre coje el src del parametro img
     * @type Image
     */
    this.img = new Image();
    this.img.src = img;
    /**
     * Enemigo mas cercano que esta dnetro del rango de la torre
     * @type Tower.Enemy
     */
    this.Enemy = null;
    /**
     * El tipo de balas que dispara saca la informacion del json tipotower
     * @type String
     */
    this.bulletType = tipotower[index].bulletType;
    /**
     * El delay que tiene la torre entre disparo y disparo saca el valor del json tipotower
     * @type Number
     */
    this.delay = tipotower[index].delay;
    /**
     * Contador para saber si es el momento de disparar o no.
     * @type Number
     */
    this.count = this.delay;



    /**
     * Metodo para disparar la bala es decir crea un nuevo objeto de tipo Bullet
     * @returns {void}
     */
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


    /**
     * Metodo que selecciona el target mas cercano dentro del radio para comenzar a disparar
     * @returns {void}
     */
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


/**
 * Class Enemy que construye un Enemy
 * @class Enemy
 * @constructors
 * @this {Enemy}
 * @param {Number} x posicion x
 * @param {Number} y posicion y
 * @param {Number} width anchura del Enemy
 * @param {Number} height altura del Enemy
 * @param {Number} positionpath posicion que se encuentra dentro de la array de path
 * @param {Image} img imagen del Enemy
 * @param {Number} hp vida del Enemy
 * @param {Number} gunter gunters que da el Enemy
 * @param {Number} princess princesas que quita el Enemy
 * @returns {Enemy}
 */
function Enemy(x, y, width, height, positionpath, img, hp, gunter, princess) {
    /**
     * Posicion X en el que se encuentra. Por defecto 0.
     * @type Number
     */
    this.x = (x == null) ? 0 : x;
    /**
     * Posicion Y en el que se encuentra. Por defecto 0.
     * @type Number
     */
    this.y = (y == null) ? 0 : y;
    /** 
     * Anchura del Enemy. Por defecto 0.
     * @type Number
     */
    this.width = (width == null) ? 0 : width;
    /**
     * Altura del Enemy. Por defecto el valor de width.
     * @type Number
     */
    this.height = (height == null) ? this.width : height;
    /**
     * Posicion actual que se encuentra en la array del Path
     * @type Number
     */
    this.positionpath = (positionpath == null) ? 0 : positionpath;
    /**
     * Porcentaje del tamano del path que se encuentra
     * @type Number
     */
    this.porcentaje = 0;
    /**
     * Imagen del Enemy
     * @type Image
     */
    this.img = img;
    /**
     * Vida del Enemy
     * @type Number
     */
    this.hp = hp;
    /**
     * Gunters que da el Enemy
     * @type Number
     */
    this.gunter = gunter;
    /**
     * Princesas que quita el enemigo al llegar al final del camino.
     * @type Number
     */
    this.princess = princess;
    /**
     * Barra de vida del Enemigo
     * @type LifeBar
     */
    this.lifebar = new LifeBar(x, y - 15, width, 5, hp);

    /**
     * Metodo para mover el Enemy
     * @returns {void}
     */
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

    /**
     * Metodo para infligir dano al Enemigo. 
     * Reduciendo su vida
     * @param {Number} damage
     * @returns {void}
     */
    this.damaged = function(damage) {
        this.hp -= damage;
        this.lifebar.updateLife(this.hp);
    }



}

/**
 * Class Horde que construye un Horde que controla a los enemigos.
 * @class Horde
 * @constructors
 * @this {Horde}
 * @returns {Horde}
 */
function Horde() {
    /***
     * Contador que indica si añade un nuevo Enemy a la Array
     * @type Number
     */
    this.count = 0;
    /** 
     * Array de Enemy
     * @type Array
     */
    this.ArrayEnemy = Array();
    /**
     * Indice de la oleada que se encuentra para 
     * cojer la informacion de los enemigos en el json oleada.
     * @type Number
     */
    this.index = -1;
    /**
     * Cantidad de enemigos
     * @type Number
     */
    this.Ammount = 0;
    /**
     * Metodo para añadir nuevos Enemy a la ArrayEnemy
     * @returns {void}
     */
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

    /**
     * Metodo para ir a la siguiente oleada de Enemy
     * @returns {void}
     */
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

    /**
     *  Metodo para eliminar Enemy de la ArrayEnemi a partir del index
     * @param {type} index posicion que se encuentra dentro de la Array el Enemy
     * @returns {void}
     */
    this.spliceEnemy = function(index) {

        gunters += this.ArrayEnemy[index].gunter;
        this.ArrayEnemy.splice(index, 1);
        soundead.volume = volumen;
        soundead.play();
    }

    /**
     * Metodo que resetea las oleadas al inicio
     * @returns {void}
     */
    this.reset = function() {
        this.ArrayEnemy = new Array();
        this.index = -1;
        this.Ammount = 0;
    }




}
/**
 * Evento de escucha para iniciar el js cuando se cargue el juego
 * @param {String} param1 el momento de activar el evento por ejemplo 'load' cuando cargue
 * @param {Method Name} param2 el nombre del metodo que llamara
 * @param {boolean} param3 
 */
window.addEventListener('load', init, false);
/**
 * Timer de peticion para pintar
 * @type me@exp;window@pro;mozRequestAnimationFrame@exp;window@pro;requestAnimationFrame
 */
var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
/**
 * Princesas
 * @type Number
 */
var princess = 50;
/**
 * Gunters
 * @type Number
 */
var gunters = 20;
/**
 * Velocidad del interval del juego
 * @type Number
 */
var timespeed = 20;
/** 
 * Objeto Horde del juego que controla todos los enemigos y sus oleada
 * @type Horde
 */
var horda = new Horde();
/** 
 * Elemento Canvas
 * @type @exp;document@call;getElementById
 */
var canvas = null;
/**
 * Contexto del canvas
 * @type @exp;canvas@call;getContext
 */
var ctx = null;
/**
 * Array de rectangulos que es el Mapa
 * @type Array
 */
var mapa;
/**
 * Array de rectangulos que es el Camino
 * @type Array
 */
var path;
/**
 * Imagen del camino
 * @type Image
 */
var pathimg = new Image();
this.pathimg.src = "../Resources/path1.jpg";
/**
 * Imagen del circlo para mostrar cuando se clique en una torre
 * @type Image
 */
var imgCircle = new Image();
this.imgCircle.src = "../Resources/circulo.png";
/**
 * Imagen del circlo para mostrar cuando se clique en una torre y no se pueda colocar en esa zona
 * @type Image
 */
var imgCircleRed = new Image();
this.imgCircleRed.src = "../Resources/circulored.png";
/**
 * Imagen que se utiliza en las barras de vida
 * @type Image
 */
var imgLife = new Image();
this.imgLife.src = "../Resources/life.jpg";
/**
 * Valor de la torre cuando colocas una torre
 * @type Number
 */
var valuetower;
/**
 * Altura del Canvas
 * @type Number
 */
var canvasHeight = 600;
/**
 * Anchura de Canvas
 * @type Number
 */
var canvasWidth = 800;
/**
 * Tamano de los rectangulos
 * @type Number
 */
var squareSize = 50;
/**
 * Imagen de la torre que vas a colocar
 * @type Image
 */
var mousetower = null;
/**
 * Posicion X que se encuentra el mouse
 * @type @exp;mousePos@pro;x
 */
var mousex;
/**
 * Posicion Y que se encuentra el mouse
 * @type @exp;mousePos@pro;y
 */
var mousey;
/**
 * Rango de la torre que quieres colocar
 * @type Number
 */
var mousetowerrange;
/**
 * Rectangulo donde se colocara la torre
 * @type Rectangle
 */
var cuadradodondeponertorre;
/**
 * Array que almacenara las Torres del juego
 * @type Array
 */
var ArrayTower = Array();
/**
 * Array que almacenara las Balas del juego
 * @type Array
 */
var ArrayBullet = Array();
/**
 * Rango de la torre que quieres colocar para mostrarla cuando la vayas a colocar
 * @type Number
 */
var TowerRangeVisible = null;
/**
 * Audio que se utiliza para cuando muere un enemigo
 * @type Audio
 */
var soundead = new Audio("../Resources/chomp.wav"); // buffers automatically when created
/**
 * Audio que se utiliza cuando pierdes princesas
 * @type Audio
 */
var soundlosthp = new Audio("../Resources/dies.wav"); // buffers automatically when created
/**
 * Audio de no se puede construir una torre en una posicion concreta
 * @type Audio
 */
var nobuild = new Audio("../Resources/nobuild.wav");
/**
 * Posicion inicial del camino
 * @type String
 */
var innitpath = "0001";
/**
 * TextArea para mostrar informar al usuario
 * @type TextArea
 */
var textarea = null;
/**
 * Imagen de la Textarea
 * @type Image
 */
var imgTextArea = new Image();
this.imgTextArea.src = "../Resources/textarea.png";
/**
 * Array de booleans que registrar si una tecla a sido clickada
 * @type Array
 */
var PRESSING = new Array();
/**
 * Imagen que se muestra cuando se gana el juego
 * @type Image
 */
var ivictoria = new Image();
this.ivictoria.src = "../Resources/victoria.png";
/**
 * Imagen que se muestra cuando se pierde el juego
 * @type Image
 */
var iderrota = new Image();
this.iderrota.src = "../Resources/derrota.png";
/**
 * Var que indica si se ha ganado o no
 * @type Boolean
 */
var win = false;
/**
 * Var que coje el audio del html y lo instancia
 * @type @exp;document@call;getElementById|@exp;document@call;getElementById|@exp;document@call;getElementById|@exp;document@call;getElementById
 */
var reproductor;
/**
 * Valor del volumen
 * @type Number
 */
var volumen;
/**
 * JSON que se utiliza para definir el mapa
 * @type JSON
 */
/**
 * Boton de la torre ice king
 * @type @exp;document@call;getElementById
 */
var buttonice;
/**
 * Boton de la torre lemongrab
 * @type @exp;document@call;getElementById
 */
var buttonlemon;
/**
 * Boton de la torre magicman
 * @type @exp;document@call;getElementById
 */
var buttonmagic;
/**
 * Boton de la torre hudson
 * @type @exp;document@call;getElementById
 */
var buttonhudson;
/**
 * Boton de la torre lich king
 * @type @exp;document@call;getElementById
 */
var buttonlich;
/**
 * Boton de vender torre
 * @type @exp;document@call;getElementById
 */
var buttonsell;
var data =
        '[[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],' +
        '[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],' +
        '[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],' +
        '[0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0],' +
        '[0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0],' +
        '[0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0],' +
        '[0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0],' +
        '[0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0],' +
        '[0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0],' +
        '[0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0],' +
        '[0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0],' +
        '[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0]]';
/**
 * JSON que se utiliza para definir los enemigos
 * @type JSON
 */
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
/**
 * JSON que se utiliza para definir los tipos de torre y el TextArea de informacion de la torre
 * @type JSON
 */
var tipotower = [
    {"img": "../Resources/Original_Ice_King.png", "name": "Ice King", "damage": 4, "radio": 200, "gunter": 10, "velocity": 3, "imgbullet": "../Resources/ice.png", "bulletSize": 15, "bulletType": "target", "delay": 3000, "description": "Ice King inflge 4 de dano a una \nvelocidad lenta y con un enfriamiento medio \na un solo objetivo por disparo. Ice King tiene un \nrango de 200 px.", "binding": "Q"},
    {"img": "../Resources/lemongrab.png", "name": "Lemongrab", "damage": 2, "radio": 300, "gunter": 20, "velocity": 6, "imgbullet": "../Resources/lemon.png", "bulletSize": 15, "bulletType": "target", "delay": 1000, "description": "Lemongrab inflge 2 de dano a una \nvelocidad rapida y con un enfriamiento rapido \na un solo objetivo por disparo. Lemongrab tiene \nun rango de 300 px.", "binding": "W"},
    {"img": "../Resources/Magic_Man.png", "name": "Magic Man", "damage": 8, "radio": 400, "gunter": 30, "velocity": 4, "imgbullet": "../Resources/arcoiris.png", "bulletSize": 35, "bulletType": "lineal", "delay": 5000, "description": "Magic Man inflge 8 de dano a una \nvelocidad normal y con un enfriamiento lento, \ndispara 4 balas simultaniamente en los 4 sentidos \ncardinales. Magic Man tiene un rango de 400 px.", "binding": "E"},
    {"img": "../Resources/hunson.png", "name": "Hunson", "damage": 0.08, "radio": 130, "gunter": 50, "velocity": 6, "imgbullet": "../Resources/bat.png", "bulletSize": 35, "bulletType": "area", "delay": 500, "description": "Hudson inflge 0.08 de dano a una \nvelocidad rapida y con un enfriamiento muy \nrapido, dispara 4 balas simultaniamente en los 4 \nsentidos cardinales y traviesa a los enemigos. \nHudson tiene un rango de 130 px.", "binding": "R"},
    {"img": "../Resources/The_Lich_King.png", "name": "Lich King", "damage": 16, "radio": 300, "gunter": 60, "velocity": 8, "imgbullet": "../Resources/skull.png", "bulletSize": 15, "bulletType": "target", "delay": 2000, "description": "Lich King inflge 16 de dano a una \nvelocidad muy rapida y con un enfriamiento \nrapido a un solo objetivo por disparo. Lich King \ntiene un rango de 300 px.", "binding": "T"}
];

/**
 * JSON que muestra informacion de los botones
 * @type JSON
 */
var texthelp = [
    {},
    {"name": "Go/Speed/Normal", "binding": "G", "description": "Inicia oleada a una velocidad normal \no augmenta la velocidad del juego o la vuelve \na la normalidad segun el estado del boton."},
    {"name": "Vender Torre", "binding": "F", "description": "Vendes la torre seleccionada y \nrecuperas la mitat de su precio."},
    {"name": "Reiniciar", "binding": "L", "description": "Se reinicia la partida."},
];
/**
 * Cantidad de tipo de enemigos del JSON oleada
 * @type Number
 */
var countoleada = Object.keys(oleada).length;
/**
 * Array que coje del JSON data
 * @type Array
 */
var mapconfiguration = JSON.parse(data);
/**
 * Interval del juego
 * @type Interval
 */
var interval;

/**
 * Metodo para iniciar el juego
 * @returns {void}
 */
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

/**
 * Metodo que carga el mapa del juego
 * @returns {void}
 */
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
/**
 * Metodo run del juego
 * @returns {void}
 */
function run() {
    paint();

    game();
}

/**
 * Metodo recalcula la fisica del juego y los valores del juego
 * @returns {void}
 */
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

/**
 * Metodo para pintar todas las imagenes del juego
 * @returns {void}
 */
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

/**
 * Metodo para configurar la velocidad del interval del juego
 * @param {Number} value valor de la velocidad del juego
 * @returns {void}
 */
function setTimeSpeed(value) {
    this.timespeed = value;
}

/**
 * Metodo para vender la torre
 * @returns {void}
 */
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

/**
 * Metodo que guarda los valores de la torre que se colocara en el mapa
 * @param {Number} value valor de indice del JSON tipotower para sacar la informacion
 * @returns {void}
 */
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





/**
 * Metodo que captura el evento de raton y retorna la posicion que se encuentra
 * @param {type} evt
 * @returns {getMousePos.Anonym$0} posicion X y Y que se encuentra el raton.
 */
function getMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

/** 
 * Metodo para mostrar el Textarea
 * @param {Number} index indice para sacar la informacion de los JSON
 * @returns {void}
 */
function showTextArea(index) {
    if (textarea == null) {
        textarea = new TextArea(canvasWidth * 0.30, canvasHeight * 0.65, canvasWidth * 0.40, canvasHeight * 0.25, index);
    } else {
        textarea = null;
    }
}

/**
 * Metodo para ocultar la Textarea
 * @returns {void}
 */
function hiddenTextArea() {
    textarea = null;
}

/**
 * Metodo para colocar la torre en el mapa
 * @returns {void}
 */
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

/**
 * Metodo que comprueba si se ha ganado o no y en el caso que si lo configurar la variable win a true
 * @returns {void}
 */
function setwin() {
    if (this.horda.index == oleada.length - 1 && horda.ArrayEnemy.length == 0) {
        this.win = true;
        reproductor.src = "../Resources/victory.wav";
        reproductor.load();
        this.clearInterval(interval);
    }
}
/**
 * Metodo que comprueba si se a perdido o no y en el caso de que si para el juego y ocurre el evento de perder
 * @returns {void}
 */
function lose() {
    if (this.princess <= 0) {
        reproductor.src = "../Resources/defeat.wav";
        reproductor.load();
        this.clearInterval(interval);
    }
}
/**
 * Metodo que se utiliza reiniciar el juego
 * @returns {void}
 */
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

/**
 * Metodo que se utiliza para configurar el volumen
 * @param {Number} value valor que quieres sumar al volumen actual
 * @returns {void}
 */
function setVolumen(value) {
    if (volumen + value > 0 && volumen + value < 1) {
        reproductor = document.getElementById('player');
        reproductor.volume += value;
        volumen = reproductor.volume;
    }
}

/**
 * Metodo que pone el volumen al maximo
 * @returns {void}
 */
function playReproductor() {
    reproductor = document.getElementById('player');
    reproductor.volume = 1;
    volumen = reproductor.volume;
}

/**
 * Metodo que pone el volumen a 0 es decir lo mutea
 * @returns {void}
 */
function muteReproductor() {
    reproductor = document.getElementById('player');
    reproductor.volume = 0;
    volumen = reproductor.volume;
}

/**
 * Metodo para hacer un clear al interval del juego
 * @returns {void}
 */
function intervalClear() {
    this.clearInterval(interval);
}

/**
 * Metodo que comprueba si hay suficiente gunters para comprar las torres o no para asginarle la imagen correspondiente y para saber si se puede vender o no
 * @returns {void}
 */
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
/**
 * Evento que espera que las teclas sean presionadas
 * @param {String} nombre del evento
 * @param {Method Name} funcion que llamara
 * @param {type} param3
 */
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
/**
 * Evento que espera que las teclas sean soltadas
 * @param {String} nombre del evento
 * @param {Method Name} funcion que llamara
 * @param {type} param3
 */
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