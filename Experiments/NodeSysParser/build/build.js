var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class VideoPixelReader {
    constructor(videoUrl) {
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
    getPixel(x, y, timeInSeconds) {
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
            const imageData = this.context.getImageData(x, y, 1, 1);
            return imageData.data;
        });
    }
}
setTimeout(() => __awaiter(this, void 0, void 0, function* () {
    const videoUrl = "./assets/testEncoded.webm";
    const reader = new VideoPixelReader(videoUrl);
    let seeks = 0;
    let avgSeekTime = 0;
    for (let i = 0; i < 4; i++) {
        for (let time = 0; time < 4; time += 0.1) {
            seeks += 1;
            let t0 = performance.now();
            const pixelData = yield reader.getPixel(128, 128, time);
            if (pixelData) {
                const [r, g, b, a] = pixelData;
                console.log(`Pixel at (128, 128) at ${time} seconds: R=${r}, G=${g}, B=${b}, A=${a}`);
            }
            else {
                console.log("Pixel data not available.");
            }
            avgSeekTime += performance.now() - t0;
        }
    }
    console.log(`avg seek time: ${avgSeekTime / seeks}`);
}), 1000);
//# sourceMappingURL=build.js.map