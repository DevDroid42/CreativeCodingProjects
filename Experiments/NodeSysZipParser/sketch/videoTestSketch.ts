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

function loadingAnimation(progress: number, message: string){
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
    textSize(40)
    text(message, width / 2, height / 2 + 75);
}

window["draw"] = function draw() {
    if(reader == null) return;
    if (!reader.finishedLoading) {
        loadingAnimation(reader.progress, reader.currentlyLoading);
        return;
    }
    textAlign(CENTER, CENTER);
    textSize(70);
    t += deltaTime / 1000;
    background(0);
    
    for (let i = 0; i < width; i++) {
        stroke(reader.tables['test'].getFrame(t).getColor(i / width).rgb().string());
        square(i, height/2,1);
    }
};
