const gpio = require('rpi-gpio');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();


gpio.setMode(gpio.MODE_BCM);
gpio.setup(21, gpio.DIR_OUT, readInput);

emitter.on('event', () => {
  write();
});

emitter.emit('event');


function readInput() {
    gpio.read(21, (err, value) => {
        console.log('The value is ' + value);
    });
}

function destroy() {
    gpio.destroy( () => {
      console.log('Pin stop');
    });
}

function write() {
    gpio.write(21, true, (err) => {
      if (err) console.log(err);
      else console.log("Pin start");
    });
};
