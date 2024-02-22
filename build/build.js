let mic;
let fft;
function setup() {
    createCanvas(windowWidth, windowHeight);
    noFill();
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
}
function draw() {
    background(200, 5 * deltaTime);
    let spectrum = fft.analyze();
    beginShape();
    for (let i = 0; i < spectrum.length; i++) {
        vertex(i / spectrum.length * windowWidth, map(spectrum[i], 0, 255, height, 0));
    }
    endShape();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
//# sourceMappingURL=build.js.map