class VideoPixelReader {
  private videoElement: HTMLVideoElement;
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private videoDataLoaded: boolean;

  constructor(videoUrl: string) {
    this.videoElement = document.createElement("video");
    this.videoElement.src = videoUrl;
    this.videoElement.crossOrigin = "anonymous";

    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);
    this.videoDataLoaded = false;

    // Load the entire video into memory
    this.videoElement.addEventListener("loadeddata", () => {
      this.canvas.width = this.videoElement.videoWidth;
      this.canvas.height = this.videoElement.videoHeight;
      this.videoDataLoaded = true;
    });
  }

  // Synchronous method to get pixel data
  getPixel(x: number, y: number, timeInSeconds: number): Uint8ClampedArray | null {
    if (!this.videoDataLoaded) {
      console.error("Video data not loaded. Call after video has loaded.");
      return null;
    }

    // Set the video time to the specified timestamp
    this.videoElement.currentTime = timeInSeconds;
    
    // Draw the video frame onto the canvas
    this.context.drawImage(this.videoElement, 0, 0);

    // Get pixel data at the specified coordinates
    const imageData = this.context.getImageData(x, y, 1, 1);
    return imageData.data;
  }
}

// Example usage:
const videoUrl = "./assets/testEncoded.mp4";
const reader = new VideoPixelReader(videoUrl);

setTimeout(() => {
  // Get pixel at coordinates (100, 50) and time 5 seconds into the video
  for (let time = 0; time < 4; time += 0.1) {
    const pixelData = reader.getPixel(128, 128, time);
    if (pixelData) {
      const [r, g, b, a] = pixelData;
      console.log(`Pixel at (128, 128) at ${time} seconds: R=${r}, G=${g}, B=${b}, A=${a}`);
    } else {
      console.log("Pixel data not available.");
    }
  }
}, 1000);
