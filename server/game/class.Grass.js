const Main = require ("./class.main")
let random = require("./random");

module.exports = class Grass extends Main {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
    }

    mul(mult) {

        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(this.chooseCell(0));
        if (this.multiply >= 0 && newCell >=mult) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY] [newX] = this.index
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;

        }

    }

}
