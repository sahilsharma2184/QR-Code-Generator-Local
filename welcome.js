/*In the package.json file, make sure to have 'type=module' else the import won't work and 'main=welcome.js' or whatever filename you use for the below code*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
    .prompt([
        {//JavaScript object

            "message":"Type in your URL:",
             name:"URL",
        },
    ])
    .then((answers)=>{
        const url=answers.URL;
        var qr_svg=qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));
        fs.writeFile("URL.txt",url,(err)=>
        {
            if(err) throw err;
            console.log("File has been saved");
        });
        console.log(url);
    })
    .catch((error)=>{
        if (error.isTtyError) {
        }
        else{

        }

    });
