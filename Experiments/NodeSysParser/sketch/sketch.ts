let reader: VideoPixelReader;
let setupDone = false;

async function setup() {
  // Example usage:
  const videoUrl = "./assets/testEncoded.mp4";
  reader = new VideoPixelReader(videoUrl, 24, 256);
  await reader.populateData();
  
  let seeks = 0;
  let avgSeekTime = 0;

  
  // Get pixel at coordinates (128, 128) and time 5 seconds into the video
  for (let i = 0; i < 4; i++) {
    for (let time = 0; time < 4; time += 0.1) {
      seeks += 1;
      let t0 = performance.now();
      const c = reader.getPixel(0.5, time);
      //console.log(`Pixel at (128, 128) at ${time} seconds: R=${c.r}, G=${c.g}, B=${c.b}`);
      avgSeekTime += performance.now() - t0;
    }
  }
  console.log(`avg seek time: ${avgSeekTime / seeks}`);
  
  createCanvas(720, 400);
  stroke(255); // Set line drawing color to white
  frameRate(30);
  setupDone = true;
}

let time = 0;
function draw(){
  if(!setupDone) return;
  background(0);
  stroke(0,0);
  time += deltaTime / 1000;
  for (let i = 0; i < reader.resolution; i++) {
    const pos = i / reader.resolution;
    const col = reader.getPixel(pos, time % 4);
    fill(col.r, col.g, col.b);
    square((i / reader.resolution) * width, height / 2, 3);  
  }
}