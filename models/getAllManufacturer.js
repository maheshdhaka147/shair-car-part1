const fetch=require("../node_modules/node-fetch")

function getAllManufacturer(url){
    return new Promise((superResolve,superReject)=>{
        j=0
        dataStorage=[]
        promiseArray=[]
        while(j<201){
            j=j+1
            // Get Manufacturer information page by page
            promiseArray.push(new Promise((resolve,reject)=>{
                fetch(`${url}&page=${j}`)
                .then(data=>data.json())
                .then(data=>{
                    let results=data.Results
                    let dataStorage=[]
                    for(let index in results){
                        dataStorage.push(results[index].Mfr_Name)  // Only Manufacturer Name is required
                    }
                    resolve(dataStorage)
                })
                .catch(error=>{
                    reject(error)
                })
            }))
        }

        Promise.all(promiseArray) // Once all manufacturer information is available
        .then(values=>{
            let storageArray=[]
            for(let index in values){
                for(let obj in values[index]){
                    storageArray.push(values[index][obj])
                }
            }
            return storageArray
        }).then(storageArray=>{
            superResolve(storageArray) // Send manufacturers informatioion back
        }).catch(error=>{
            superReject("The resource can not served at the moment")
        })

    })
}

module.exports=getAllManufacturer