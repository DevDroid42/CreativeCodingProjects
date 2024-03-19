import { TableVideo } from "./VideoUtils";
import { BlobReader, TextWriter, ZipReader } from "@zip.js/zip.js";

export class ZipPixelReader {
    private tables: Record<string, TableVideo>;

    public constructor(public blobs: Blob[]) {
        blobs.forEach(blob => {
            
        });
    }

    private async getFirstEntryText(zipFileBlob: Blob) {
        // Creates a BlobReader object used to read `zipFileBlob`.
        const zipFileReader = new BlobReader(zipFileBlob);
        // Creates a TextWriter object where the content of the first entry in the zip
        // will be written.
        const helloWorldWriter = new TextWriter();

        // Creates a ZipReader object reading the zip content via `zipFileReader`,
        // retrieves metadata (name, dates, etc.) of the first entry, retrieves its
        // content via `helloWorldWriter`, and closes the reader.
        const zipReader = new ZipReader(zipFileReader);
        const firstEntry: any = (await zipReader.getEntries()).shift();
        const helloWorldText = await firstEntry.getData(helloWorldWriter);

        await zipReader.close();
        return helloWorldText;
    }

    private parseTable(video: string){
        
    }
}
