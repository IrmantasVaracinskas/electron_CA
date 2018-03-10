class Config {
    static getType() {
        return this.type;
    }
    static setType(_type) {
        this.type = _type.toLowerCase();
    }

    static setRadius(_radius) {
        this.radius = _radius;
    }
    static getRadius() {
        return this.radius;
    }

    static setNeighborhood(_neighborgood) {
        this.neighborhood = _neighborgood.toLowerCase();
    }
    static getNeighborhood() {
        return this.neighborhood;
    }

    static setCellSize(_cellSize) {
        this.cellSize = _cellSize;
    }
    static getCellSize() {
        return this.cellSize;
    }

    static setFrameRate(_frameRate) {
        this.frameRate = _frameRate;
    }
    static getFrameRate() {
        return this.frameRate;
    }
}