function d3Example() {
    
 const data = [10, 20, 30, 40, 50];
    
console.log('D3 Example');
const body = document.body;
const html = `
    <svg id="container" width="800" height="600">
    <rect />
    <rect />
    <rect />
    <rect />
    <rect />
    </svg>
`;

body.innerHTML = html;



const svg = d3.select("#container");
const select = svg.select("rect");
const selectAll = svg.selectAll("rect");

console.log('svg:', svg);
// console.log('select:', select);
// console.log('selectAll:', selectAll);

// return svg
// return select
// return selectAll
// return svg.select("rect").datum(data);
// console.log('data:',  svg.selectAll("rect").data(data));
// return svg.selectAll("rect").data(data).enter().append("rect");
return svg.selectAll("rect").data(data)
    .attr("x", (d, i) => i * 55)
    .attr("y", d => 600 - d * 10)
    .attr("width", 50)
    .attr("height", d => d * 10)
    .attr("fill", "teal");


}

d3Example();



function exampleFM() {

 const data = [45, 67, 96, 84, 41];;
    
console.log('D3 Example');
const body = document.body;
const html = `
    <svg id="container" width="800" height="600">
    <rect />
    <rect />
    <rect />
    <rect />
    <rect />
    </svg>
`;

body.innerHTML = html;
const rectWidth = 50;

const svg = d3.select("#container").selectAll("rect").data(data)
// calculate x-position based on its index
    .attr('x', (d, i) => i * rectWidth)
    // set height based on the bound datum
    .attr('height', d => d)
    // rest of attributes are constant values
    .attr('width', rectWidth)
    .attr('stroke-width', 3)
    .attr('stroke-dasharray', '5 5')
    .attr('stroke', 'plum')
    .attr('fill', 'pink')

    return svg;

}
// exampleFM();



function exampleCopilot() {

    const body = document.body;
    const barData = [45, 67, 96, 84, 41];

    const rectWidth = 50;

    const svg = `
    <svg width=${rectWidth * barData.length} height="200" style="border: 1px dashed pink;">
        ${barData.map((d, i) => `<rect x=${i * rectWidth} y=${200 - d} width=${rectWidth - 5} height=${d} fill="pink" />`)}
    </svg>
    `;

    body.innerHTML = svg;

}

// exampleCopilot();

