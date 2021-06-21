const express=require("express")
const router=express.Router()

const getAllManufacturer=require("../models/getAllManufacturer")
const makesByManufacturer=require("../models/makesByManufacturer")
const getByVIN=require("../models/getByVIN")

// API to get All Manufacturer
router.get("/",(req,res)=>{
    const url="https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json"
    getAllManufacturer(url).then(data=>{
        res.status(200).send(data)
    }).catch(error=>{
        res.status(400).send(`Request can not be fulfilled at this moment: ${error}`)
    })
})

// API to get Model by manufacturer
router.get("/make_name/",(req,res)=>{
    const make_name=req.query.manufacturer
    const url=`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${make_name}?format=json`
    makesByManufacturer(url).then(data=>{
        console.log("HEllo")
        res.status(200).send(data)
    }).catch(error=>{
        res.send(400).send("Data can not be retrived")
    })
})

// API to Get the year, make, and model of a vehicle given its VIN 
router.get("/VIN/",(req,res)=>{
    const vin=req.query.VIN
    const url=`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`
    getByVIN(url)
    .then(data=>{
        res.send(data)
    }).catch(error=>{
        res.status(400).send("The requested resource is not available")
    })
})



module.exports=router