import express, { json, static } from "express";
const PORT=3000;
const app = express();
app.use(json());
app.use(static(__dirname+"public"));

app.get('/heroes',(req,res)=>{
    res.send("require all tasks");

});

app.listen(3000,()=>{
    console.log("example app on listening on port 3000");
});

app.get('/heroes/:id',(req,res)=>{
    res.send('Return a Task with id ${req.params.id}');
});
