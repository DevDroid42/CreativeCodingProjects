setTimeout(async () => {
  // Example usage:
  const videoUrl = "./assets/testEncoded.webm";
  const reader = new VideoPixelReader(videoUrl);

  let seeks = 0;
  let avgSeekTime = 0;
  // Get pixel at coordinates (128, 128) and time 5 seconds into the video
  for (let i = 0; i < 4; i++) {
    for (let time = 0; time < 4; time += 0.1) {
      seeks += 1;
      let t0 = performance.now();
      const pixelData = await reader.getPixel(128, 128, time);
      if (pixelData) {
        const [r, g, b, a] = pixelData;
        console.log(`Pixel at (128, 128) at ${time} seconds: R=${r}, G=${g}, B=${b}, A=${a}`);
      } else {
        console.log("Pixel data not available.");
      }
      avgSeekTime += performance.now() - t0;
    }
  }
  console.log(`avg seek time: ${avgSeekTime / seeks}`);
}, 1000);
