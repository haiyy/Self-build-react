let querystring={
    stringify(obj){
        let str="";
        for(let i in obj){
            str+=i+"="+obj[i]+"&"
        }
        return str.slice(0,-1);
    },
    parse(str){
        let arr = str.split("&");
        let obj = {};
        for(let i = 0; i < arr.length; i++){
            let t = arr[i].split("=");
            obj[t[0]]=t[1]
        }
        return obj;
    }
}
let domain="http://localhost:9000";
 export default {
     get(url,params){
         let s = querystring.stringify(params);
         if(url.indexOf("?") > -1){
             url=url+"&"+s
         }else{
             url=url+"?"+s
         }
         return new Promise((resolve,reject)=>{
             fetch(domain+url,{
                 headers:{
                     "content-type":"application/json"
                 }
             })
             .then(res=>res.json())
             .then(res=>{
                 resolve(res)
             })
         })
     },
     post(url,params){
         return new Promise((resolve,reject)=>{
            fetch(domain+url, {
                method:"post",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(params)
            })
            .then(res=>res.json())
            .then(res=>{
                resolve(res)
            })
        })
     }
 }