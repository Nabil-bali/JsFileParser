const fs = require('fs');

const inputFile = './input.txt';
const outputFile = './output.txt';


let text = fs.readFileSync(inputFile, 'utf8');

let formattedText = (text.split('\n')).map(line => {

    /** WRITE YOUR MODIFICATION RULES HERE */

    line = line.replace('\r', '').split(' - ');
    line = line[1].charAt(0).toUpperCase() + line[1].slice(1) + " " + line[0].toLowerCase() + ".";

    /** ...UNTIL HERE */

    return line + '\n'
}).join('').slice(0, -1)

fs.writeFile(outputFile, formattedText, function (err) {
    if (err) { console.log("Error :" + err) }
    else { console.log("File updated") };
})