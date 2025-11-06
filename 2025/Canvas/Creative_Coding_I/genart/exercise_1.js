const canvasSketch = require("canvas-sketch");
const { lerp } = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");
const palettes = require("nice-color-palettes");

const settings = {
    dimensions: [2048, 1024],
};

random.setSeed(random.getRandomSeed());
console.log(random.getSeed());
// random.setSeed( '699473' );
//772587
//772586
//996689
//736142
//699473
//810131
//761166

const sketch = ({ width, height }) => {
    const colorCount = random.rangeFloor(2, 6);
    const palette = random.shuffle(random.pick(palettes)).slice(0, colorCount);
    const margin = width * 0.05;
    const background = 'white';
    createGrid = () => {
        const countY = 6;
        const countX = 6;
        const points = [];
        // const count = 3;
        for (let x = 0; x < countX; x++) {
            for (let y = 0; y < countY; y++) {
                const u =  x / (countX - 1);
                const v =  y / (countY - 1);
                const radius = Math.abs(random.noise2D(u, v)) * 0.1; // Chapter Noise with noise2D
                const px = lerp(margin, width - margin, u);
                const py = lerp(margin, height - margin, v);
                points.push([px, py]);
            }
        }
        return points;
    };

    let grid = createGrid();

    let shapes = [];

    while(grid.length > 2) {
        const pointsToRemove = random.shuffle(grid).slice(0, 2);
        if(pointsToRemove.length < 2) {
            break;
        }
        const color = random.pick(palette);
    
        grid = grid.filter(p => !pointsToRemove.includes(p));
        const [a, b] = pointsToRemove;
    
        shapes.push({
            color,
            path: [
                [a[0], height - margin],
                a,
                b,
                [b[0], height - margin]
            ],
            y: (a[1] + b[1]) / 2
        });
        console.log(height);
    }

    shapes.sort((a, b) => a.y - b.y);

    return ({ context, width, height }) => {
        context.globalAlpha = 1;
        context.fillStyle = background;
        context.fillRect(0, 0, width, height);

        shapes.forEach(({lineWidth, path, color}) => {
            context.beginPath();
            path.forEach(([x, y]) => {
                context.lineTo(x, y);
            })
            context.closePath();

            context.lineWidth = 20;
            context.globalAlpha = 0.85;
            context.fillStyle = color;
            context.fill();

            context.lineJoin = context.lineCap = "round";
            context.strokeStyle = background;
            context.globalAlpha = 1;
            context.stroke();
        });
    };
};

canvasSketch(sketch, settings);
