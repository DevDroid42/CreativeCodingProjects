import { Shader, SoundFile } from "p5";
import { ZipPixelReader } from "./zipPixelReader";

let t = 0;
let audioTime = 0;
let audio: SoundFile;
let reader: ZipPixelReader;

let cam;

window['preload'] = function preload() {
    audio = loadSound('Phonk.ogg');
    myShader = loadShader('myShader.vert', 'myShader.frag');
}

window["setup"] = async function setup() {
    cam = createCapture("video");
    cam.size(710, 400);
    //cam.hide();
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    const videoRequest = new Request('video.zip');
    let response = await fetch(videoRequest);
    let b = await response.blob();
    reader = new ZipPixelReader([b]);
    window['reader'] = reader;
    //await reader.parseBlobs();
    //reader.tables['Riser_Kick'].registerBeatDetection(() => { console.log("beat detected") })
};

function loadingAnimation(progress: number, message: string) {
    background(255);
    textAlign(CENTER, CENTER)
    textSize(70)
    text("Loading", width / 2, height / 2);
    textSize(40)
    text(message, width / 2, height / 2 + 75);
}

function tickTime() {
    t += deltaTime / 1000;
    if (t > 4) {
        t = 0;
    }
    audioTime = audio.currentTime();
}

let alreadySetup = false;
let clickReady = false;
let hasClicked = false;
function FinalSetup() {
    clickReady = true;
    if (!alreadySetup && hasClicked) {
        createCanvas(windowWidth, windowHeight, WEBGL);
        noStroke();
        noFill();
        audio.play();
        alreadySetup = true;
        return true;
    } else {
        background(255);
        text("Click To Start", width / 2, height / 2);
        return false;
    }
}

window["mouseClicked"] = function clicked() {
    if (clickReady) {
        hasClicked = true;
    }
}

let myShader: Shader;
function renderShaders() {
    shader(myShader);
    // passing cam as a texture
    myShader.setUniform('tex0', cam);

    // rect gives us some geometry on the screen
    rect(0, 0, width, height);
}


let webcam;
window["draw"] = function draw() {
    if (reader == null) return;
    //if (!reader.finishedLoading) {
    //    loadingAnimation(reader.progress, reader.currentlyLoading);
    //    return;
    //}
    if (!FinalSetup()) return;
    tickTime();
    renderShaders();
    //reader.tables['Riser_Kick'].beatDetectionFrame(0.5, t, 0.85);



    /*
    for (let i = 0; i < 256; i++) {
        fill(reader.tables['Beat_Waves'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 - 50, width / 256 + 1);
        fill(reader.tables['HatWaves'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 - 40, width / 256 + 1);
        fill(reader.tables['HighHat'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 - 30, width / 256 + 1);
        fill(reader.tables['KickTrig'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 - 20, width / 256 + 1);
        fill(reader.tables['Melody'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 - 10, width / 256 + 1);
        fill(reader.tables['Riser_Kick'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2, width / 256 + 1);
        fill(reader.tables['SnareTrig'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 + 10, width / 256 + 1);
        fill(reader.tables['VibeVolume'].getFrame(audioTime).getColor(i / 256).rgb().string());
        square(width / 256 * i, height / 2 + 20, width / 256 + 1);
    }
    */
};
