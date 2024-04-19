import { Graphics, Shader, SoundFile, TEXTURE } from "p5";
import { ZipPixelReader } from "./zipPixelReader";

let animationProgress = 0;
let t = 0;
let audioTime = 0;
let audio: SoundFile;
let reader: ZipPixelReader;

let cam;

window['preload'] = function preload() {
    audio = loadSound('Phonk.ogg');
    myShader = loadShader('myShader.vert', 'myShader.frag');
}

let melodyGraphics: Graphics;
window["setup"] = async function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    textFont(loadFont('arial.ttf'));
    cam = createCapture('video');
    cam.size(710, 400);
    cam.hide();
    const videoRequest = new Request('video.zip');
    let response = await fetch(videoRequest);
    let b = await response.blob();
    reader = new ZipPixelReader([b]);
    window['reader'] = reader;
    await reader.parseBlobs();
    //reader.tables['Riser_Kick'].registerBeatDetection(() => { console.log("beat detected") })
    melodyGraphics = createGraphics(256, 1);
};

function loadingAnimation(progress: number, message: string) {
    push();
    background(255);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(70);
    text("Loading", 0, 0);
    textSize(40);
    translate(0, 100, 0);
    text(message, 0, 0);
    pop();
}

function tickTime() {
    t += deltaTime / 1000;
    animationProgress += deltaTime;
    if (t > 4) {
        t = 0;
    }
    audioTime = audio.currentTime();
}

let alreadySetup = false;
let clickReady = false;
let hasClicked = false;
function FinalSetup() {
    push();
    clickReady = true;
    if(alreadySetup) return true;
    if (hasClicked) {
        noStroke();
        noFill();
        audio.play();
        alreadySetup = true;
        pop();
        return true;
    } else {
        fill(255);
        textAlign(CENTER, CENTER)
        textSize(70)
        text("Click To Start", 0, 0);
        pop();
        return false;
    }

}

window["mouseClicked"] = function clicked() {
    if (clickReady) {
        hasClicked = true;
    }
}

let myShader: Shader;
let melodyTexture: TEXTURE;
function renderShaders() {
    shader(myShader);
    myShader.setUniform('time', animationProgress);
    // passing cam as a texture
    myShader.setUniform('tex0', melodyGraphics);
    // rect gives us some geometry on the screen
    rect(0, 0, width, height);
}

window["draw"] = function draw() {
    if (reader == null) return;
    if (!reader.finishedLoading) {
        loadingAnimation(reader.progress, reader.currentlyLoading);
        return;
    }
    background(0);
    if (!FinalSetup()) return;


    tickTime();
    orbitControl();
    for (let i = 0; i < 256; i++) {
        melodyGraphics.background(reader.tables['Riser_Kick'].getFrame(audioTime).getColor(0.5).rgb().string());
        melodyGraphics.stroke(reader.tables['Melody'].getFrame(audioTime).getColor(i / 256).rgb().string());
        melodyGraphics.fill(reader.tables['Melody'].getFrame(audioTime).getColor(i / 256).rgb().string());
        melodyGraphics.point(i, 0);
    }

    //ambientLight(255);
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
