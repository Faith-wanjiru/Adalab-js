function greet(userName, callback){
    console.log(`hello there ${userName}`);
    callback();
};
function intro(){
    console.log(`This is me`);
};
greet('Hellen', intro);
// timeout
setTimeout(intro, 2000);
// interval
setInterval(function(){
    console.log(`this is an interval`);
},3000);