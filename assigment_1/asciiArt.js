import { argv } from 'node:process';

// print process.argv
//takes in argurment from the command line
argv.forEach((val, index) => {

  //print what the user gave you
  console.log( 

    //use the figlet package to print it in a funny font
    //funny font is ghsot
    figlet.textSync(`${index}: ${val}`, {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );
});

//node asciiArt.js "This is the string to turn tino ASCII art"

