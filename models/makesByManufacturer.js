const fetch=require("../node_modules/node-fetch")

function makesByManufacturer(url){
    return new Promise((resolve,reject)=>{
        fetch(url) // Fetch Model Names for a given manufacturer
        .then(data=>data.json())
        .then(data=>{
            let results=data.Results
            let dataStorage=[]
            for(let index in results){
                dataStorage.push(results[index].Model_Name)  // Because we only need model name
            }
            resolve(dataStorage)
        })
        .catch(error=>{
            reject(error)
        })
    })
}

module.exports=makesByManufacturer