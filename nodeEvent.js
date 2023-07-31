const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Alarm', () => {
  console.log('Wake up!');
  setTimeout(()=>{
    console.log("Wake up wake up")
  },3000);
});
myEmitter.emit('Alarm');