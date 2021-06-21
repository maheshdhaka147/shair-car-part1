const express=require("express")
const vehicles=require("./routes/vehicle")

const app=express()
const port=process.env.PORT || 8080


app.use(express.static("static"))
app.use("/api/v1/",vehicles)


app.get("/",(req,res)=>{
    res.send("Welcome to the home page")
})

app.all("*",(req,res)=>{
    res.send("The requested resource is not available")
})


app.listen(port,()=>{
    console.log(`The server is listening at port ${port}`)
})