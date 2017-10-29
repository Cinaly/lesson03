/**
 * Created by web-01 on 2017/10/29.
 */
const readline=require('readline');
var reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
reader.question('input you name:',(line)=>{
    console.log(line);
    reader.close();
   // process.exit(0);
    process.stdin.destroy();
});

/*
* readline read current file,output?
* */
const fs=require('fs');

var reader1=readline.createInterface({
    input:fs.createReadStream('./readline.js'),
    terminal:false
}).on('line',(line)=>{
    console.log("line:"+line);
});


