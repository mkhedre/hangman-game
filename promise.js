//compare between callack and promise

const getcallack = (callback)=>{
    setTimeout(() => {
        console.log('this is my callack reply',undefined)
    }, 2000);
}
getcallack((err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
const getpromise = ()=>new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('this is my promise resolve')
    }, 2000);
})

const mypromise = getpromise()
mypromise.then((data)=>{
    console.log(data)
} , (err)=>{
    console.log(err)
})