let txtBox;
let colorPicker;
let slider;
function setup() {
    createP("Text To Render:");
    txtBox = createInput("Edit Me");
    createP("Text Color");
    colorPicker = createColorPicker("red");
    createP("Text Size");
    slider = createSlider(0, 500, 100);
    createCanvas(windowWidth, windowHeight * 0.8, WEBGL);
    textFont(loadFont('Staatliches-Regular.ttf'));
}
function draw() {
    background(0);
    orbitControl();
    textAlign(CENTER, CENTER);
    let c = colorPicker.color();
    textSize(slider.value());
    const res = 100;
    for (let i = 1; i < res; i++) {
        fill(map(i / res * c.levels[0], 0, res, 0, 255), map(i / res * c.levels[1], 0, res, 0, 255), map(i / res * c.levels[2], 0, res, 0, 255));
        translate(0, 0, .5);
        text(txtBox.value(), 0, 0);
    }
}
//# sourceMappingURL=build.js.map