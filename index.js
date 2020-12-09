const express = require('express'),
    app = express()
    app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index1.html");
})


app.listen(3000,()=>{
    console.log("App Started");
})