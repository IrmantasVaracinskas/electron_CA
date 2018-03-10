let board;

function setup() {
    createCanvas(800, 600);
    ConfigurationLoader.loadConfiguration("C:\\Users\\irmis\\Desktop\\electron\\CA\\test.xml")
    board = new Board(10, 10, 10);
}

function draw() {
    background(255);
    fill(0);
    board.display();
}
