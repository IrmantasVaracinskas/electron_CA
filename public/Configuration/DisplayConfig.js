class DisplayConfig {
    static setStrokeWeight(_strokeWeight) {
        this.strokeWeight = _strokeWeight;
    }
    static getStrokeWeight() {
        return this.strokeWeight;
    }

    static setStrokeColor(_r, _g, _b) {
        this.strokeColor = color(_r, _g, _b);
    }
    static getStrokeColor() {
        return this.strokeColor;
    }
}