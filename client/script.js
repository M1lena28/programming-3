
socket = io();

var side = 20, m = 14, n = 12;
multforGrass = 8
var grassColor = "green"
var grassEaterColor = "yellow"
var PredatorEaterColor = "red"
var WaterColor = "blue"
var stoneColor = "brown"
var MushroomColor = "pink"

function clickevent() {
    alert("It's raining, play with me.")
 }
 function clickevent1() {
    alert("Bye!")
 }
function setup() {
    frameRate(40);
    createCanvas(n * side, m * side);
    background('#e8e8e8');
    button1 = document.getElementById("Springid");
    button2 = document.getElementById("Summerid");
    button3 = document.getElementById("Fallid");
    button4 = document.getElementById("Winterid");
    button1.addEventListener("click", onColorChange);
    button2.addEventListener("click", onColorChange);
    button3.addEventListener("click", onColorChange);
    button4.addEventListener("click", onColorChange);
}
mult = 8
function onColorChange() {
    if (event.target.id == "Summerid") {
        grassColor = "#50af4a"
        mult = 6;
    }else if (event.target.id == "Springid") {
        grassColor = "#00CC00"
        PredatorEaterColor = "#CE0F0F"
        WaterColor = "#CE0F0F"
        grassEaterColor =  "#E2FF1F"
        stoneColor = "#330019"
        MushroomColor = "#F03FC1"
        multforGrass = 5
        multforGrassEater = 4
        multforGrassPredatorEater = 3
        multforstone = 1
        multforWater = 3
        multforMushroom = 3
     }else if (event.target.id == "Summerid") {
        grassColor = "#3fd84a"
        PredatorEaterColor = "#FC0000"
        WaterColor = "#4068EC"
        grassEaterColor =  "#D5F50B"
        stoneColor = "#330019"
        MushroomColor = "#FF0ABE"
        multforGrass= 7
        multforGrassEater = 5
        multforGrassPredatorEater = 3
        multforstone = 1
        multforWater = 3
        multforMushroom = 5
    } else if (event.target.id == "Fallid") {
        grassColor = "#FF9933"
        PredatorEaterColor = "#FF3333"
        WaterColor = "#4567D7"
        grassEaterColor =  "#DFF35B"
        stoneColor = "#330019"
        MushroomColor = "#A90F80"
        multforGrass = 10
        multforGrassEater = 7
        multforGrassPredatorEater = 6
        multforstone = 1
        multforWater = 3
        multforMushroom = 7
    } else if (event.target.id == "Winterid") {
        grassColor = "#E5FFCC"
        PredatorEaterColor = "FFCCCC"
        WaterColor = "#99CCFF"
        grassEaterColor =  "#A9B55E"
        stoneColor = "#330019"
        MushroomColor = "#9E8998"
        multforGrass = 12
        multforGrassEater = 9
        multforGrassPredatorEater = 8
        multforstone = 1
        multforWater = 3
        multforMushroom = 7
    }

    let data = {
        multforGrass : multforGrass
    }
    socket.on("matrix", drawMatrix);
    socket.emit("afterClick", data)
}




function drawMatrix(data) {
    matrix = data.matrix;
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                fill(grassColor);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill(192, 192, 192);
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 2) {
                fill(grassEaterColor);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("brown");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill("pink");
                rect(x * side, y * side, side, side);
            }
        }
    }
}





socket.on("matrix", drawMatrix);












