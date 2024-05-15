/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";



inquirer
    .prompt([
        {
            name:'web',
            message:'enter the website you want to generate qr code for'
        },
    ])
    .then((answer) => {
        const url = answer.web;
        var qr_svg = qr.image(url);
        
        qr_svg.pipe(fs.createWriteStream('qr_img2.png'));
        // var qr_svg = qr.image(url);
        // qr_svg.pipe(fs.createWriteStream("qr_img.png"));


        fs.writeFile("message.txt", url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
          });
          
    })
    // .catch((error) => {
    //     if (error.isTtyError) {
    //         console.log(error);
    //       // Prompt couldn't be rendered in the current environment
    //     } else {
    //       // Something else went wrong
    //     }
    //   });