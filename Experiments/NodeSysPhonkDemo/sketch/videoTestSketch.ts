import { SoundFile } from "p5";
import { ZipPixelReader } from "./zipPixelReader";

let t = 0;
let audioTime = 0;
let audio: SoundFile;
let reader: ZipPixelReader;

window['preload'] = function preload() {
    audio = loadSound('Phonk.ogg');
}

window["setup"] = async function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    const videoRequest = new Request('video.zip');
    let response = await fetch(videoRequest);
    let b = await response.blob();
    reader = new ZipPixelReader([b]);
    window['reader'] = reader;
    await reader.parseBlobs();
    reader.tables['Riser_Kick'].registerBeatDetection(() => { console.log("beat detected") })
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
function setupWEBGL() {
    if (!alreadySetup) {
        createCanvas(windowWidth, windowHeight);
        audio.play();
        alreadySetup = true;
    }
}

window["draw"] = function draw() {
    if (reader == null) return;
    if (!reader.finishedLoading) {
        loadingAnimation(reader.progress, reader.currentlyLoading);
        return;
    }
    tickTime();
    setupWEBGL();
    reader.tables['Riser_Kick'].beatDetectionFrame(0.5, t, 0.85);
    background(0);
    noStroke();
    
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
};
