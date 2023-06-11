class Main {

    constructor(x, y, index) {

        this.x = x;

        this.y = y;

        this.index = index;

        this.directions = [

            [this.x - 1, this.y - 1],

            [this.x, this.y - 1],

            [this.x + 1, this.y - 1],

            [this.x - 1, this.y],

            [this.x + 1, this.y],

            [this.x - 1, this.y + 1],

            [this.x, this.y + 1],

            [this.x + 1, this.y + 1]

        ];

    }

    chooseCell(ch) {

        var found = [];

        for (var i in this.directions) {

            var x = this.directions[i][0];

            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == ch) {

                    found.push(this.directions[i]);

                }

            }

        }

        return found;

    }

}
class Grass extends Main {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
    }

    mul() {

        this.multiply++;

        var newCell = random(this.chooseCell(0));

        if (this.multiply >= 0 && newCell) {

            var newGrass = new Grass(newCell[0], newCell[1], this.index);

            grassArr.push(newGrass);

            matrix[newCell[1]][newCell[0]] = this.index;

            this.multiply = 0;

        }

    }

}
class GrassEater extends Main {

    constructor(x, y, index) {

        super(x, y, index);
        this.energy = 8;

    }

    getNewCoordinates() {

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],

            [this.x - 1, this.y + 1],

            [this.x, this.y + 1],

            [this.x + 1, this.y + 1]

        ];

    }

    chooseCell(character) {

        this.getNewCoordinates();

        return super.chooseCell(character);

    }

    // eat, mul, move, die
}
class PredatorEater extends Main {

    constructor(x, y, index) {

        super(x, y, index);
        this.energy = 8;

    }

    getNewCoordinates() {

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    // eat, mul, move, die
}

class Water extends Main {

    constructor(x, y, index) {

        super(x, y, index);
        this.energy = 8;

    }

    getNewCoordinates() {

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ];

    }

    chooseCell(character) {

        this.getNewCoordinates();

        return super.chooseCell(character);

    }

    // eat, mul, move, die

}
class Stone extends Main {

    constructor(x, y, index) {

        super(x, y, index);
        this.energy = 8;

    }

    getNewCoordinates() {

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]

        ];

    }

    chooseCell(character) {

        this.getNewCoordinates();

        return super.chooseCell(character);

    }

    // eat, mul, move, die

}
class Mushroom extends Main {

    constructor(x, y, index){
    
    super(x, y, index);
    this.energy = 8;
    
    }
    
    getNewCoordinates() {
    
    this.directions = [
    [this.x - 1, this.y - 1],
    [this.x, this.y - 1],
    [this.x + 1, this.y - 1],
    [this.x - 1, this.y],
    [this.x + 1, this.y],
    [this.x - 1, this.y + 1],
    [this.x, this.y + 1],
    [this.x + 1, this.y + 1]
    
    ];
    
    }
    chooseCell(character) {
    this.getNewCoordinates();
    return super.chooseCell(character);
    }
    
    // eat, mul, move, die
    
    }             