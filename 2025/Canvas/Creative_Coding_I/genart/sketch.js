const canvasSketch = require('canvas-sketch');

// const settings = {
//   // dimensions: [ 2048, 2048 ]
//   dimensions: 'A4',
//   orientation: 'landscape',
//   units: 'cm',
//   pixelsPerInch: 300,
// };

// const sketch = () => {
//   return ({ context, width, height }) => {
//     console.log(width, height);
//     context.fillStyle = 'hotpink';
//     context.fillRect(0, 0, width, height);

//     context.beginPath();
//     // context.arc(width / 2, height / 2, width * 0.2, 0, Math.PI , false);
//     context.arc(width / 2, height / 2, 2, 0, Math.PI , false);
//     context.fillStyle = 'red';
//     context.fill();
//     context.lineWidth = width * 0.01;
//     context.strokeStyle = 'pink';
//     context.stroke();
//   };
// };

///////////////////////// New 
// NEW PROJECT MARGIN 09.24.25

// MARGIN
const {lerp} = require('canvas-sketch-util/math');
// RANDOM
const random = require('canvas-sketch-util/random');
// PALETTES
const palettes = require('nice-color-palettes');
// NOiSE
// const noise = require('canvas-sketch-util/noise');
// frequency of the noise signal
const frequency = 5.0;
// value is in  -1 .. 1 range
// const v = noise2D(x, y);
// const v = noise2D(x * frequency, y * frequency);
//map to 0..1 range
// const n = v * 0.5 + 0.5;
// turn into a percentage;
// const L = Math.floor( n * 100);
// get color value
// const hsl = `hsl(0, 0%, ${L}%)`;
// const noise = require('canvas-sketch-util/noise');


const settings = {
  suffix: random.getSeed(),
  dimensions: [2048, 2048 ]
}

random.setSeed(random.getRandomSeed());
console.log(random.getSeed());


const sketch = () => {
  const colorCount = random.rangeFloor(2, 6);
  const palette = random.shuffle(random.pick(palettes))
  .slice(0, colorCount); // To pick some of the colors from the palette
  // const palette = random.pick(palettes); // Chapter Color Palettes
  // console.log(palette);  
  const createGrid = () => {
    const points = [];
    const count = 30;
    for(let x = 0; x < count; x++) {
      for(let y = 0; y < count; y++) {
        const u = count <= 1 ?  0.5 : x / (count - 1);
        const v =count <= 1 ? 0.5 : y / (count - 1);
        const radius = Math.abs(random.noise2D(u, v)) * 0.1; // Chapter Noise with noise2D
        // points.push([u, v]); // Chapter Adding Randomness
        points.push({ // Radius & Organic Randomness
          // radius: random.value() * 0.01, // Uniform distribution
          color: random.pick(palette),
          // radius: Math.abs(0.05 + random.gaussian()) * 0.01, // Organic distribution of numbers, negative and positive numbers
          radius,// utlizing noise2D with variable above
          rotation: random.noise2D(u, v),
          position: [u, v],
        })
      }
    }
    return points;
  };

  // random.setSeed(512);
  const points = createGrid().filter(() => random.value() > 0.05);
  // const points = createGrid().filter(() => Math.random() > 0.5);
  // console.log(points);
  const margin = 400;

  return({context, width, height}) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    points.forEach((data) => {
      const {
        position,
        radius, 
        color,
        rotation
      } = data;
      const [u, v] = position;
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      // Circles
      // context.beginPath();
      // context.arc(x, y, radius * width, 0, Math.PI * 2, false);
      // context.strokeStyle = 'pink';
      // context.lineWidth = 10;
      // context.fillStyle = color;
      // context.fill();
      // context.stroke();

      // Drawing with Text Characters chapter
      context.save();
      context.fillStyle = color; // ONLY THIS FOR IDEA OF PORTRAIT
      context.font = `${radius * width}px "Arial"`; // font size ONLY THIS FOR. IDEA OF PORTRAIT
      context.translate(x, y);
      context.rotate(rotation);  
      context.fillText('*', 0, 0); // 
      // context.fillText('=,', 0, 0); // ONLY THIS FOR IDEA OF PORTRAIT
      // context.rotate(-0.4);

      context.restore();
    });
  
  }

};


canvasSketch(sketch, settings);

