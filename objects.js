var sniper = function(x, y, s){
  this.x = x;
  this.y = y;
  this.s = s;
  this.reloadtime = 1000;
  this.rot = 0;
  this.phase = 0;
  this.speed = 10;
}
sniper.prototype.update = function(dt){
  this.reloadtime -= dt;
  if (mode !== "Infinite" && mode !== "Infinite Easy" && mode !== "Infinite Hard"){
  if (survived < 20 || survived > 69){
  this.rot = Math.atan2(playerY-this.y, playerX-this.x);
  }
  else if (survived === 20){
    if (this.x < 800 || this.y < 450){
  this.rot = Math.atan2(450-this.y, 800-this.x);
    }
    else{
  this.rot = Math.atan2(450-this.y, 800-this.x) + Math.PI*2; 
    }
  this.phase = 1;
  }
  else if (survived < 50){
    if (this.phase === 1){
  this.rot += Math.PI/(dt*7);
    }
    if (this.phase === 2){
      this.rot -= Math.PI/(dt*7);
    }
  if (this.x <= 800 && this.y <= 450){
    if (this.rot > Math.PI/2){
      this.phase = 2;
    }
    if (this.rot < 0){
      this.phase = 1;
    }
  }
  if (this.x <= 800 && this.y >= 450){
    if (this.rot < -Math.PI/2){
      this.phase = 1;
    }
    if (this.rot > 0){
      this.phase = 2;
    }
  }
  if (this.x >= 800 && this.y <= 450){
    if (this.rot < Math.PI/2){
      this.phase = 1;
    }
    if (this.rot > Math.PI){
      this.phase = 2;
    }
  }
  if (this.x >= 800 && this.y >= 450){
    if (this.rot > Math.PI*3/2){
      this.phase = 2;
    }
    if (this.rot < Math.PI){
      this.phase = 1;
    }
  }
  
  }
  }
  if (this.reloadtime < 0){
    if (mode !== "Infinite" && mode !== "Infinite Easy" && mode !== "Infinite Hard"){
    if (survived < 50 || survived > 69){
    enemies.push(new bullet(this.x, this.y, this.s*5/12, this.speed, this.rot));
    }
    if (survived < 5){
    this.reloadtime = 1000;
    this.speed = 10;
    }
    else if (survived < 9){
    if (mode === "Extreme" || mode === "Normal" || mode === "Practice"){
    this.reloadtime = 450;
    }
    else{
    this.reloadtime = 650;
    }
    this.speed = 9;
    }
    else if (survived < 20){
      this.reloadtime = 2500;
      this.speed = 6;
    } else{
      if (survived < 28){
      this.reloadtime = 210;
      if (this.mode == "Practice Unreal" || this.mode == "Normal Unreal" || this.mode == "Extreme Unreal") this.reloadtime *= 1.35;
      }
      else if (survived < 40){
      this.reloadtime = 290;
      if (this.mode == "Practice Unreal" || this.mode == "Normal Unreal" || this.mode == "Extreme Unreal") this.reloadtime *= 1.4;
      }
      else if (survived < 50){
      this.reloadtime = 170;
      if (this.mode == "Practice Unreal" || this.mode == "Normal Unreal" || this.mode == "Extreme Unreal") this.reloadtime *= 1.4;
      }
      else if (survived < 69){
      this.reloadtime = 400;
      } else{
        if (survived < 87){
          if (this.mode === "Normal" || this.mode === "Extreme" || this.mode === "Practice"){
        this.reloadtime = 260;
          }
          else{
        this.reloadtime = 360;
      if (this.mode == "Practice Unreal" || this.mode == "Normal Unreal" || this.mode == "Extreme Unreal") this.reloadtime *= 1.2;
          }
        this.speed = 6.5;
        }
        else{
        this.reloadtime = 1500;
        this.speed = 6.5;
        }
      }
      this.speed = 5;
      if (this.x <= 800){
      enemies.push(new bullet(this.x, this.y, this.s*2/3, 12, 0))
      }
      if (this.y <= 450){
      enemies.push(new bullet(this.x, this.y, this.s*2/3, 12, Math.PI/2))
      }
      if (this.x >= 800){
      enemies.push(new bullet(this.x, this.y, this.s*2/3, 12, Math.PI))
      }
      if (this.y >= 450){
      enemies.push(new bullet(this.x, this.y, this.s*2/3, 12, -Math.PI/2))
      }
      
    }
    }
    else{

      this.reloadtime = 500;
      this.speed = 6.5;
      this.rot = Math.atan2(playerY-this.y, playerX-this.x);
      if (this.x <= 800){
      enemies.push(new bullet(this.x, this.y, this.s*2/3, 12, 0))
      }
      if (this.y <= 450){
      enemies.push(new bullet(this.x, this.y, this.s*2/3, 12, Math.PI/2))
      }
      if (this.x >= 800){
      enemies.push(new bullet(this.x, this.y, this.s*2/3, 12, Math.PI))
      }
      if (this.y >= 450){
      enemies.push(new bullet(this.x, this.y, this.s*2/3, 12, -Math.PI/2))
      }
    }
  } 
  if (Math.sqrt(
    Math.abs(
      Math.pow(this.x-playerX, 2) +
      Math.pow(this.y-playerY, 2)
    )
  ) < this.s + 20){
    if (mode === "Extreme" || mode === "Extreme Hard" || mode === "Extreme Insane" || mode === "Extreme Unreal"){
    cs = 3;
    }
    else{
    life -= dt;
    }
  }
}
sniper.prototype.draw = function(){
  ctx.fillStyle = "rgb(200, 50, 50)";
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

var sniper2 = function(x, y, s){
  this.x = x;
  this.y = y;
  this.s = s;
  this.reloadtime = 1000;
  this.rot = 0;
  this.phase = 0;
  this.speed = 10;
  this.canshoot = true;
}
sniper2.prototype.update = function(dt){
  this.reloadtime -= dt;
  this.rot = Math.atan2(playerY-this.y, playerX-this.x);
  this.speed = 7;

  if (this.reloadtime < 0){
    if (survived < 6){
    this.reloadtime = 1200;
    this.canshoot = true;
    }
    else if (survived < 30){
      this.canshoot = true;
    this.reloadtime = 3000;
    }
    else if (survived < 40){
      this.canshoot = true;
    this.reloadtime = 1200;
    }
    else if (survived < 50){
      this.canshoot = true;
    this.reloadtime = 5000;
    }
    else if (survived < 70){
      this.canshoot = false;
    this.reloadtime = 1000;
    }
    else if (survived < 90){
      this.canshoot = true;
    this.reloadtime = 1200;
    }
    else if (survived < 100){
      this.canshoot = false;
    this.reloadtime = 1200;
    if (this.x < 800){
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, 0, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, -0.4, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, -0.8, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, 0.4, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, 0.8, "rgb(200, 105, 50)"));
    }
    else if (this.y < 450){
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, 0+Math.PI/2, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, -0.40+Math.PI/2, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, -0.80+Math.PI/2, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, 0.40+Math.PI/2, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, 0.80+Math.PI/2, "rgb(200, 105, 50)"));
    }
    else if (this.y > 450){
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, 0-Math.PI/2,"rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, -0.40-Math.PI/2, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, -0.80-Math.PI/2, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, 0.40-Math.PI/2, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, 0.80-Math.PI/2, "rgb(200, 105, 50)"));
    }
    else{
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, 0+Math.PI, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, -0.4+Math.PI, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, -0.8+Math.PI, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, 0.4+Math.PI, "rgb(200, 105, 50)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, 4.5, 0.8+Math.PI, "rgb(200, 105, 50)"));
    }
    
    } else{
      this.canshoot = true;
      this.reloadtime = 2000;
      this.speed = 4.5;
    }
    if (this.canshoot === true){
    enemies.push(new bullet(this.x, this.y, this.s*5/12, this.speed, this.rot, "rgb(200, 105, 50)"));
    }
  } 





  if (Math.sqrt(
    Math.abs(
      Math.pow(this.x-playerX, 2) +
      Math.pow(this.y-playerY, 2)
    )
  ) < this.s + 20){
    if (mode === "Extreme" || mode === "Extreme Hard"  || mode === "Extreme Insane" || mode === "Extreme Unreal"){
    cs = 3;
    }
    else{
    life -= dt;
    }
  }
}
sniper2.prototype.draw = function(){
  ctx.fillStyle = "rgb(200, 105, 50)";
  ctx.strokeStyle = "black"
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}


var sniper3 = function(x, y, s){
  this.x = x;
  this.y = y;
  this.s = s;
  this.reloadtime = 1000;
  this.rot = 0;
  this.phase = 0;
  this.speed = 10;
  this.canshoot = true;
  this.canshootback = false;
}
sniper3.prototype.update = function(dt){
  this.reloadtime -= dt;
  if (survived < 10 || survived > 20){
  this.rot = Math.atan2(playerY-this.y, playerX-this.x);
  }
  this.speed = 7;

  if (survived > 9){
    this.s -= (this.s + 40)/50;
    if (this.s < 40){
      this.s = 40;
    }
  }
  if (this.reloadtime < 0){
    if (survived < 20){
    this.canshoot = true;
    this.reloadtime = 20;
    this.canshootback = true;
    this.speed = 5.5;
    if (survived > 10){
    this.rot += 0.03;
    }
    }
    else if (survived < 50){
    this.canshoot = true;
    this.reloadtime = 300;
    this.canshootback = false;
    this.speed = 7.5;
    
    if (mode == "Normal Unreal" || mode == "Practice Unreal" || mode == "Extreme Unreal"){this.reloadtime = 450; this.speed = 6.5;}
    }
    else if (survived < 70){
    this.canshoot = true;
    this.reloadtime = 50;
    this.canshootback = false;
    this.speed = 9;
    if (mode == "Normal Unreal" || mode == "Practice Unreal" || mode == "Extreme Unreal"){this.reloadtime = 350; this.speed = 7.5;}
    }
    else if (survived < 90){}
    else if (survived < 100){
    this.canshoot = true;
    this.reloadtime = 200;
    this.canshootback = true;
    this.speed = 7;
    if (mode == "Normal Unreal" || mode == "Practice Unreal" || mode == "Extreme Unreal"){this.reloadtime = 500; this.speed = 6;}
    }
    else if (survived < 120){
    this.canshoot = true;
    this.reloadtime = 500;
    this.canshootback = false;
    this.speed = 6;
    if (mode == "Normal Unreal" || mode == "Practice Unreal" || mode == "Extreme Unreal") this.reloadtime = 600;
    }
    else if (survived < 126){
    this.canshoot = true;
    this.reloadtime = 0;
    this.canshootback = false;
    this.speed = 6;
    if (mode == "Normal Unreal" || mode == "Practice Unreal" || mode == "Extreme Unreal") this.speed = 5;
    }
    
    if (this.canshoot === true){
    enemies.push(new bullet(this.x, this.y, this.s*5/12, this.speed, this.rot, "rgb(211, 71, 104)"));
    if (this.canshootback === true){
    enemies.push(new bullet(this.x, this.y, this.s*5/12, this.speed, this.rot+Math.PI, "rgb(211, 71, 104)"));
    }
    }
  } 





  if (Math.sqrt(
    Math.abs(
      Math.pow(this.x-playerX, 2) +
      Math.pow(this.y-playerY, 2)
    )
  ) < this.s + 20){
    if (mode === "Extreme" || mode === "Extreme Hard"  || mode === "Extreme Insane" || mode === "Extreme Unreal"){
    cs = 3;
    }
    else{
    life -= dt;
    }
  }
}
sniper3.prototype.draw = function(){
  ctx.fillStyle = "rgb(211, 71, 104)";
  ctx.strokeStyle = "black"
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

var sniper4 = function(x, y, s){
  this.x = x;
  this.y = y;
  this.s = s;
  this.reloadtime = 1000;
  this.rot = 0;
  this.phase = 0;
  this.speed = 10;
}
sniper4.prototype.update = function(dt){
  this.reloadtime -= dt;

  //CONTROL ROTATION
  if ((survived > 10 && survived < 40) || (survived > 60 && survived < 80)){
    this.rot = Math.atan2(playerY-this.y, playerX-this.x);
  }
  else{
    this.rot = Math.atan2(450-this.y, 800-this.x);
  }


  //CONTROL SHOOTING
  if (this.reloadtime < 0){

    //enemies.push(new bullet(this.x, this.y, this.s*5/12, this.speed, this.rot, "rgb(44, 126, 190)"));

    if (survived < 10){
      enemies.push(new bullet(this.x, this.y, this.s*7/12, this.speed, this.rot + Math.cos(time / 100), "rgb(44, 126, 190)"));
      enemies.push(new bullet(this.x, this.y, this.s*5.5/12, this.speed / 1.2, this.rot + Math.sin(time / 100), "rgb(44, 126, 190)"));
    }
    else if (survived < 20){
      enemies.push(new bullet(this.x, this.y, this.s*7/12, this.speed, this.rot + 0.8 * Math.cos(time / 100), "rgb(44, 126, 190)"));
      enemies.push(new bullet(this.x, this.y, this.s*7/12, this.speed, this.rot - 0.8 * Math.sin(time / 100), "rgb(44, 126, 190)"));
    }
    else if (survived < 30){
      enemies.push(new bullet(this.x, this.y, this.s*7/12, this.speed, this.rot + Math.cos(time / 500), "rgb(44, 126, 190)"));
    }
    else if (survived < 40){
      enemies.push(new bullet(this.x, this.y, this.s*7/12, this.speed, this.rot + Math.cos(time / 500), "rgb(44, 126, 190)"));
      enemies.push(new bullet(this.x, this.y, this.s*6/12, this.speed, this.rot + Math.cos(time / 500 + Math.PI/4), "rgb(44, 126, 190)"));
      enemies.push(new bullet(this.x, this.y, this.s*5/12, this.speed, this.rot + Math.cos(time / 500 + 2 * Math.PI/4), "rgb(44, 126, 190)"));
      enemies.push(new bullet(this.x, this.y, this.s*4/12, this.speed, this.rot + Math.cos(time / 500 + 3 * Math.PI/4), "rgb(44, 126, 190)"));
    }
    else if (survived < 50){
      enemies.push(new bullet(this.x, this.y, this.s*9/12, this.speed, this.rot, "rgb(44, 126, 190)"));
    }
    else if (survived < 60){
      enemies.push(new bullet(this.x, this.y, this.s*9/12, this.speed + Math.cos(time / 200) * 3, this.rot + Math.cos(time / 200), "rgb(44, 126, 190)"));
    }
    else if (survived < 70){
      enemies.push(new bullet(this.x, this.y, this.s*7/12, this.speed + Math.cos(time / 200) * 2, this.rot + Math.cos(time / 100) / 3, "rgb(44, 126, 190)"));
    }
    else if (survived < 80){
      enemies.push(new bullet(this.x, this.y, this.s*7/12, this.speed, this.rot + 0.25, "rgb(44, 126, 190)"));
      enemies.push(new bullet(this.x, this.y, this.s*7/12, this.speed, this.rot - 0.25, "rgb(44, 126, 190)"));
    }
    else if (survived < 100){
      enemies.push(new bullet(this.x, this.y, this.s*8/12, this.speed, this.rot, "rgb(44, 126, 190)"));
      enemies.push(new bullet(this.x, this.y, this.s*7/12, this.speed * 0.9, this.rot + 0.25, "rgb(44, 126, 190)"));
      enemies.push(new bullet(this.x, this.y, this.s*7/12, this.speed * 0.9, this.rot - 0.25, "rgb(44, 126, 190)"));
      enemies.push(new bullet(this.x, this.y, this.s*6/12, this.speed * 0.8, this.rot + 0.5, "rgb(44, 126, 190)"));
      enemies.push(new bullet(this.x, this.y, this.s*6/12, this.speed * 0.8, this.rot - 0.5, "rgb(44, 126, 190)"));
      
    }
    else if (survived < 110){
      enemies.push(new bullet(this.x, this.y, this.s*5/12, this.speed, this.rot + Math.cos(time / 500) * 0.8, "rgb(44, 126, 190)"));
    }
    else if (survived < 120){
      enemies.push(new bullet(this.x, this.y, this.s*7/12, this.speed + Math.cos(time / 1000) * 1.5, this.rot + Math.cos(time / 500) * 0.8, "rgb(44, 126, 190)"));
    }
    else if (survived < 125){
      enemies.push(new bullet(this.x, this.y, this.s*11/12, this.speed + Math.cos(time / 500) * 1.5, this.rot + Math.cos(time / 200) * 0.8, "rgb(44, 126, 190)"));
    }
    

    if (survived < 5){
      this.reloadtime = 250;
      this.speed = 7;
    }
    else if (survived < 10){
      this.reloadtime = 350;
      this.speed = 8;
    }
    else if (survived < 20){
      this.reloadtime = 500;
      this.speed = 7;
    }
    else if (survived < 30){
      this.reloadtime = 300;
      this.speed = 9;
    }
    else if (survived < 40){
      this.reloadtime = 900;
      this.speed = 6;
    }
    else if (survived < 50){
      this.reloadtime = 1200;
      this.speed = 9;
    }
    else if (survived < 53){
      this.reloadtime = 2000;
      this.speed = 9;
    }
    else if (survived < 60){
      this.reloadtime = 100;
      this.speed = 9.5;
    }
    else if (survived < 70){
      this.reloadtime = 250;
      this.speed = 6;
    }
    else if (survived < 80){
      this.reloadtime = 800;
      this.speed = 5;
    }
    else if (survived < 90){
      this.reloadtime = 2000;
      this.speed = 6;
    }
    else if (survived < 100){
      this.reloadtime = 3000;
      this.speed = 5.5;
    }
    else if (survived < 120){
      this.reloadtime = 300;
      this.speed = 7;
    }
    else if (survived < 125){
      this.reloadtime = 250;
      this.speed = 8;
    }
    
  } 
  if (Math.sqrt(
    Math.abs(
      Math.pow(this.x-playerX, 2) +
      Math.pow(this.y-playerY, 2)
    )
  ) < this.s + 20){
    if (mode === "Extreme" || mode === "Extreme Hard" || mode === "Extreme Insane" || mode === "Extreme Unreal"){
    cs = 3;
    }
    else{
    life -= dt;
    }
  }
}
sniper4.prototype.draw = function(){
  ctx.fillStyle = "rgb(44, 126, 190)";
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}


var bullet = function(x, y, s, speed, dir, color){
  this.x = x;
  this.y = y;
  this.s = s;
  this.speed = speed;
  this.dir = dir;
  this.color = color || "rgb(200, 50, 50)"
}
bullet.prototype.update = function(dt){
  this.x += Math.cos(this.dir) * this.speed * dt * 1/16;
  this.y += Math.sin(this.dir) * this.speed * dt * 1/16;
  if (this.x <= -this.s || this.x >= this.s+1600 || this.y <= -this.s || this.y >= this.s + 1600){
    this.delete = 1;
  }
    if (Math.sqrt(
    Math.abs(
      Math.pow(this.x-playerX, 2) +
      Math.pow(this.y-playerY, 2)
    )
  ) < this.s + 20){
    if (mode === "Extreme"  || mode === "Extreme Hard" || mode === "Extreme Insane" || mode === "Extreme Unreal"){
    cs = 3;
    }
    else{
    life -= dt;
    }
  }
}
bullet.prototype.draw = function(){
  ctx.fillStyle = this.color;
  ctx.strokeStyle = "black"
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}
var enemy = function(s, speed, life){
  this.wall = Math.floor(Math.random() * 4)+1;
  this.life = life;
  if (this.wall === 1){
  this.x = s;
  this.y = Math.random()*900;
  }
  if (this.wall === 3){
  this.x = 1600-s;
  this.y = Math.random()*900;
  }
  if (this.wall === 2){
  this.y = s;
  this.x = Math.random()*1600;
  }
  if (this.wall === 4){
  this.y = 900-s;
  this.x = Math.random()*1600;
  }
  this.s = s;
  this.speed = speed;
  this.dir = Math.random()* Math.PI * 2;
  this.speedX = Math.cos(this.dir) * this.speed * 1/16;
  this.speedY = Math.sin(this.dir) * this.speed * 1/16;
  this.type = "enemy";
}
enemy.prototype.update = function(dt){
  this.x += this.speedX * dt;
  this.y += this.speedY * dt;
  if (Math.sqrt(
    Math.abs(
      Math.pow(this.x-playerX, 2) +
      Math.pow(this.y-playerY, 2)
    )
  ) < this.s + 20){
    if (mode === "Extreme"  || mode === "Extreme Hard"  || mode === "Extreme Insane" || mode === "Extreme Unreal"){
    cs = 3;
    }
    else{
    life -= dt;
    }
  }
  if (this.x <= this.s){
    if (survived < this.life){
    this.x = this.s;
    this.speedX *= -1;
    }
    else{
      this.delete = 1;
    }
  }
  if (this.x >= 1600-this.s){
    if (survived < this.life){
    this.x = 1600-this.s;
    this.speedX *= -1;
    }
    else{
      this.delete = 1;
    }
  }
  if (this.y <= this.s){
    if (survived < this.life){
    this.y = this.s;
    this.speedY *= -1;
    }    
    else{
      this.delete = 1;
    }
  }
  if (this.y >= 900-this.s){
    if (survived < this.life){
    this.y =900-this.s;
    this.speedY *= -1;
    }    
    else{
      this.delete = 1;
    }
  }
  
}
enemy.prototype.draw = function(){
  ctx.fillStyle = "rgb(100, 100, 100)";
  ctx.strokeStyle = "black"
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}




var enemy1 = function(s, speed){
  this.wall = Math.floor(Math.random() * 4)+1;
  if (this.wall === 1){
  this.x = s;
  this.y = Math.random()*900;
  }
  if (this.wall === 3){
  this.x = 1600-s;
  this.y = Math.random()*900;
  }
  if (this.wall === 2){
  this.y = s;
  this.x = Math.random()*1600;
  }
  if (this.wall === 4){
  this.y = 900-s;
  this.x = Math.random()*1600;
  }
  this.s = s;
  this.speed = speed;
  this.dir = Math.random()* Math.PI * 2;
  this.speedX = Math.cos(this.dir) * this.speed * 1/16;
  this.speedY = Math.sin(this.dir) * this.speed * 1/16;
}
enemy1.prototype.update = function(dt){
  this.x += this.speedX * dt;
  this.y += this.speedY * dt;
  if (this.x <= this.s){
    this.x = this.s;
    this.speedX *= -1;
  }
  if (this.x >= 1600-this.s){
    this.x = 1600-this.s;
    this.speedX *= -1;
  }
  if (this.y <= this.s){
    this.y = this.s;
    this.speedY *= -1;
  }
  if (this.y >= 900-this.s){
    this.y =900-this.s;
    this.speedY *= -1;
  }    

  
  
}
enemy1.prototype.draw = function(){
  ctx.fillStyle = "rgb(10, 150, 150, 0.6)";
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgb(10, 100, 100, 0.4)";
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.s/2, 0, Math.PI * 2);
  ctx.fill();
  
}
