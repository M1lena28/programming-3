var express = require("express");
var fs = require('fs');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("../client"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});
server.listen(3000, function () {
    console.log("App is running on port 3000");
});

grassArr = [];
grassEaterArr = [];
PredatorEaterArr = [];
waterArr = [];
stoneArr = [];
MushroomArr = [];

LivingCreature = require("./game/class.main");
Grass = require("./game/class.Grass");
GrassEater = require("./game/class.GrassEater");
PredatorEater = require("./game/class.PredatorEater");
Water = require("./game/class.Water");
Stone = require("./game/class.Stone");
Mushroom = require("./game/class.Mushroom");


multforGrass = 8

io.on("connection", function (socket) {
    socket.on("afterClick", function (data) {
        multforGrass = data.multforGrass
    });
    setInterval(drawForBackend, 5000);

});



//import functions and class, create objects,

matrix = [
    [0, 3, 1, 0, 5, 2, 0, 6, 3, 4, 0, 6],
    [1, 0, 3, 4, 6, 0, 3, 0, 5, 2, 3, 0],
    [0, 1, 0, 0, 2, 3, 4, 0, 2, 0, 3, 0],
    [0, 2, 1, 3, 4, 5, 3, 6, 2, 0, 0, 1],
    [1, 1, 0, 3, 6, 1, 0, 4, 5, 0, 2, 0],
    [1, 1, 0, 3, 2, 0, 4, 0, 0, 3, 0, 0],
    [1, 1, 0, 2, 6, 3, 0, 3, 0, 1, 4, 0],
    [1, 0, 3, 0, 4, 0, 2, 0, 1, 6, 0, 3],
    [0, 2, 0, 3, 3, 1, 5, 0, 0, 2, 3, 0],
    [3, 0, 4, 0, 1, 0, 0, 1, 0, 0, 3, 0],
    [1, 0, 1, 3, 6, 2, 5, 0, 4, 0, 2, 1],
    [1, 2, 3, 3, 0, 2, 5, 4, 6, 2, 0, 0],
    [2, 3, 0, 6, 2, 0, 3, 0, 5, 2, 4, 0],
    [1, 4, 0, 1, 0, 3, 3, 2, 6, 1, 4, 0],
]

var isFemale = true
function createObjects() {

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                isFemale = !isFemale;
                var grEater = new GrassEater(x, y, 2, isFemale);
                grassEaterArr.push(grEater);
            }

            else if (matrix[y][x] == 3) {
                var grEater = new PredatorEater(x, y, 3);
                PredatorEaterArr.push(grEater);

            }
            else if (matrix[y][x] == 4) {
                var waEater = new Water(x, y, 4);
                waterArr.push(waEater);
            }
            else if (matrix[y][x] == 5) {
                var st = new Stone(x, y, 5);
                stoneArr.push(st);
            }
            else if (matrix[y][x] == 6) {
                var grEater = new Mushroom(x, y, 6)
                MushroomArr.push(grEater)
            }

        }
    }
}
createObjects();

function drawForBackend() {
    console.log("started")
    for (var i in grassArr) {
        grassArr[i].mul(multforGrass);
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].move();
        grassEaterArr[i].die();
    }
    for (var i in PredatorEaterArr) {
        PredatorEaterArr[i].eat();
        PredatorEaterArr[i].mul();
        PredatorEaterArr[i].move();
        PredatorEaterArr[i].die();
    }

    for (var i in waterArr) {
        waterArr[i].eat();
        waterArr[i].mul();
        waterArr[i].move();
        waterArr[i].die();
    }
    for (var i in stoneArr) {
        stoneArr[i].eat();
        stoneArr[i].mul();
        stoneArr[i].move();
        stoneArr[i].die();
    }
    for (var i in MushroomArr) {
        MushroomArr[i].mul();
        MushroomArr[i].die();
    }

    let sendData = {
        matrix: matrix
    }
    statistics = {
        grasses: grassArr.length,
        grassEaters: grassEaterArr.length,
        predators: PredatorEaterArr.length,
        water: waterArr.length,
        stones: stoneArr.length,
        mushrooms: MushroomArr.length
    }
    fs.writeFileSync('statistics.json', JSON.stringify(statistics, undefined, 2))
    mystatistics = fs.readFileSync('statistics.json').toString()

    io.sockets.emit("sendStatistics", JSON.parse(mystatistics))
    io.sockets.emit("matrix", sendData)
}

setInterval(drawForBackend, 1000)

