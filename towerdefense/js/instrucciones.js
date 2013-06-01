/**
 * Es el numero que indica que imagen se esta mostrando actualmente.
 * @type Number
 */
var index=1;
/**
 * 
 * Es la var que indica cual es el elemento que se le cambiara el background
 * @type @exp;document@call;getElementById
 */
var ctx;
/**
 * 
 * Funcion que que augmenta el indice + 1 y llama a la funcion setImage si
 * el indice es menor que 4.
 * @returns {void}
 */
function next() {
    if(index<4){
    index++;
    setImage(index);
    }
}
/**
 * Funcion que que decrementa el indice - 1 y llama a la funcion setImage si
 * el indice es mayor que 1.
 * @returns {void}
 */
function previous() {
    if(index>1){
    index--;
    setImage(index);
    }
}
/**
 * Funcion que configura cambia la imagen actual segun el index al elemento con la id "canvas"
 * @param {Number} index indica que imagen se tiene que cojer
 * @returns {void}
 */
function setImage(index){
    checkButtons();
    ctx=document.getElementById("canvas");
    ctx.setAttribute("style", "background-image: url(./Resources/instrucciones"+index+".jpg);");
}

function checkButtons(){
    if(index==4){
        var button = document.getElementById('siguiente');
        button.setAttribute("style", "background-image: none;");
    }else if(index==1){
        var button = document.getElementById('atras');
        button.setAttribute("style", "background-image: none;");
    }else{
         var button = document.getElementById('atras');
        button.setAttribute("style", "background-image: url(./Resources/previous.png);");
         var button = document.getElementById('siguiente');
        button.setAttribute("style", "background-image: url(./Resources/next.png);");
        
    }
}

