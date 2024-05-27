#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import WcTool from "../wcClass.mjs";
import { WcContext } from "../context.mjs";
import { AllCountsStrategy, ByteCountStrategy, CharCountStrategy, LineCountStrategy, WordCountStrategy } from "../strategies.mjs";

const argv = yargs(hideBin(process.argv))
  .usage("This is a replica of the unix wc tool")
  .option("c", {
    describe: "Outputs the number of bytes in a file",
    type: "string",
  })
  .option("l", {
    describe: "Outputs the number of lines in a file",
    type: "string",
  })
  .option("w", {
    describe: "Outputs the number of words in a file",
    type: "string",
  })
  .option("m", {
    describe: "Outputs the number of characters in a file",
    type: "string",
  })
  .option("f", {
    describe: "The input file",
    type: "string",
  })
  .help().argv;

const wcTool = new WcTool(argv.f);

async function res() {
  
    const wcContext = new WcContext()
    const hasCountingOptions = argv.c || argv.l || argv.w || argv.m;


  if (argv.hasOwnProperty("c")) {
    wcContext.setStrategy(new ByteCountStrategy())
  }

  else if (argv.hasOwnProperty("l")) {
    wcContext.setStrategy(new LineCountStrategy())
  }

  else if (argv.hasOwnProperty("w")) {
    wcContext.setStrategy(new WordCountStrategy())

  } else if (argv.hasOwnProperty("m")) {
    wcContext.setStrategy(new CharCountStrategy())

  } else if (!hasCountingOptions) {
    wcContext.setStrategy(new AllCountsStrategy())
  }

  await wcContext.executeStrategy(wcTool);
}

res();
