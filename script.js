const canvas = document.getElementById("canvas")
//document.body.appendChild(canvas)
const ctx = canvas.getContext("2d")
var scale;
var mouseX = 1;
var mouseY = 1;
var winX = 0;
var winY = 0;
var leftBorder = 0;
var topBorder = 0;
var windowWidth = 0;
var windowHeight = 0;

var life = 0;

var mode = "Extreme";

var mouseMove = false;
var mouseLock = false;

var clickLock = false;
/*
window.location.replace("https://www.youtube.com/watch?v=oHg5SJYRHA0");
*/
var spawnPhaseBruh = 0;

var cs = 1;
var clicked = false;

var spawnPhaseTime = 0;

var playerX = 800;
var playerY = 450;

var survived = 0;
var time = 0;

var enemies = [new sniper(50, 50, 30), new sniper(1600-50, 900-50, 30), new sniper(50, 900-50, 30), new sniper(1600-50, 50, 30)];

var homePage = [];
for (var i = 15; i--; i>0){
  homePage.push(new enemy1(15, 2));
}
for (var i = 15; i--; i>0){
  homePage.push(new enemy1(15, 6));
}
for (var i = 15; i--; i>0){
  homePage.push(new enemy1(15, 10));
}
for (var i = 15; i--; i>0){
  homePage.push(new enemy1(15, 14));
}

var spawnPhase = 0;

const controller = new Controller()





function resize(){ 
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  scale = window.innerWidth/canvas.width;
  if(window.innerHeight/canvas.height < window.innerWidth/canvas.width){
    scale = window.innerHeight/canvas.height;
  }
  leftBorder = windowWidth-canvas.width/2;
  topBorder = windowHeight-canvas.height/2;
  canvas.style.transform ="scale(" + scale +")";
  canvas.style.left = 1/2 * (windowWidth-canvas.width) + "px";
  canvas.style.top = 1/2 * (windowHeight-canvas.height) +"px";
  ctx.fillStyle = "rgb(255,0,0)"
}
window.onload = function(){
window.addEventListener("resize",resize)
canvas.addEventListener('mousemove', e => {
  mouseX = Math.round(e.pageX/scale - leftBorder/scale);
  mouseY = Math.round(e.pageY/scale - topBorder/scale);
});
canvas.addEventListener('mousedown', e => {
  if (clickLock === false){
  clicked = true;
  clickLock = true;
  }
  if (cs === 2 && !mouseLock){
  mouseMove = !mouseMove;
  mouseLock = true;
  }

});
canvas.addEventListener('mouseup', e => {
  clicked = false;
  mouseLock = false;
  clickLock = false;
});

resize();
}



function menu(dt){
  ctx.textAlign = "center";
  ctx.globalCompositeOperation = "source-over";
  winX = canvas.width;
  winY = canvas.height;

  for (var i of homePage){
    i.update(dt);
    if (i.delete === 1){
      homePage.splice(homePage.indexOf(i), 1);
    }
  }

  ctx.clearRect(0, 0, winX, winY)
  ctx.fillStyle = "rgb(100, 100, 100)";
  ctx.fillRect(0, 0, winX, winY);

  ctx.fillStyle = "rgb(100, 0, 0)";
  textFont(100);
  ctx.fillText("Dodge Them", 800-10+Math.random()*20, 200-10+Math.random()*20);

  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(350+5, 250+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 350 || mouseY < 250 || mouseX > 350+300 || mouseY > 250+100){
  ctx.fillRect(350-5, 250-5, 300, 100)
    ctx.fillStyle = "rgb(237, 194, 66)";
  textFont(50);
  ctx.fillText("Practice", 500, 312)
  }
  else{
  ctx.fillRect(350,250, 300, 100)
    ctx.fillStyle = "rgb(237, 194, 66)";
  textFont(50);
  ctx.fillText("Practice", 505, 317)
  if (clicked === true){
    cs = 2;
    mode = "Practice";
    life = 20000;
  }
  }


  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(350+5, 350+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 350 || mouseY < 350 || mouseX > 350+300 || mouseY > 350+100){
  ctx.fillRect(350-5, 350-5, 300, 100)
    ctx.fillStyle = "rgb(237, 100, 100)";
  textFont(50);
  ctx.fillText("Practice", 500, 412)
  }
  else{
  ctx.fillRect(350,350, 300, 100)
    ctx.fillStyle = "rgb(237, 100, 100)";
  textFont(50);
  ctx.fillText("Practice", 505, 417)
  if (clicked === true){
    cs = 2;
    mode = "Practice Hard";
    life = 20000;
    enemies.push(new sniper2(50, 450, 30))
    enemies.push(new sniper2(1600-50, 450, 30))
    enemies.push(new sniper2(800, 50, 30))
    enemies.push(new sniper2(800, 900-50, 30))
    
    
  }
  }


  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(350+5, 450+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 350 || mouseY < 450 || mouseX > 350+300 || mouseY > 450+100){
  ctx.fillRect(350-5, 450-5, 300, 100)
    ctx.fillStyle = "rgb(136, 44, 138)";
  textFont(50);
  ctx.fillText("Practice", 500, 512)
  }
  else{
  ctx.fillRect(350,450, 300, 100)
    ctx.fillStyle = "rgb(136, 44, 138)";
  textFont(50);
  ctx.fillText("Practice", 505, 517)
  if (clicked === true){
    cs = 2;
    mode = "Practice Insane";
    life = 20000;
    enemies.push(new sniper2(50, 450, 30))
    enemies.push(new sniper2(1600-50, 450, 30))
    enemies.push(new sniper2(800, 50, 30))
    enemies.push(new sniper2(800, 900-50, 30))
    enemies.push(new sniper3(800, 450, 80))
    playerX = 1200;
    playerY = (450+900)/2;
  }
  }

  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(350+5, 550+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 350 || mouseY < 550 || mouseX > 350+300 || mouseY > 550+100){
  ctx.fillRect(350-5, 550-5, 300, 100)
    ctx.fillStyle = "rgba(44, 108, 138)";
  textFont(50);
  ctx.fillText("Practice", 500, 612)
  }
  else{
  ctx.fillRect(350, 550, 300, 100)
    ctx.fillStyle = "rgba(44, 108, 138)";
  textFont(50);
  ctx.fillText("Practice", 505, 617)
  if (clicked === true){
    cs = 2;
    mode = "Practice Unreal";
    life = 20067;
    enemies.push(new sniper2(50, 450, 30))
    enemies.push(new sniper2(1600-50, 450, 30))
    enemies.push(new sniper2(800, 50, 30))
    enemies.push(new sniper2(800, 900-50, 30))
    enemies.push(new sniper3(800, 450, 80))
    enemies.push(new sniper4(40, 40, 25))
    enemies.push(new sniper4(1560, 40, 25))
    enemies.push(new sniper4(1560, 860, 25))
    enemies.push(new sniper4(40, 860, 25))
    
    playerX = 1200;
    playerY = (450+900)/2;
  }
  }




  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(650+5, 250+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 650 || mouseY < 250 || mouseX > 650+300 || mouseY > 250+100){
  ctx.fillRect(650-5, 250-5, 300, 100)
    ctx.fillStyle = "rgb(196, 156, 35)";
  textFont(50);
  ctx.fillText("Normal", 800, 312)
  }
  else{
  ctx.fillRect(650,250, 300, 100)
    ctx.fillStyle = "rgb(196, 156, 35)";
  textFont(50);
  ctx.fillText("Normal", 805, 317)
  if (clicked === true){
    cs = 2;
    mode = "Normal";
    life = 1000;
  }
  }


 ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(650+5, 350+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 650 || mouseY < 350 || mouseX > 650+300 || mouseY > 350+100){
  ctx.fillRect(650-5, 350-5, 300, 100)
    ctx.fillStyle = "rgb(209, 56, 56)";
  textFont(50);
  ctx.fillText("Normal", 800, 412)
  }
  else{
  ctx.fillRect(650,350, 300, 100)
    ctx.fillStyle = "rgb(209, 56, 56)";
  textFont(50);
  ctx.fillText("Normal", 805, 417)
  if (clicked === true){
    cs = 2;
    mode = "Normal Hard";
    life = 1000;
    enemies.push(new sniper2(50, 450, 30))
    enemies.push(new sniper2(1600-50, 450, 30))
    enemies.push(new sniper2(800, 50, 30))
    enemies.push(new sniper2(800, 900-50, 30))
    
  }
  }

 ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(650+5, 450+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 650 || mouseY < 450 || mouseX > 650+300 || mouseY > 450+100){
  ctx.fillRect(650-5, 450-5, 300, 100)
    ctx.fillStyle = "rgb(110, 23, 113)";
  textFont(50);
  ctx.fillText("Normal", 800, 512)
  }
  else{
  ctx.fillRect(650,450, 300, 100)
    ctx.fillStyle = "rgb(110, 23, 113)";
  textFont(50);
  ctx.fillText("Normal", 805, 517)
  if (clicked === true){
    cs = 2;
    mode = "Normal Insane";
    life = 1000;
    enemies.push(new sniper2(50, 450, 30))
    enemies.push(new sniper2(1600-50, 450, 30))
    enemies.push(new sniper2(800, 50, 30))
    enemies.push(new sniper2(800, 900-50, 30))
    enemies.push(new sniper3(800, 450, 80))
    playerX = 1200;
    playerY = (450+900)/2;
  }
  }
 ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(650+5, 550+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 650 || mouseY < 550 || mouseX > 650+300 || mouseY > 550+100){
  ctx.fillRect(650-5, 550-5, 300, 100)
    ctx.fillStyle = "rgb(23, 84, 113)";
  textFont(50);
  ctx.fillText("Normal", 800, 612)
  }
  else{
  ctx.fillRect(650,550, 300, 100)
    ctx.fillStyle = "rgb(23, 84, 113)";
  textFont(50);
  ctx.fillText("Normal", 805, 617)
  if (clicked === true){
    cs = 2;
    mode = "Normal Unreal";
    life = 1000;
    enemies.push(new sniper2(50, 450, 30))
    enemies.push(new sniper2(1600-50, 450, 30))
    enemies.push(new sniper2(800, 50, 30))
    enemies.push(new sniper2(800, 900-50, 30))
    enemies.push(new sniper3(800, 450, 80))
    enemies.push(new sniper4(40, 40, 25))
    enemies.push(new sniper4(1560, 40, 25))
    enemies.push(new sniper4(1560, 860, 25))
    enemies.push(new sniper4(40, 860, 25))
    playerX = 1200;
    playerY = (450+900)/2;
  }
  }




ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(950+5, 250+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 950 || mouseY < 250 || mouseX > 950+300 || mouseY > 250+100){
  ctx.fillRect(950-5, 250-5, 300, 100)
    ctx.fillStyle = "rgb(140, 108, 11)";
  textFont(50);
  ctx.fillText("Extreme", 1100, 312)
  }
  else{
  ctx.fillRect(950,250, 300, 100)
    ctx.fillStyle = "rgb(140, 108, 11)";
  textFont(50);
  ctx.fillText("Extreme", 1105, 317)
  if (clicked === true){
    cs = 2;
    mode = "Extreme";
    life = 1;
  }
  }

  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(950+5, 350+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 950 || mouseY < 350 || mouseX > 950+300 || mouseY > 350+100){
  ctx.fillRect(950-5, 350-5, 300, 100)
    ctx.fillStyle = "rgb(153, 21, 21)";
  textFont(50);
  ctx.fillText("Extreme", 1100, 412)
  }
  else{
  ctx.fillRect(950,350, 300, 100)
    ctx.fillStyle = "rgb(153, 21, 21)";
  textFont(50);
  ctx.fillText("Extreme", 1105, 417)
  if (clicked === true){
    cs = 2;
    mode = "Extreme Hard";
    life = 1;
    enemies.push(new sniper2(50, 450, 30))
    enemies.push(new sniper2(1600-50, 450, 30))
    enemies.push(new sniper2(800, 50, 30))
    enemies.push(new sniper2(800, 900-50, 30))
    
  }
  }

  
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(950+5, 450+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 950 || mouseY < 450 || mouseX > 950+300 || mouseY > 450+100){
  ctx.fillRect(950-5, 450-5, 300, 100)
    ctx.fillStyle = "rgb(70, 4, 71)";
  textFont(50);
  ctx.fillText("Extreme", 1100, 512)
  }
  else{
  ctx.fillRect(950,450, 300, 100)
    ctx.fillStyle = "rgb(70, 4, 71)";
  textFont(50);
  ctx.fillText("Extreme", 1105, 517)
  if (clicked === true){
    cs = 2;
    mode = "Extreme Insane";
    life = 1;
    enemies.push(new sniper2(50, 450, 30))
    enemies.push(new sniper2(1600-50, 450, 30))
    enemies.push(new sniper2(800, 50, 30))
    enemies.push(new sniper2(800, 900-50, 30))
    enemies.push(new sniper3(800, 450, 80))
    playerX = 1200;
    playerY = (450+900)/2;
  }
  }
  
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(950+5, 550+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 950 || mouseY < 550 || mouseX > 950+300 || mouseY > 550+100){
  ctx.fillRect(950-5, 550-5, 300, 100)
    ctx.fillStyle = "rgb(4, 31, 71)";
  textFont(50);
  ctx.fillText("Extreme", 1100, 612)
  }
  else{
  ctx.fillRect(950,550, 300, 100)
    ctx.fillStyle = "rgb(4, 31, 71)";
  textFont(50);
  ctx.fillText("Extreme", 1105, 617)
  if (clicked === true){
    cs = 2;
    mode = "Extreme Unreal";
    life = 1;
    enemies.push(new sniper2(50, 450, 30))
    enemies.push(new sniper2(1600-50, 450, 30))
    enemies.push(new sniper2(800, 50, 30))
    enemies.push(new sniper2(800, 900-50, 30))
    enemies.push(new sniper3(800, 450, 80))
    enemies.push(new sniper4(40, 40, 25))
    enemies.push(new sniper4(1560, 40, 25))
    enemies.push(new sniper4(1560, 860, 25))
    enemies.push(new sniper4(40, 860, 25))
    playerX = 1200;
    playerY = (450+900)/2;
  }
  }

ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(350+5, 650+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 350 || mouseY < 650 || mouseX > 350+300 || mouseY > 650+100){
  ctx.fillRect(350-5, 650-5, 300, 100)
    ctx.fillStyle = "rgb(168, 168, 168)";
  textFont(50);
  ctx.fillText("Infinite", 500, 712)
  }
  else{
  ctx.fillRect(350,650, 300, 100)
    ctx.fillStyle = "rgb(168, 168, 168)";
  textFont(50);
  ctx.fillText("Infinite", 505, 717)
  if (clicked === true){
    cs = 2;
    mode = "Infinite Easy";
    life = 10000;
  }
  }
  
ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(650+5, 650+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 650 || mouseY < 650 || mouseX > 650+300 || mouseY > 650+100){
  ctx.fillRect(650-5, 650-5, 300, 100)
    ctx.fillStyle = "rgb(117, 117, 117)";
  textFont(50);
  ctx.fillText("Infinite", 800, 712)
  }
  else{
  ctx.fillRect(650,650, 300, 100)
    ctx.fillStyle = "rgb(117, 117, 117)";
  textFont(50);
  ctx.fillText("Infinite", 805, 717)
  if (clicked === true){
    cs = 2;
    mode = "Infinite";
    life = 750;
  }
  }

ctx.fillStyle = "rgb(10, 0, 0)";
  ctx.fillRect(950+5, 650+5, 300, 100)
  ctx.fillStyle = "rgb(10, 50, 50)";
  if (mouseX < 950 || mouseY < 650 || mouseX > 950+300 || mouseY > 650+100){
  ctx.fillRect(950-5, 650-5, 300, 100)
    ctx.fillStyle = "rgb(74, 74, 74)";
  textFont(50);
  ctx.fillText("Infinite", 1100, 712)
  }
  else{
  ctx.fillRect(950,650, 300, 100)
    ctx.fillStyle = "rgb(74, 74, 74)";
  textFont(50);
  ctx.fillText("Infinite", 1105, 717)
  if (clicked === true){
    cs = 2;
    mode = "Infinite Hard";
    life = 1;
  }
  }



  for (var i of homePage){
    i.draw();
  }
  for (var i of homePage){
    for (var j of homePage){
      if (Math.sqrt(Math.abs(Math.pow(
        j.x-i.x, 2
      ) + Math.pow(
        j.y-i.y, 2
      ))) < 250){
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.strokeStyle = "rgb(10, 120, 120, 0.1)";
        ctx.lineTo(j.x, j.y)
        ctx.lineTo(i.x, i.y);
        ctx.stroke();
        i.x += (j.x-i.x)/700;
        i.y += (j.y-i.y)/700;
      }
    }
  }

  clicked = false;
}
  
function update(dt){
  let vel = 9/16 * dt;
if (controller.shift){
  vel = 6/16 * dt;
}
if (mouseMove === false){
  if (controller.left){
    playerX -= vel;
  }
  if (controller.right){
    playerX += vel;
  }
  if (controller.up){
    playerY -= vel;
  }
  if (controller.down){
    playerY += vel;
  }
}
else{
  let rot = Math.atan2(mouseY-playerY, mouseX-playerX);
  let dist = Math.sqrt(Math.abs(
    Math.pow(mouseY-playerY, 2)+
    Math.pow(mouseX-playerX, 2)
  ));
  if (dist > 40){
    dist = 40;
  }
  playerX += Math.cos(rot)*vel*1/35*dist;
  playerY += Math.sin(rot)*vel*1/35*dist;

}
    if (playerX < 20){
    playerX = 20;
  }
    if (playerY < 20){
    playerY = 20;
  }
    if (playerX > 1600- 20){
    playerX = 1600-20;
  }
    if (playerY > 900-20){
    playerY = 900-20;
  }
  time += dt;

  for (var i of enemies){
    i.update(dt);
    if (i.delete === 1){
      enemies.splice(enemies.indexOf(i), 1);
    }
  }
  if (mode !== "Infinite" && mode !== "Infinite Easy" && mode !== "Infinite Hard"){
  if (survived <= 9){
    for (var i of enemies){
      if (i.type === "enemy"){
        enemies.splice(enemies.indexOf(i), 1);
      }
    }
  }
  if (mode === "Normal" || mode === "Extreme" || mode === "Practice"){
  if (survived >= 10 && spawnPhase === 0){
    spawnPhase = 1;
    for (var i = 35; i--; i>0){
    enemies.push(new enemy(20, 6, 19));
    }
  }
  if (survived >= 30 && spawnPhase === 1){
    spawnPhase = 2;
    for (var i = 30; i--; i>0){
    enemies.push(new enemy(12, 4, 39));
    }
  }
  
  if (survived >= 53 && spawnPhase === 2){
    spawnPhase = 3;
    for (var i = 20; i--; i>0){
    enemies.push(new enemy(30, 8, 69));
    }
  }
  if (survived >= 60 && spawnPhase === 3){
    spawnPhase = 4;
    for (var i = 7; i--; i>0){
    enemies.push(new enemy(15, 8, 69));
    }
  }
  if (survived >= 89 && spawnPhase >= 4){
    spawnPhase+= dt;
    if (spawnPhase > spawnPhaseTime){
    spawnPhaseTime += 60;
    enemies.push(new enemy(15, 8, 69));
    }
  }
  if (survived > 95 && spawnPhaseBruh === 0){
    spawnPhaseBruh = 1;
    enemies.push(new enemy(15, 8, 125));
  }
  if (survived > 96 && spawnPhaseBruh === 1){
    spawnPhaseBruh = 2;
    enemies.push(new enemy(15, 8, 125));
  }
  if (survived > 97 && spawnPhaseBruh === 2){
    spawnPhaseBruh = 3;
    enemies.push(new enemy(15, 8, 125));
  }
  if (survived > 98 && spawnPhaseBruh === 3){
    spawnPhaseBruh = 4;
    enemies.push(new enemy(15, 8, 125));
  }
  if (survived > 99 && spawnPhaseBruh === 4){
    spawnPhaseBruh = 5;
    enemies.push(new enemy(15, 8, 125));
  }
  if (survived > 100 && spawnPhaseBruh === 5){
    spawnPhaseBruh = 6;
    for(var i = 10; i--; i>0){
    enemies.push(new enemy(30, 4, 125));
    }
  }
if (survived > 105 && spawnPhaseBruh === 6){
    spawnPhaseBruh = 7;
    for(var i = 6; i--; i>0){
    enemies.push(new enemy(20, 6, 125));
    }
  }
if (survived > 110 && spawnPhaseBruh === 7){
    spawnPhaseBruh = 8;
    for(var i = 10; i--; i>0){
    enemies.push(new enemy(30, 8.5, 125));
    }
  }
if (survived > 115 && spawnPhaseBruh === 8){
    spawnPhaseBruh = 9;
    for(var i = 8; i--; i>0){
    enemies.push(new enemy(25, 6, 125));
    }
  }
  if (survived > 123 && spawnPhaseBruh === 9){
    spawnPhaseBruh = 10;
    for(var i = 12; i--; i>0){
    enemies.push(new enemy(25, 7, 69));
    }
  }
  }
  else if (mode === "Normal Hard" || mode === "Extreme Hard" || mode === "Practice Hard"){
  if (survived >= 10 && spawnPhase === 0){
    spawnPhase = 1;
    for (var i = 10; i--; i>0){
    enemies.push(new enemy(20, 6, 19));
    }
  }
  if (survived >= 12 && spawnPhase === 1){
    spawnPhase = 2;
    for (var i = 10; i--; i>0){
    enemies.push(new enemy(20, 6, 19));
    }
  }
  if (survived >= 14 && spawnPhase === 2){
    spawnPhase = 3;
    for (var i = 20; i--; i>0){
    enemies.push(new enemy(20, 6, 19));
    }
  }
  
  if (survived >= 54 && spawnPhase === 3){
    spawnPhase = 4;
    for (var i = 15; i--; i>0){
    enemies.push(new enemy(20, 10, 70));
    }
  }
  if (survived >= 60 && spawnPhase === 4){
    spawnPhase = 5;
    for (var i = 7; i--; i>0){
    enemies.push(new enemy(20, 10, 70));
    }
  }
  if (survived >= 65 && spawnPhase === 5){
    spawnPhase = 6;
    for (var i = 4; i--; i>0){
    enemies.push(new enemy(20, 10, 70));
    }
  }
  if (survived >= 70 && spawnPhase === 6){
    spawnPhase = 7;
    for (var i = 7; i--; i>0){
    enemies.push(new enemy(20, 5, 90));
    }
  }
  if (survived >= 100 && spawnPhase === 7){
    spawnPhase = 8;
    for (var i = 40; i--; i>0){
    enemies.push(new enemy(20, 6, 125));
    }
  }
  if (survived >= 105 && spawnPhase === 8){
    spawnPhase = 9;
    for (var i = 8; i--; i>0){
    enemies.push(new enemy(16, 5, 125));
    }
  }
  if (survived >= 110 && spawnPhase === 9){
    spawnPhase = 10;
    for (var i = 5; i--; i>0){
    enemies.push(new enemy(12, 3, 125));
    }
  }
  if (survived >= 115 && spawnPhase === 10){
    spawnPhase = 11;
    for (var i = 4; i--; i>0){
    enemies.push(new enemy(24, 2, 125));
    }
  }
  if (survived >= 118 && spawnPhase === 11){
    spawnPhase = 12;
    for (var i = 6; i--; i>0){
    enemies.push(new enemy(20, 5, 125));
    }
  }
  if (survived >= 121 && spawnPhase === 12){
    spawnPhase = 13;
    for (var i = 6; i--; i>0){
    enemies.push(new enemy(20, 6, 125));
    }
  }
  
  }
  else if (mode == "Normal Insane" || mode == "Practice Insane" || mode == "Extreme Insane"){
    if (survived >= 10 && spawnPhase === 0){
      spawnPhase = 1;
      for (var i = 12; i--; i>0){
        enemies.push(new enemy(20, 5, 19));
      }
    }
    if (survived >= 12 && spawnPhase === 1){
      spawnPhase = 2;
      for (var i = 12; i--; i>0){
        enemies.push(new enemy(17, 6, 19));
      }
    }
    if (survived >= 14 && spawnPhase === 2){
      spawnPhase = 3;
      for (var i = 12; i--; i>0){
        enemies.push(new enemy(14, 7, 19));
      }
    }
    if (survived >= 54 && spawnPhase === 3){
      spawnPhase = 4;
      for (var i = 32; i--; i>0){
        enemies.push(new enemy(15, 7.5, 69));
      }
    }
    if (survived >= 90 && spawnPhase === 4){
      spawnPhase = 5;
      for (var i = 9; i--; i>0){
        enemies.push(new enemy(20, 8, 100));
      }
    }
    if (survived >= 102 && spawnPhase === 5){
      spawnPhase = 6;
      for (var i = 20; i--; i>0){
        enemies.push(new enemy(20, 6, 126));
      }
    }
    if (survived >= 106 && spawnPhase === 6){
      spawnPhase = 7;
      for (var i = 10; i--; i>0){
        enemies.push(new enemy(30, 3, 126));
      }
    }
    if (survived >= 111 && spawnPhase === 7){
      spawnPhase = 8;
      for (var i = 7; i--; i>0){
        enemies.push(new enemy(24, 7, 126));
      }
    }
    if (survived >= 117 && spawnPhase === 8){
      spawnPhase = 9;
      for (var i = 7; i--; i>0){
        enemies.push(new enemy(16, 10, 126));
      }
    }
    if (survived >= 121 && spawnPhase === 9){
      spawnPhase = 10;
      for (var i = 7; i--; i>0){
        enemies.push(new enemy(20, 12, 126));
      }
    }
    
    
  }
  else{
    if (survived >= 10 && spawnPhase === 0){
      spawnPhase = 1;
      for (var i = 7; i--; i>0){
        enemies.push(new enemy(20, 5, 19));
      }
    }
    if (survived >= 12 && spawnPhase === 1){
      spawnPhase = 2;
      for (var i = 7; i--; i>0){
        enemies.push(new enemy(17, 6, 19));
      }
    }
    if (survived >= 14 && spawnPhase === 2){
      spawnPhase = 3;
      for (var i = 7; i--; i>0){
        enemies.push(new enemy(14, 7, 19));
      }
    }
    if (survived >= 30 && spawnPhase === 3){
      spawnPhase = 4;
      for (var i = 7; i--; i>0){
        enemies.push(new enemy(15, 5.5, 38));
      }
    }
    if (survived >= 50 && spawnPhase === 4){
      spawnPhase = 5;
      for (var i = 12; i--; i>0){
        enemies.push(new enemy(12, 6.5, 68));
      }
    }
    if (survived >= 70 && spawnPhase === 5){
      spawnPhase = 6;
      for (var i = 10; i--; i>0){
        enemies.push(new enemy(22, 7.7, 78));
      }
    }
    if (survived >= 100 && spawnPhase === 6){
      spawnPhase = 7;
      for (var i = 12; i--; i>0){
        enemies.push(new enemy(18, 8.5, 124));
      }
    }
    if (survived >= 110 && spawnPhase === 7){
      spawnPhase = 8;
      for (var i = 8; i--; i>0){
        enemies.push(new enemy(14, 6.5, 124));
      }
    }
    if (survived >= 117 && spawnPhase === 8){
      spawnPhase = 9;
      for (var i = 6; i--; i>0){
        enemies.push(new enemy(22, 5.5, 124));
      }
    }
    
  }

  if (survived > 125){
    cs = 3;
  }
  }
  else{
    spawnPhase+= dt;
    let bruh = survived + 50;
    if (spawnPhase > spawnPhaseTime){
    spawnPhaseTime += 4000*1/Math.sqrt(bruh+1);
    enemies.push(new enemy(7.5+bruh/20, 5+bruh/25, survived+10));
    }

    
  }
  

}

function display(){  
  ctx.textAlign = "center";
  ctx.globalCompositeOperation = "source-over";
  winX = canvas.width;
  winY = canvas.height;



  ctx.clearRect(0, 0, winX, winY)
  ctx.fillStyle = "rgb(200, 200, 200)";
  ctx.fillRect(0, 0, winX, winY);

  survived = Math.round(time/1000);

  if (mode !== "Extreme" && mode !== "Extreme Hard" && mode !== "Extreme Insane" && mode !== "Extreme Unreal"){
  textFont(50);
  ctx.fillStyle = "rgba(0, 0, 0, 0.15)"
  ctx.fillText("Life: "+Math.round(life), 800, 600)
  if (life <= 0){
    cs = 3;
  }
  }


  ctx.beginPath();
  ctx.fillStyle = "rgb(255, 0, 0)";
  ctx.arc(playerX, playerY, 20, 0, Math.PI * 2);
  ctx.fill();

  for (var i of enemies){
    ctx.lineWidth = 2
    i.draw();
  }
  ctx.fill();

    textFont(200);
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
  ctx.fillText(survived, 800, 520)
  

}
function gameover(){
  if (life < 0){
    life = -1;
  }
  let winX = 1600;
  let winY = 900;
  enemies = [];
  let survived = Math.round(time/100)/10;
  ctx.clearRect(0, 0, winX, winY)
  ctx.fillStyle = "rgb(150, 70, 70)";
  ctx.fillRect(0, 0, winX, winY);

  ctx.fillStyle = "rgb(100, 0, 0)";
  textFont(100);
  if (survived <= 125 || mode === "Infinite" || mode === "Infinite Easy" || mode === "Infinite Hard"){
  ctx.fillText("You Lost", 800, 200);
  }
  else{
  ctx.fillText("You Won", 800, 200);
  }

  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(650+5, 750+5, 300, 100)
  ctx.fillStyle = "rgb(0, 50, 50)";
  if (mouseX < 650 || mouseY < 750 || mouseX > 650+300 || mouseY > 750+100){
  ctx.fillRect(650-5, 750-5, 300, 100)
    ctx.fillStyle = "rgb(250, 0, 0)";
  textFont(80);
  ctx.fillText("Home", 800, 820)
  }
  else{
  ctx.fillRect(650, 750, 300, 100)
    ctx.fillStyle = "rgb(250, 0, 0)";
  textFont(80);
  ctx.fillText("Home", 805, 825)
  if (clicked === true){
    cs = 1;
    enemies = [new sniper(50, 50, 30), new sniper(1600-50, 900-50, 30), new sniper(50, 900-50, 30), new sniper(1600-50, 50, 30)];
    playerX = 800;
    playerY = 450;
    spawnPhase = 0;
    spawnPhaseBruh = 0;
    time = 0;
    survived = 0;
    spawnPhaseTime = 0;
  }
  }
  if (mode !== "Practice" && mode !== "Practice Hard" && mode !== "Practice Insane" && mode !== "Practice Unreal"){
  if (survived <= 125 || mode === "Infinite" || mode === "Infinite Easy" || mode === "Infinite Hard"){
  ctx.fillStyle = "rgb(100, 20, 20)"
  textFont(150);
  ctx.fillText("Time: "+survived, 800, 400);
    ctx.fillStyle = "rgb(100, 20, 20)"
  textFont(120);
  ctx.fillText("Mode: "+mode, 800, 570);
  
  }
  else{
  ctx.fillStyle = "rgb(0, 150, 0)"
  textFont(70);
  ctx.fillText("Are you satisfied now?", 800, 400); 
  ctx.fillStyle = "rgb(100, 20, 20)"
  textFont(120);
  ctx.fillText("Mode: "+mode, 800, 570);
  ctx.fillStyle = "rgb(100, 20, 20)"
  if (mode === "Normal" || mode === "Normal Hard" || mode === "Normal Insane" || mode == "Normal Unreal"){
  textFont(30);
  ctx.fillText("Life Left: "+life, 800, 860);
  }
  }
  }
  else{
  ctx.fillStyle = "rgb(0, 0, 0)"
  textFont(70);
  ctx.fillText("Life Left: "+life, 800, 400);
  ctx.fillStyle = "rgb(100, 20, 20)"
  textFont(120);
  ctx.fillText("Mode: "+mode, 800, 570);
  }

}
function getBorders(){
    let stuff = windowHeight/windowWidth;

  let realWindowWidth = windowWidth;
  let realWindowHeight = windowHeight;
  if (stuff > 9/16){
    realWindowHeight = windowWidth * 9/16;
  }
  if (stuff < 9/16){
    realWindowWidth = windowHeight * 16/9;
  }

  let changeX = Math.abs(realWindowWidth - windowWidth);
  let changeY = Math.abs(realWindowHeight - windowHeight);

  leftBorder = changeX/2;
  topBorder = changeY/2;
}


function mainLoop(timestamp){
      // Throttle the frame rate.    
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        requestAnimationFrame(mainLoop);
        return;
    }
    delta += timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    if (timestamp > lastFpsUpdate + 1000) {
        fps = 0.4 * framesThisSecond + 0.6 * fps;

        lastFpsUpdate = timestamp;
        framesThisSecond = 0;
    }
    framesThisSecond++;

    var numUpdateSteps = 0;
    while (delta >= timestep) {
        if (cs == 2){
        update(timestep);
        }
        if (cs == 1){
          spawnPhase = 0;
          spawnPhaseBruh = 0;
          spawnPhaseTime = 0;
          survived = 0;
          menu(timestep);
          }

        delta -= timestep;
        if (++numUpdateSteps >= 240) {
            panic();
            break;
        }
    }


  getBorders();
  if (cs == 2){
  display();
  }
  if (cs === 3){
    gameover();
  }
  requestAnimationFrame(mainLoop);
}
document.onkeydown = function(e){
  controller.keys[e.keyCode] =  true;
}
document.onkeyup = function(e){
  controller.keys[e.keyCode] = false;
}

requestAnimationFrame(mainLoop);
