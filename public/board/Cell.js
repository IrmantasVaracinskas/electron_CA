class Cell {
    constructor(_x, _y, _size, _state) {
        this.x = _x;
        this.y = _y;
        this.size = _size;
        this.state = _state;
        this.futureState = this.state;
    }

    display() {
        fill(this.state);
        rect(this.x * this.size, this.y * this.size, this.size, this.size);
    }
}