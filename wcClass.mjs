import { rejects } from "assert";
import { resolve } from "path";
import * as fs from "fs";

export default class WcTool {
  /**
   * A class that acts like
   * the wc command in Linux
   */

  #newLineRegex = new RegExp("\n", "g");

  constructor(filePath) {
    this.filePath = filePath;
  }

  getReadableStream() {
    // contains creation logic for a ReadStream

    if (this.filePath) {
      return fs.createReadStream(this.filePath);
    }
    return process.stdin;
  }

  getReadableStreamWithEncoding() {
    // contains creation logic for a ReadStream with UTF-8
    if (this.filePath) {
      return fs.createReadStream(this.filePath, { encoding: "utf-8" });
    }
    return process.stdin;
  }

  async countLinesInFile() {
    // A method that counts lines in a file
    return new Promise((resolve, reject) => {
      let lineCount = 0;
      const readableStream = this.getReadableStream();

      readableStream.on("error", (error) => {
        console.log("Error while reading the file");
        reject(error);
      });

      readableStream.on("data", (chunk) => {
        const match = chunk.toString().match(this.#newLineRegex);
        lineCount += match.length;
      });

      readableStream.on("close", () => {
        resolve(lineCount);
      });
    });
  }

  async countBytesInFile() {
    return new Promise((resolve, reject) => {
      let byteCount = 0;
      const readableStream = this.getReadableStream();

      readableStream.on("error", (error) => {
        reject(error);
      });

      readableStream.on("data", (chunk) => {
        byteCount += chunk.byteLength;
      });

      readableStream.on("end", () => {
        resolve(byteCount);
      });
    });
  }

  countWordsInFile() {
    // A method that counts words in a file
    return new Promise((resolve, reject) => {
      let wordCount = 0;
      let leftover = "";
      const readableStream = this.getReadableStreamWithEncoding();

      readableStream.on("error", (error) => {
        console.log("Error while reading the file!");
        reject(error);
      });

      readableStream.on("data", (chunk) => {
        const combined = leftover + chunk;
        const words = combined.split(/\s+/);
        leftover = words.pop();
        wordCount += words.length;
      });

      readableStream.on("close", () => {
        resolve(wordCount);
      });
    });
  }

  countCharsInFile() {
    // A method that counts chars in a file
    return new Promise((resolve, reject) => {
      const readableStream = this.getReadableStreamWithEncoding();
      let charCount = 0;

      readableStream.on("error", (error) => {
        console.log("Error while reading the file");
        reject(error);
      });

      readableStream.on("data", (chunk) => {
        charCount += chunk.length;
      });

      readableStream.on("close", () => {
        resolve(charCount);
      });
    });
  }
}
