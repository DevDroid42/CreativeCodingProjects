var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}
class ColorTable {
    constructor(colors, time) {
        this.colors = colors;
        this.time = time;
    }
    getColor(position) {
        position = position - Math.floor(position);
        const idx = Math.min(this.colors.length - 1, Math.round(position * this.colors.length));
        return this.colors[idx];
    }
}
class TableVideo {
    constructor(frames) {
        this.frames = frames;
        this.frames.sort((n1, n2) => n1.time - n2.time);
    }
    binarySearch(frames, target) {
        let left = 0;
        let right = frames.length - 1;
        if (frames.length === 1)
            return frames[0];
        if (frames.length === 2)
            return frames[Math.round(target)];
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (mid === 0)
                return frames[mid];
            if (mid === frames.length - 1)
                return frames[mid];
            if (frames[mid - 1].time <= target && frames[mid + 1].time >= target)
                return frames[mid];
            if (target < frames[mid].time)
                right = mid - 1;
            else
                left = mid + 1;
        }
    }
    getFrame(time) {
        return this.binarySearch(this.frames, time);
    }
}
class VideoPixelReader {
    constructor(videoUrl, frameRate, resolution) {
        this.frameRate = frameRate;
        this.resolution = resolution;
        this.videoElement = document.createElement("video");
        this.videoElement.src = videoUrl;
        this.videoElement.crossOrigin = "anonymous";
        this.videoElement.preload = "auto";
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        document.body.appendChild(this.canvas);
        this.videoDataLoaded = false;
        this.videoElement.addEventListener("loadeddata", () => {
            this.canvas.width = this.videoElement.videoWidth;
            this.canvas.height = this.videoElement.videoHeight;
            this.videoDataLoaded = true;
        });
    }
    populateData() {
        return __awaiter(this, void 0, void 0, function* () {
            yield new Promise((resolve) => {
                this.videoElement.addEventListener("loadeddata", resolve, { once: true });
            });
            const delta = 1 / this.frameRate;
            let frames = [];
            for (let time = 0; time < this.videoElement.duration; time += delta) {
                let colors = [];
                const pixelData = yield this.decodeGetPixels(this.resolution, time);
                for (let x = 0; x < this.resolution * 4; x += 4) {
                    if (pixelData) {
                        const r = pixelData[x];
                        const g = pixelData[x + 1];
                        const b = pixelData[x + 2];
                        const a = pixelData[x + 3];
                        colors.push(new Color(r, g, b));
                    }
                    else {
                        console.log("Pixel data not available.");
                    }
                }
                frames.push(new ColorTable(colors, time));
            }
            this.cachedVideo = new TableVideo(frames);
        });
    }
    getPixel(x, time) {
        return this.cachedVideo.getFrame(time).getColor(x);
    }
    decodeGetPixels(width, timeInSeconds) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.videoDataLoaded) {
                console.error("Video data not loaded. Call after video has loaded.");
                return null;
            }
            this.videoElement.currentTime = timeInSeconds;
            yield new Promise((resolve) => {
                this.videoElement.addEventListener("seeked", resolve, { once: true });
            });
            this.context.drawImage(this.videoElement, 0, 0);
            const imageData = this.context.getImageData(0, this.videoElement.height / 2, width, 1);
            return imageData.data;
        });
    }
}
let reader;
let setupDone = false;
function setup() {
    return __awaiter(this, void 0, void 0, function* () {
        const videoUrl = "./assets/testEncoded.mp4";
        reader = new VideoPixelReader(videoUrl, 24, 256);
        yield reader.populateData();
        let seeks = 0;
        let avgSeekTime = 0;
        for (let i = 0; i < 4; i++) {
            for (let time = 0; time < 4; time += 0.1) {
                seeks += 1;
                let t0 = performance.now();
                const c = reader.getPixel(0.5, time);
                avgSeekTime += performance.now() - t0;
            }
        }
        console.log(`avg seek time: ${avgSeekTime / seeks}`);
        createCanvas(720, 400);
        stroke(255);
        frameRate(30);
        setupDone = true;
    });
}
let time = 0;
function draw() {
    if (!setupDone)
        return;
    background(0);
    stroke(0, 0);
    time += deltaTime / 1000;
    for (let i = 0; i < reader.resolution; i++) {
        const pos = i / reader.resolution;
        const col = reader.getPixel(pos, time % 4);
        fill(col.r, col.g, col.b);
        square((i / reader.resolution) * width, height / 2, 3);
    }
}
//# sourceMappingURL=build.js.map