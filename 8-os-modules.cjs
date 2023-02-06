const os = require('os')

// this function to see the architecture of the computer that you are using 

console.log(os.arch());


// there is also a function to check how much memery is free 
// console.log(`free momory in your system in ${os.freeMem()}`)

// to check how much ram you have in your pc 
let a = Math.pow(1024,3);
console.log(os.totalmem()/a)

console.log(`total free memory is ${os.freemem()}`)

const user = os.userInfo();
console.log(user);


// to check the hostname and platform 

console.log( `the platfom you are using currently is ${os.platform()}`)

console.log( `the hostname you are using currently is ${os.hostname()}`)


// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`);


const currentOs = {
    name: os.type(),
    release: os.release(), 
    totalMem: os.totalmem(),
    freeMem : os.freemem(),
}

console.log( currentOs)