class Vec{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  plus(vec,dt){
    return new Vec(this.x+(vec.x*dt),this.y+(vec.y*dt))
  }
  scale(factor){
    return new Vec(this.x*factor,this.y*factor)
  }
}

var cutCircle = function(context, x, y, radius){
    context.globalCompositeOperation = 'destination-out'
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI*2, true);
    context.fill();
    context.globalCompositeOperation = 'source-over'
}


var maxFPS = 60000,
    delta = 0,
    timestep = 1000 / 55,
    fps = 0,
    framesThisSecond = 0,
    lastFpsUpdate = 0,
    lastFrameTimeMs = 0;

function panic() {
    delta = 0;
}
function dist(x1, y1, x2, y2){
  return (Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)))
}

function textFont(x){
  ctx.font = `${x}px Verdana, Geneva, sans-serif`;
}

function circle(x, y, s){
  ctx.beginPath();
  ctx.arc(x, y, s, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
}


function drawPolygon(
  centerX,
  centerY,
  sideCount,
  size,
  strokeWidth,
  strokeColor,
  fillColor,
  rotationDegrees
) {
  var radians = (rotationDegrees * Math.PI) / 180;
  ctx.translate(centerX, centerY);
  ctx.rotate(radians);
  ctx.beginPath();
  ctx.moveTo(size * Math.cos(0), size * Math.sin(0));
  for (var i = 1; i <= sideCount; i += 1) {
    ctx.lineTo(
      size * Math.cos((i * 2 * Math.PI) / sideCount),
      size * Math.sin((i * 2 * Math.PI) / sideCount)
    );
  }
  ctx.closePath();
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = strokeColor;
  ctx.lineWidth = strokeWidth;
  if (strokeWidth !== 0) {
    ctx.stroke();
  }
  ctx.fill();
  ctx.rotate(-radians);
  ctx.translate(-centerX, -centerY);
}
