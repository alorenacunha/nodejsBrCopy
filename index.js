const EventEmitter = require('events');
class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
const nameEvent = 'usuario:click';
myEmitter.on(nameEvent, (click)=>{
    console.log('user click', click)
})

myEmitter.emit(nameEvent, 'scroll');
myEmitter.emit(nameEvent, 'enter');

let count = 0;
setInterval(()=>{
    myEmitter.emit(nameEvent, 'space ' + (count++))
}, 1000)