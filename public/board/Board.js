class Board {
    constructor(_width, _height, _cellSize) {
        this.width = _width;
        this.height = _height;
        this.cells = [];
        for (let i = 0; i < this.width * this.height; i++) {
            this.cells.push(new Cell(i % this.width, floor(i / this.height), _cellSize, _cellSize, 0));
        }
    }

    display() {
        for (let cell of this.cells) {
            cell.display();
        }
    }

    getCell(_x, _y) {
        return this.cells[_y * this.width + _y];
    }
}