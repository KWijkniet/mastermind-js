var colors = ["yellow", "blue", "pink", "black", "green"];
var currentColors = [-1, -1, -1, -1];
var picked = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];
var rowCount = 0;

console.log(picked);

function init(){
    generateBullets();
}
init();

function getRandomColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateBullets(){
    var inputPerRowCount = 0;
    for(var i = 0; i < 48; i++){
        if (i == 3 || i == 7 || i == 11 || i == 15 || i == 19 || i == 23 || i == 27 || i == 31 || i == 35 || i == 39 || i == 43) {
            inputHolder.innerHTML += "<button id='" + i + "' onclick='setColor(" + i + ")'></button><br />";
        }else{
            inputHolder.innerHTML += "<button id='" + i + "' onclick='setColor(" + i + ")'></button>";
        }
    }
}

function setColor(id){
    var bullet = document.getElementById(id);
    currentColors[id]++;
    if(currentColors[id] == colors.length){
        currentColors[id] = 0;
    }
    bullet.style.backgroundColor = colors[currentColors[id]];
}

function checkRow(){
    switch(rowCount) {
        case 0:
            if(!checkEmpty(0, 4)){
                rowCount++;
                currentColors = [-1, -1, -1, -1];
                checkColor(0, 4);
            }
            break;
        case 1:
            if(!checkEmpty(4, 8)){
                rowCount++;
                currentColors = [-1, -1, -1, -1];
                checkColor(4, 8);
            }
            break;
        case 2:
            if(!checkEmpty(8, 12)){
                rowCount++;
                currentColors = [-1, -1, -1, -1];
                checkColor(8, 12);
            }
            break;
        case 3:
            if(!checkEmpty(12, 16)){
                rowCount++;
                currentColors = [-1, -1, -1, -1];
                checkColor(12, 16);
            }
            break;
        case 4:
            if(!checkEmpty(16, 20)){
                rowCount++;
                currentColors = [-1, -1, -1, -1];
                checkColor(16, 20);
            }
            break;
        default:
            alert("ERROR");
    }
}

function checkEmpty(min, max){
    var foundEmpty = false;
    for(var i = min; i < max; i++){
        if(!document.getElementById(i).style.backgroundColor){
            foundEmpty = true
        }
    }
    return foundEmpty
}

function checkColor(min, max){
    for(var i = min; i < max; i++){
        var getColor = document.getElementById(i).style.backgroundColor;
        for(var o = 0; o < 4; o++){
            if(getColor == picked[o]){
                console.log(picked[o] + " - " + getColor);
            }
        }
    }
}
