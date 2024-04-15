import { argv } from 'node:process';

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

//node asciiArt.js "This is the string to turn tino ASCII art"
