import Color from "color";
import { ColorTable, TableVideo } from "./VideoUtils";
import { BlobReader, TextWriter, ZipReader } from "@zip.js/zip.js";

export class ZipPixelReader {
    public tables: Record<string, TableVideo> = {};
    public finishedLoading = false;
    public currentlyLoading = "";
    public progress = 0;
    
    public constructor(public blobs: Blob[]) {
    }

    public async parseBlobs(){
        for (let i = 0; i < this.blobs.length; i++) {
            const element = this.blobs[i];
            await this.parseTable(await this.getFirstEntryText(this.blobs[i]));
        }
        this.finishedLoading = true;
    }

    private async getFirstEntryText(zipFileBlob: Blob) {
        const zipFileReader = new BlobReader(zipFileBlob);
        const helloWorldWriter = new TextWriter();
        const zipReader = new ZipReader(zipFileReader);
        const firstEntry: any = (await zipReader.getEntries()).shift();
        const helloWorldText = await firstEntry.getData(helloWorldWriter);
        await zipReader.close();
        console.log(helloWorldText);
        return helloWorldText;
    }

    private async createTableVideo(lines: string[]){
        let frames: ColorTable[] = [];
        for (let lineNumber = 1; lineNumber < lines.length; lineNumber++) {
            this.progress = lineNumber / lines.length - 1;
            const line = lines[lineNumber];
            //left of comma is ms
            const data = line.split(','); 
            const time: number = Number(data[0]) / 1000.0;
            const colorString: string = data[1];
            if(colorString == null) continue;
            let colors: Color[] = [];
            for (let position = 0; position < colorString.length - 6; position+=6) {
                const color = colorString.substring(position, position + 6);
                colors[position / 6] = Color('#'+color);
            }
            if(lineNumber === 1 || (lineNumber % Math.floor(lines.length / 10)) === 0){
                console.log(lineNumber);
                await new Promise((resolve) => setTimeout(resolve));
            }
            frames.push(new ColorTable(colors, time));
        }
        this.tables[lines[0]] = new TableVideo(frames);
    }

    private async parseTable(video: string){
        video = video.replaceAll(' ', '_');
        let sequences = video.split('-');
        for (let i = 0; i < sequences.length; i++) {
            const sequence = sequences[i];
            if (sequence === ''){
                continue;
            }
            let lines = sequence.split('\n'); 
            this.currentlyLoading = lines[0];
            await this.createTableVideo(lines);
        }
    }
}
