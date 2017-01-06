var gpio = require('rpi-gpio');
gpio.setMode(gpio.MODE_BCM);

var pin = 22;

gpio.setup(pin, gpio.DIR_OUT, () => {
  console.log(pin + " has been setup");

  gpio.write(pin, true, () => {
    console.log(pin + " has been launched");
  });

  setTimeout(kill, 2000);
});


function kill() {
  gpio.destroy(()  => {
    console.log(pin + " has been killed");
  });
}
