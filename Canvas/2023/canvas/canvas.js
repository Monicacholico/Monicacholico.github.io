
window.onload = function() { 
    
    // let canvas = document.getElementById("canvas");
    // let ctx = canvas.getContext("2d");
    
    // let width = canvas.width;
    // let height = canvas.height;
    
    //Blue rectangle
    // ctx.fillStyle = "blue";
    // ctx.fillRect(0,40,30,70);
    
    //Yellow rectangle
    // ctx.fillStyle = "yellow";
    // ctx.fillRect(30,40,30,70);
    
    // ctx.beginPath();// reset the context state
    // ctx.strokeStyle = "crimson"; // set the color of the line
    // ctx.lineWidth = 5; // set the width of the line
    // ctx.moveTo(30,70); // move to (x,y) -> starting point of line
    // ctx.lineTo(130,70); // line(x,y) -> end point of line
    // ctx.stroke(); // draw the line


    let canvascl = document.getElementById("canvas-complex-lines");
    let ctxcl = canvascl.getContext("2d");
    ctxcl.strokeStyle = "gray";
    
    let widthcl = canvascl.width;
    let heightcl = canvascl.height;


    ctxcl.beginPath();
    ctxcl.moveTo(30, 30);
    ctxcl.lineTo(80, 80);
    ctxcl.lineTo(130, 30);
    ctxcl.lineTo(180, 80);
    ctxcl.lineTo(230, 30);
    ctxcl.stroke();

    // ctxcl.beginPath();
    // ctxcl.moveTo(80, 80);
    // ctxcl.lineTo(130, 30);
    // ctxcl.stroke();
    
    // ctxcl.beginPath();
    // ctxcl.moveTo(130, 30);
    // ctxcl.lineTo(180, 80);
    // ctxcl.stroke();
    
    // ctxcl.beginPath();
    // ctxcl.moveTo(180, 80);
    // ctxcl.lineTo(230, 30);
    // ctxcl.stroke();



}
