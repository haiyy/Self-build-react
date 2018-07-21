const mock = require("mockjs");
const fs = require("fs");

let arr = [];
for(let i=0; i<46;i++){
    let data = mock.mock({
        "key":"171102-"+i,
        "lei":"直客",
        "name":"@name",
        "email":"@email",
        "age|0-100":13
    })
    arr.push(data);
}

// console.log(arr)
// console.log()
fs.writeFile("list.json",JSON.stringify(arr),err=>{
    if(err){
        console.log(err)
    }
})