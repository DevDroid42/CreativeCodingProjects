const gui = new dat.GUI();
const properties = {
    angleSpeed: 2,
    trail: 5
};
gui.add(properties, "angleSpeed", 0, 20);
gui.add(properties, "trail", 0, 255);
let c;
let time = 0;
let angles = [];
function setup() {
    c = color(0);
    createCanvas(windowWidth, windowHeight);
    for (let index = 0; index < windowWidth; index++) {
        angles.push(0);
    }
    frameRate(120);
}
function draw() {
    time += deltaTime / 1000;
    background(0, properties.trail / 255);
    noStroke();
    colorMode('hsb');
    for (let i = 0; i < angles.length; i++) {
        angles[i] += (((properties.angleSpeed * properties.angleSpeed * (i + 1)) / angles.length) * deltaTime) / 1000;
        const angle = angles[i];
        fill(noise(i / angles.length + (time / 10) + 0.1 * 2) * 255, 255, noise(i / angles.length + time) * 128 + 128);
        circle((((cos(angle) * width) / 2) * (i + 1)) / angles.length + width / 2, (((sin(angle) * height) / 2) * (i + 1)) / angles.length + height / 2, 2);
    }
}
//# sourceMappingURL=build.js.map