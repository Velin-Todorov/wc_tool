export class ByteCountStrategy {
  async execute(wcTool) {
    const res = await wcTool.countBytesInFile();
    console.log("Bytes in text:", res);
  }
}

export class LineCountStrategy {
  async execute(wcTool) {
    const res = await wcTool.countLinesInFile();
    console.log("Lines in text:", res);
    return;
  }
}

export class WordCountStrategy {
  async execute(wcTool) {
    const res = await wcTool.countWordsInFile();
    console.log("Words in text:", res);
    return;
  }
}

export class CharCountStrategy {
  async execute(wcTool) {
    const res = await wcTool.countCharsInFile();
    console.log("Chars in text:", res);
    return;
  }
}

export class AllCountsStrategy {
  async execute(wcTool) {
    const res = await Promise.all([
      wcTool.countBytesInFile(),
      wcTool.countCharsInFile(),
      wcTool.countLinesInFile(),
      wcTool.countWordsInFile(),
    ]);
    console.log(
      `Bytes in text: ${res[0]}\nChars in text: ${res[1]}\nLines in text: ${res[2]}\nWords in text: ${res[3]}`
    );
    return;
  }
  
}
