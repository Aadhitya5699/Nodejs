const fs=require('fs');
fs.readFile('insertdata.php','utf-8',(err,data)=>{
    console.log(err,data)
})