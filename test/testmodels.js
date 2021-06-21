const assert=require("../node_modules/chai").assert

const getAllManufacturer=require("../models/getAllManufacturer")
const makesByManufacturer=require("../models/makesByManufacturer")
const getByVIN=require("../models/getByVIN")


// Test GetAllManufacturer Module
describe('GetAllManufacturer',()=>{
    const url="https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json"
    it('Should contain: Toyota, Honda',()=>{
        getAllManufacturer(url).then(data=>{
            expect(data).to.include.members(['Toyota', 'Honda'])
        })
    })
})

// Test MakeByManufacturer Module
describe('MakeByManufacturer',()=>{
    const url=`https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/toyota?format=json`
    it('Should contain: Corona and PRIUS',()=>{
        makesByManufacturer(url).then(data=>{
            expect(data).to.include.members(['Corona', 'PRIUS'])
        })
    })
})

// Test GetByVin Module
describe('GetByVin',()=>{
    const url=`https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/3N1AB6AP7BL729215?format=json`
    it('Should contains: 2011 Nissan Sentra',()=>{
        getByVIN(url).then(data=>{
            values=Object.values(data)
            expect(values).to.include.members(["2011","NISSAN","Sentra"])
        })
    })
})