# WcTool - A Replica of the Unix wc Command

This project is a Node.js implementation of the Unix `wc` (word count) command. It can count the number of bytes, lines, words, and characters in a file or from standard input.

## Features

- Count the number of bytes in a file.
- Count the number of lines in a file.
- Count the number of words in a file.
- Count the number of characters in a file.
- Support reading from standard input if no filename is specified.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/wctool.git
   cd wctool
  
2. Install the dependencies:
npm install

### Usage
You can use the wctool command to count bytes, lines, words, and characters in a file or from standard input.

### Count Bytes

 node cli.js -c -f path/to/your/file.txt

### Count Lines
 node cli.js -l -f path/to/your/file.txt

### Count Words
node cli.js -w -f path/to/your/file.txt

### Count Characters
node cli.js -m -f path/to/your/file.txt

### Read from Standard Input
echo "Hello World" | node cli.js

### Count All Metrics
node cli.js -f path/to/your/file.txt

Or

echo "Hello World" | node cli.js

### Command-Line Options
-c: Outputs the number of bytes in a file.
-l: Outputs the number of lines in a file.
-w: Outputs the number of words in a file.
-m: Outputs the number of characters in a file.
-f: Specifies the input file (optional if reading from standard input).

