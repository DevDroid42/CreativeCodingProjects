class Color {
  public constructor(public r: number, public g: number, public b: number) {}
}

class ColorTable {
  public constructor(public colors: Color[], public time: number) {}

  public getColor(position: number): Color {
    position = position - round(position);
    return this.colors[round(position * this.colors.length)];
  }
}

class TableVideo {
  public constructor(public frames: ColorTable[]) {
    this.frames.sort((n1, n2) => n1.time - n2.time);
  }

  private binarySearch(frames: ColorTable[], target: number): ColorTable {
    let left: number = 0;
    let right: number = frames.length - 1;

    if(frames.length === 1) return frames[0];
    if(frames.length === 2) return frames[Math.round(target)];

    while (left <= right) {
      const mid: number = Math.floor((left + right) / 2);
      if (mid === 0) return frames[mid];
      if (mid === frames.length - 1) return frames[mid];
      if (frames[mid - 1].time <= target && frames[mid + 1].time >= target) return frames[mid];
      if (target < frames[mid].time) right = mid - 1;
      else left = mid + 1;
    }
  }

  public getFrame(time: number) {
    return this.binarySearch(this.frames, time);
  }
}

class VideoPixelReader {
  private videoElement: HTMLVideoElement;
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private videoDataLoaded: boolean;

  constructor(videoUrl: string) {
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

  // Asynchronous method to get pixel data
  async decodeGetPixel(x: number, y: number, timeInSeconds: number): Promise<Uint8ClampedArray | null> {
    if (!this.videoDataLoaded) {
      console.error("Video data not loaded. Call after video has loaded.");
      return null;
    }

    // Set the video time to the specified timestamp
    this.videoElement.currentTime = timeInSeconds;

    // Wait for the video frame to update
    await new Promise((resolve) => {
      this.videoElement.addEventListener("seeked", resolve, { once: true });
    });

    // Draw the video frame onto the canvas
    this.context.drawImage(this.videoElement, 0, 0);

    // Get pixel data at the specified coordinates
    const imageData = this.context.getImageData(x, y, 1, 1);
    return imageData.data;
  }
}
