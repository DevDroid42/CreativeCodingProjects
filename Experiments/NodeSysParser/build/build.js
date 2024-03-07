class VideoPixelReader {
    constructor(videoUrl) {
        this.videoElement = document.createElement("video");
        this.videoElement.src = videoUrl;
        this.videoElement.crossOrigin = "anonymous";
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
        if (!this.videoDataLoaded) {
            console.error("Video data not loaded. Call after video has loaded.");
            return null;
        }
        this.videoElement.currentTime = timeInSeconds;
        this.context.drawImage(this.videoElement, 0, 0);
        const imageData = this.context.getImageData(x, y, 1, 1);
        return imageData.data;
    }
}
const videoUrl = "./assets/testEncoded.mp4";
const reader = new VideoPixelReader(videoUrl);
setTimeout(() => {
    for (let time = 0; time < 4; time += 0.1) {
        const pixelData = reader.getPixel(128, 128, time);
        if (pixelData) {
            const [r, g, b, a] = pixelData;
            console.log(`Pixel at (128, 128) at ${time} seconds: R=${r}, G=${g}, B=${b}, A=${a}`);
        }
        else {
            console.log("Pixel data not available.");
        }
    }
}, 1000);
//# sourceMappingURL=build.js.map