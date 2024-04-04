let mySound;
function preload() {
    soundFormats('mp3');
    mySound = window['loadSound']('assets/doorbell');
}
function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(220);
}
//# sourceMappingURL=build.js.map