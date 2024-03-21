let txtBox;
let colorPicker;
let slider;
let fontSelect;
let fonts = {};
let check;
function setup() {
    createDiv("Text To Render:");
    txtBox = createInput("Edit Me");
    createDiv("Text Color");
    colorPicker = createColorPicker("red");
    createDiv("Text Size");
    slider = createSlider(0, 500, 100);
    createDiv("Font");
    fontSelect = createSelect();
    fontSelect.option("fancy");
    fontSelect.option("regular");
    fonts['fancy'] = loadFont('Staatliches-Regular.ttf');
    fonts['regular'] = loadFont('arial.ttf');
    check = createCheckbox("Is Thick", true);
    createCanvas(windowWidth, windowHeight * 0.5, WEBGL);
}
function draw() {
    background(0);
    orbitControl();
    textAlign(CENTER, CENTER);
    let c = colorPicker.color();
    textSize(slider.value());
    textFont(fonts[fontSelect.value()]);
    let res = 100;
    if (check.checked()) {
        res = 100;
    }
    else {
        res = 2;
    }
    for (let i = 1; i < res; i++) {
        fill(map(i / res * c.levels[0], 0, res, 0, 255), map(i / res * c.levels[1], 0, res, 0, 255), map(i / res * c.levels[2], 0, res, 0, 255));
        translate(0, 0, .5);
        text(txtBox.value(), 0, 0);
    }
}
//# sourceMappingURL=build.js.map