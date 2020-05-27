const EventEmitter = require('events');
class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
const nameEvent = 'usuario:click';
myEmitter.on(nameEvent, (click)=>{
    console.log('user click', click)
})
const stdin = process.openStdin();
stdin.addListener('data', (value)=>{
    console.log(`You write: ${value.toString().trim()}`)
})