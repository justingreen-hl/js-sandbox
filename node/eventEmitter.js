import EventEmitter from 'node:events';

const eventEmitter = new EventEmitter();

eventEmitter.on('start', (start, end) => {
  console.log(`started ${start} to ${end}`);
});

eventEmitter.emit('start', 7, 11);