import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

let newItems = [];
//get method
app.get("/",(req,res) =>{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    let day = today.toLocaleDateString("hi-IN", options);
    res.render("index",{day:day,newListItem:newItems});
})

//post method 
app.post("/",(req,res) =>{
    let newItem = req.body.newItem;
    newItems.push(newItem);
    res.redirect("/")
})



//creating the port 
app.listen(port, () => {
    console.log(`Sever running on port ${port}`);
  });