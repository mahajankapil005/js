const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls, cryptography, network related
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    },1000)
}).then(function(){
    console.log("Async task two resolved");
})