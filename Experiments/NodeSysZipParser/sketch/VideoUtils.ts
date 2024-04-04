import Color from 'color'

export class ColorTable {
  public constructor(public colors: Color[], public time: number) {}

  public getColor(position: number): Color {
    position = position - Math.floor(position);
    const idx = Math.min(this.colors.length - 1, Math.round(position * this.colors.length));
    return this.colors[idx];
  }
}

export class TableVideo {
  public constructor(public frames: ColorTable[]) {
    this.frames.sort((n1, n2) => n1.time - n2.time);
  }

  private binarySearch(frames: ColorTable[], target: number): ColorTable {
    let left: number = 0;
    let right: number = frames.length - 1;

    if (frames.length === 1) return frames[0];
    if (frames.length === 2) return frames[Math.round(target)];

    while (left <= right) {
      const mid: number = Math.floor((left + right) / 2);
      if (mid === 0) return frames[mid];
      if (mid === frames.length - 1) return frames[mid];
      if (frames[mid - 1].time <= target && frames[mid + 1].time >= target) return frames[mid];
      if (target < frames[mid].time) right = mid - 1;
      else left = mid + 1;
    }
    console.error('binary search failed');
    return new ColorTable([], 0);
  }

  public getFrame(time: number) {
    return this.binarySearch(this.frames, time);
  }
}