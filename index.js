const moment = require('moment');
const nextState = require('./lib/trafficLights');

const outputLights = (time, lights) => {
  console.log('TIME:', time.format('h:mm:ss'));
  console.log(lights[0].name, lights[0].colour);
  console.log(lights[1].name, lights[1].colour);
  console.log();
}

const runLights = () => {
  let time = moment().hour(9).minute(0).second(0);
  let timeEnd = moment().hour(9).minute(30).second(0);
  let lights = [
    {
      name: 'NS',
      colour: 'GREEN'
    },
    {
      name: 'EW',
      colour: 'RED'
    }
  ];

  for (let i = 0;; i++) {
    // Include starting state
    if (i === 0) {
      outputLights(time, lights);
    }

    if (i % 2 === 0) {
      time.add(270, 'seconds');
    } else {
      time.add(30, 'seconds');
    }

    if (time.isAfter(timeEnd)) {
      break;
    }

    lights = nextState(lights);
    outputLights(time, lights);
  }
}

runLights();
