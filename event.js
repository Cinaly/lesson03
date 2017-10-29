/**
 * Created by web-01 on 2017/10/29.
 */
const eventEmitter=require('events');

var emitter=new eventEmitter();

var counter=0;
emitter.on('test',()=>{
    console.log('testing...',++counter);
});


emitter.emit('test');
emitter.emit('test');
emitter.emit('test');