const eventEmitter=require('events');
const emitter=new eventEmitter();
console.log('');
emitter.on('logmessage',function(obj){
    console.log('I am listening',obj,obj.name);
});
emitter.emit('logmessage',{'name': 'prabal'});