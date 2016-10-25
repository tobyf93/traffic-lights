const nextState = (lights) => {
  let redIDX, nonRedIDX;
  lights = [...lights];

  // Identify red/non-red lights
  if (lights[0].colour === 'RED') {
    redIDX = 0;
    nonRedIDX = 1;
  } else {
    redIDX = 1;
    nonRedIDX = 0;
  }

  // Transition colours
  if (lights[nonRedIDX].colour === 'GREEN') {
    lights[nonRedIDX].colour = 'ORANGE';
  } else {
    lights[nonRedIDX].colour = 'RED';
    lights[redIDX].colour = 'GREEN';
  }

  return lights;
}

module.exports = nextState;
