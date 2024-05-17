// let internship = false;

// let ourPromise = Promise((resolve, reject)=>(
//     if (internship){
//         resolve('I will try harder');
//     }
//     else(
//         reject('I will work harder')
//     )
// ))



// async function myAkiraChixDream(){
//    try{
//     await ourPromise;
//     console.log('This is my dream');
//     await ourPromise;
//    }
//    catch{
//     console.log('Our dream is not yet successful')
//    }
// }

// myAkiraChixDream();



//one argument resolve and reject
//promise chaining  no use of semi colon continuation   then and catch
//finally works whether as reject or resolved   all take one arguments
//synchronous line by line
const internship = false;
const newPromise = new Promise((resolve,reject)=>{
    if(internship){
        resolve("I made it");
    }else{
        reject("I will try harder")
    }
})
newPromise.then((response)=>{
    console.log({response})
    console.log(`I will continue to work hard`);
})
.catch((error)=>{
    console.log({error})
    console.log(`I will continue applying for jobs`);
})
.finally(()=>{
    console.log(`I will be a software engineer`);
})
console.log({newPromise});
/************************************** */
//assy function always return a promise
//try and catch for assynchronus to handle error
async function  myAkiraChixDream(){
    // console.log(`My Akirachix dream`);
    // await newPromise;
    try{
        console.log(`My Akirachix dream`);
     await newPromise;
    }
    catch{
        console.log(`Our dream is not successful`)
    }
}
myAkiraChixDream();