import { ZipPixelReader } from "./zipPixelReader";

let t  = 0;
let reader: ZipPixelReader;

window["setup"] = async function setup() {
    createCanvas(windowWidth, windowHeight);
    const videoRequest = new Request('video.zip');
    let response = await fetch(videoRequest);
    let b = await response.blob();
    reader = new ZipPixelReader([b]);
    window['reader'] = reader;
    await reader.parseBlobs();
};

function loadingAnimation(progress: number){
    background(255, 10);
    push()
    rectMode(CENTER);
    translate(width / 2, height / 2);
    rotate(progress * PI);
    square(0,0, width / 4);
    stroke(0,0,0);
    square(0,0, width / 4 * progress);
    pop()
    textAlign(CENTER, CENTER)
    textSize(70)
    text("Loading", width / 2, height / 2);
}

window["draw"] = function draw() {
    t += deltaTime / 1000;
    if(reader == null) return;
    if (!reader.finishedLoading) {
        loadingAnimation(reader.progress);
        return;
    }
    background(255,0,255);
    textAlign(CENTER, CENTER)
    textSize(70)
    text("Finished Loading", width / 2, height / 2);
};
