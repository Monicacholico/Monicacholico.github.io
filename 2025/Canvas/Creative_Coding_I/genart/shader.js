const canvasSketch = require('canvas-sketch');
const createShader = require('canvas-sketch-util/shader');
const glsl = require('glslify');

// Setup our sketch
const settings = {
  context: 'webgl',
  animate: true
};

// Your glsl code
const frag = glsl(/* glsl */`
  precision highp float;

  uniform float time;
  uniform float aspect;
  varying vec2 vUv;

  #pragma glslify: noise = require('glsl-noise/simplex/3d');// this is for 3d noise
  #pragma glslify: hsl2rgb = require('glsl-hsl2rgb');

  // void main () { /// sunset colors

  //   // vec3 color = 0.5 + 0.5 * cos(time + vUv.xyx + vec3(0.0, 2.0, 4.0));
  //   // gl_FragColor = vec4(color, 1.0);

  //   vec3 colorA = sin(time) + vec3(1.0, 0.0, 0.0);
  //   vec3 colorB = vec3(25.0, 1.0, 0.0);

  //     vec2 center = vUv - 0.5;
  //     center.x *= aspect;
  //   float dist = length(center);

  //   float alpha = smoothstep(0.25075, 0.25, dist);
  //   // float alpha = smoothstep(0.5, 0.25, dist);

  //   // // vec3 color = mix(colorA, colorB, vUv.y);
  //   // // vec3 color = mix(colorA, colorB, vUv.x + vUv.y);
  //   vec3 color = mix(colorA, colorB, vUv.y + vUv.x * sin(time) * 0.25);
  //   gl_FragColor = vec4(color, dist > 0.5 ? 0.0 : alpha);

  // }
  void main () { /// noise based colors

    // vec3 color = 0.5 + 0.5 * cos(time + vUv.xyx + vec3(0.0, 2.0, 4.0));
    // gl_FragColor = vec4(color, 1.0);

    // vec3 colorA = sin(time) + vec3(1.0, 0.0, 0.0);
    // vec3 colorB = vec3(25.0, 1.0, 0.0);

      vec2 center = vUv - 0.5;
      center.x *= aspect;
    float dist = length(center);
    // float dist = length(center) + noise(vec3(vUv * 3.0, time * 0.25)) * 0.25;

    // float alpha = smoothstep(0.25075, 0.25, dist);
    float alpha = smoothstep(0.5, 0.25, dist);

    // // vec3 color = mix(colorA, colorB, vUv.y);
    // // vec3 color = mix(colorA, colorB, vUv.x + vUv.y);
    // vec3 color = mix(colorA, colorB, vUv.y + vUv.x * sin(time) * 0.25);
    // gl_FragColor = vec4(color, dist > 0.5 ? 0.0 : alpha);

float n = noise(vec3(center, time)); // this is for noise based on uv and time

vec3 color = hsl2rgb(
  0.6 + n * 0.2,
  0.3 ,
  0.5
);
gl_FragColor = vec4(vec3(n), 1.0); // this is for noise based color
gl_FragColor = vec4(color, alpha); // this is for noise modulated color

  }
`);

// Your sketch, which simply returns the shader
const sketch = ({ gl }) => {
  // Create the shader and return it
  return createShader({
    // clearColor: 'steelblue',
    clearColor: 'white',
    // Pass along WebGL context
    gl,
    // Specify fragment and/or vertex shader strings
    frag,
    // Specify additional uniforms to pass down to the shaders
    uniforms: {
      // Expose props from canvas-sketch
      time: ({ time }) => time,
      aspect: ({ width, height }) => width / height
    }
  });
};

canvasSketch(sketch, settings);
