const fetch=require("../node_modules/node-fetch")

function getByVIN(url){
    return new Promise((resolve,reject)=>{
        fetch(url) // Fetch Infomration By VIN
        .then(data=>data.json())
        .then(data=>{
            data=data.Results[0]
            if(data.ErrorCode==0){ // If errorcode is 0, then information found
                let obj={
                    "year":data.ModelYear,
                    'make':data.Make,
                    'model':data.Model
                }
                resolve(obj)
            }else{  // Else Invalid VIN
                resolve("VIN Validation Failed")
            }  
        })
        .catch(error=>{
            reject(error)
        })
    })
}

module.exports=getByVIN