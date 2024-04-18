import { ZipPixelReader } from "./zipPixelReader";

let t  = 0;
let reader: ZipPixelReader;

window["setup"] = async function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    const videoRequest = new Request('video.zip');
    let response = await fetch(videoRequest);
    let b = await response.blob();
    reader = new ZipPixelReader([b]);
    window['reader'] = reader;
    await reader.parseBlobs();
    reader.tables['test'].registerBeatDetection(() => {console.log("beat detected")})
};

function loadingAnimation(progress: number, message: string){
    background(255);
    textAlign(CENTER, CENTER)
    textSize(70)
    text("Loading", width / 2, height / 2);
    textSize(40)
    text(message, width / 2, height / 2 + 75);
}

function tickTime(){
    t += deltaTime / 1000;
    if(t > 4){
        t = 0;
    }
}

let alreadySetup = false;
function setupWEBGL(){
    if(!alreadySetup){
        createCanvas(windowWidth, windowHeight, WEBGL);
        alreadySetup = true;
    }
}

window["draw"] = function draw() {
    if(reader == null) return;
    if (!reader.finishedLoading) {
        loadingAnimation(reader.progress, reader.currentlyLoading);
        return;
    }
    tickTime();
    reader.tables['test'].beatDetectionFrame(0.5, t, 0.85);
    background(0);
    
    for (let i = 0; i < width; i++) {
        stroke(reader.tables['test'].getFrame(t).getColor(i / width).rgb().string());
        square(i, height/2 - 10,1);
        stroke(reader.tables['test2'].getFrame(t).getColor(i / width).rgb().string());
        square(i, height/2 + 10,1);
    }
};
