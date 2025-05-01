function timer(duration,callback){
    setTimeout(()=>{
        callback(` Timer of ${duration} ms finished`)
    },duration)
}
function t(message){
    console.log(message)
}
timer(2000,t)