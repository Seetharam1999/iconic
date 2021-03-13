
/*---------hero section-----------*/
// min and max radius, radius threshold and percentage of filled circles
var radMin = 5,
  radMax = 125,
  filledCircle = 60, //percentage of filled circles
  concentricCircle = 30, //percentage of concentric circles
  radThreshold = 25; //IFF special, over this radius concentric, otherwise filled

//min and max speed to move
var speedMin = 0.3,
  speedMax = 2.5;

//max reachable opacity for every circle and blur effect
var maxOpacity = 0.6;

//default palette choice
var colors = ['52,168,83', '117,95,147', '199,108,23', '194,62,55', '0,172,212', '120,120,120'],
  bgColors = ['52,168,83', '117,95,147', '199,108,23', '194,62,55', '0,172,212', '120,120,120'],
  circleBorder = 10,
  backgroundLine = bgColors[0];
var backgroundMlt = 0.85;

//min distance for links
var linkDist = Math.min(canvas.width, canvas.height) / 2.4,
  lineBorder = 2.5;

//most importantly: number of overall circles and arrays containing them
var maxCircles = 20,
  points = [],
  pointsBack = [];

//populating the screen
for (var i = 0; i < maxCircles * 2; i++) points.push(new Circle());
for (var i = 0; i < maxCircles; i++) pointsBack.push(new Circle(true));

//experimental vars
var circleExp = 1,
  circleExpMax = 1.003,
  circleExpMin = 0.997,
  circleExpSp = 0.00004,
  circlePulse = false;

//circle class
function Circle(background) {
  //if background, it has different rules
  this.background = (background || false);
  this.x = randRange(-canvas.width / 2, canvas.width / 2);
  this.y = randRange(-canvas.height / 2, canvas.height / 2);
  this.radius = background ? hyperRange(radMin, radMax) * backgroundMlt : hyperRange(radMin, radMax);
  this.filled = this.radius < radThreshold ? (randint(0, 100) > filledCircle ? false : 'full') : (randint(0, 100) > concentricCircle ? false : 'concentric');
  this.color = background ? bgColors[randint(0, bgColors.length - 1)] : colors[randint(0, colors.length - 1)];
  this.borderColor = background ? bgColors[randint(0, bgColors.length - 1)] : colors[randint(0, colors.length - 1)];
  this.opacity = 0.05;
  this.speed = (background ? randRange(speedMin, speedMax) / backgroundMlt : randRange(speedMin, speedMax)); // * (radMin / this.radius);
  this.speedAngle = Math.random() * 2 * Math.PI;
  this.speedx = Math.cos(this.speedAngle) * this.speed;
  this.speedy = Math.sin(this.speedAngle) * this.speed;
  var spacex = Math.abs((this.x - (this.speedx < 0 ? -1 : 1) * (canvas.width / 2 + this.radius)) / this.speedx),
    spacey = Math.abs((this.y - (this.speedy < 0 ? -1 : 1) * (canvas.height / 2 + this.radius)) / this.speedy);
  this.ttl = Math.min(spacex, spacey);
};

Circle.prototype.init = function() {
  Circle.call(this, this.background);
}

//support functions
//generate random int a<=x<=b
function randint(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
  }
  //generate random float
function randRange(a, b) {
    return Math.random() * (b - a) + a;
  }
  //generate random float more likely to be close to a
function hyperRange(a, b) {
  return Math.random() * Math.random() * Math.random() * (b - a) + a;
}

//rendering function
function drawCircle(ctx, circle) {
  //circle.radius *= circleExp;
  var radius = circle.background ? circle.radius *= circleExp : circle.radius /= circleExp;
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, radius * circleExp, 0, 2 * Math.PI, false);
  ctx.lineWidth = Math.max(1, circleBorder * (radMin - circle.radius) / (radMin - radMax));
  ctx.strokeStyle = ['rgba(', circle.borderColor, ',', circle.opacity, ')'].join('');
  if (circle.filled == 'full') {
    ctx.fillStyle = ['rgba(', circle.borderColor, ',', circle.background ? circle.opacity * 0.8 : circle.opacity, ')'].join('');
    ctx.fill();
    ctx.lineWidth=0;
    ctx.strokeStyle = ['rgba(', circle.borderColor, ',', 0, ')'].join('');
  }
  ctx.stroke();
  if (circle.filled == 'concentric') {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, radius / 2, 0, 2 * Math.PI, false);
    ctx.lineWidth = Math.max(1, circleBorder * (radMin - circle.radius) / (radMin - radMax));
    ctx.strokeStyle = ['rgba(', circle.color, ',', circle.opacity, ')'].join('');
    ctx.stroke();
  }
  circle.x += circle.speedx;
  circle.y += circle.speedy;
  if (circle.opacity < (circle.background ? maxOpacity : 1)) circle.opacity += 0.01;
  circle.ttl--;
}

//initializing function
function init() {
  window.requestAnimationFrame(draw);
}

//rendering function
function draw() {

  if (circlePulse) {
    if (circleExp < circleExpMin || circleExp > circleExpMax) circleExpSp *= -1;
    circleExp += circleExpSp;
  }
  var ctxfr = document.getElementById('canvas').getContext('2d');
  var ctxbg = document.getElementById('canvasbg').getContext('2d');

  ctxfr.globalCompositeOperation = 'destination-over';
  ctxfr.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
  ctxbg.globalCompositeOperation = 'destination-over';
  ctxbg.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

  ctxfr.save();
  ctxfr.translate(canvas.width / 2, canvas.height / 2);
  ctxbg.save();
  ctxbg.translate(canvas.width / 2, canvas.height / 2);

  //function to render each single circle, its connections and to manage its out of boundaries replacement
  function renderPoints(ctx, arr) {
    for (var i = 0; i < arr.length; i++) {
      var circle = arr[i];
      //checking if out of boundaries
      if (circle.ttl<0) {}
      var xEscape = canvas.width / 2 + circle.radius,
        yEscape = canvas.height / 2 + circle.radius;
      if (circle.ttl < -20) arr[i].init(arr[i].background);
      //if (Math.abs(circle.y) > yEscape || Math.abs(circle.x) > xEscape) arr[i].init(arr[i].background);
      drawCircle(ctx, circle);
    }
    for (var i = 0; i < arr.length - 1; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        var deltax = arr[i].x - arr[j].x;
        var deltay = arr[i].y - arr[j].y;
        var dist = Math.pow(Math.pow(deltax, 2) + Math.pow(deltay, 2), 0.5);
        //if the circles are overlapping, no laser connecting them
        if (dist <= arr[i].radius + arr[j].radius) continue;
        //otherwise we connect them only if the dist is < linkDist
        if (dist < linkDist) {
          var xi = (arr[i].x < arr[j].x ? 1 : -1) * Math.abs(arr[i].radius * deltax / dist);
          var yi = (arr[i].y < arr[j].y ? 1 : -1) * Math.abs(arr[i].radius * deltay / dist);
          var xj = (arr[i].x < arr[j].x ? -1 : 1) * Math.abs(arr[j].radius * deltax / dist);
          var yj = (arr[i].y < arr[j].y ? -1 : 1) * Math.abs(arr[j].radius * deltay / dist);
          ctx.beginPath();
          ctx.moveTo(arr[i].x + xi, arr[i].y + yi);
          ctx.lineTo(arr[j].x + xj, arr[j].y + yj);
          var samecolor = arr[i].color == arr[j].color;
          ctx.strokeStyle = ["rgba(", arr[i].borderColor, ",", Math.min(arr[i].opacity, arr[j].opacity) * ((linkDist - dist) / linkDist), ")"].join("");
          ctx.lineWidth = (arr[i].background ? lineBorder * backgroundMlt : lineBorder) * ((linkDist - dist) / linkDist); //*((linkDist-dist)/linkDist);
          ctx.stroke();
        }
      }
    }
  }

  var startTime = Date.now();
  renderPoints(ctxfr, points);
  renderPoints(ctxbg, pointsBack);
  deltaT = Date.now() - startTime;

  ctxfr.restore();
  ctxbg.restore();

  window.requestAnimationFrame(draw);
}

init();

/**/
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = '';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
  
  (function() {
    var time = new Date(), //we get this time from our pc time not from server
    second = time.getSeconds() / 60 * 360,
    minute = time.getMinutes() / 60 * 360 + time.getSeconds() / 60 *6,
    hour = time.getHours() / 12 * 360 + time.getMinutes() /60 * 30,
    animation = [
      "@keyframes sec-hand{from{transform: rotate(" + second + "deg);}to{transform: rotate(" + (second  + 360) + "deg);}}",
      "@keyframes min-hand{from{transform: rotate(" + minute + "deg);}to{transform: rotate(" + (minute + 360) + "deg);}}",
      "@keyframes hr-hand{from{transform: rotate(" + hour + "deg);}to{transform: rotate(" + (hour + 360) + "deg);}}"
    ].join("");
    document.querySelector("#clock-animate").innerHTML = animation;
  })();
  
  //EXAMPLE TO GET EXACT TIME IN READABLE FORMATE
  // function abc(){
  //   var time = new Date;
  //   var hr = time.getHours();
  //   var min = time.getMinutes();
  //   var sec = time.getSeconds();
  //   alert(hr + "hr " + min + "min " + sec + "sec ");
  // }
  // abc();

	var ParticleEngine = (function() {
    'use strict';
  
    function ParticleEngine(canvas_id) {
      // enforces new
      if (!(this instanceof ParticleEngine)) {
        return new ParticleEngine(args);
      }
      
      var _ParticleEngine = this;
  
      this.canvas_id = canvas_id;
      this.stage = new createjs.Stage(canvas_id);
      this.totalWidth = this.canvasWidth = document.getElementById(canvas_id).width = document.getElementById(canvas_id).offsetWidth;
      this.totalHeight = this.canvasHeight = document.getElementById(canvas_id).height = document.getElementById(canvas_id).offsetHeight;
      this.compositeStyle = "lighter";
  
      this.particleSettings = [{id:"small", num:300, fromX:0, toX:this.totalWidth, ballwidth:3, alphamax:0.4, areaHeight:.5, color:"#0cdbf3", fill:false}, 
                  {id:"medium", num:100, fromX:0, toX:this.totalWidth,  ballwidth:8, alphamax:0.3, areaHeight:1, color:"#6fd2f3", fill:true}, 
                  {id:"large", num:10, fromX:0, toX:this.totalWidth, ballwidth:30,  alphamax:0.2, areaHeight:1, color:"#93e9f3", fill:true}];
      this.particleArray = [];
      this.lights = [{ellipseWidth:400, ellipseHeight:100, alpha:0.6, offsetX:0, offsetY:0, color:"#6ac6e8"}, 
              {ellipseWidth:350, ellipseHeight:250, alpha:0.3, offsetX:-50, offsetY:0, color:"#54d5e8"}, 
              {ellipseWidth:100, ellipseHeight:80, alpha:0.2, offsetX:80, offsetY:-50, color:"#2ae8d8"}];
  
      this.stage.compositeOperation = _ParticleEngine.compositeStyle;
  
  
      function drawBgLight()
      {
        var light;
        var bounds;
        var blurFilter;
        for (var i = 0, len = _ParticleEngine.lights.length; i < len; i++) {				
          light = new createjs.Shape();
          light.graphics.beginFill(_ParticleEngine.lights[i].color).drawEllipse(0, 0, _ParticleEngine.lights[i].ellipseWidth, _ParticleEngine.lights[i].ellipseHeight);
          light.regX = _ParticleEngine.lights[i].ellipseWidth/2;
          light.regY = _ParticleEngine.lights[i].ellipseHeight/2; 
          light.y = light.initY = _ParticleEngine.totalHeight/2 + _ParticleEngine.lights[i].offsetY;
          light.x = light.initX =_ParticleEngine.totalWidth/2 + _ParticleEngine.lights[i].offsetX;
  
          blurFilter = new createjs.BlurFilter(_ParticleEngine.lights[i].ellipseWidth, _ParticleEngine.lights[i].ellipseHeight, 1);
          bounds = blurFilter.getBounds();
          light.filters = [blurFilter];
          light.cache(bounds.x-_ParticleEngine.lights[i].ellipseWidth/2, bounds.y-_ParticleEngine.lights[i].ellipseHeight/2, bounds.width*2, bounds.height*2);
          light.alpha = _ParticleEngine.lights[i].alpha;
  
          light.compositeOperation = "screen";
          _ParticleEngine.stage.addChildAt(light, 0);
  
          _ParticleEngine.lights[i].elem = light;
        }
  
        TweenMax.fromTo(_ParticleEngine.lights[0].elem, 10, {scaleX:1.5, x:_ParticleEngine.lights[0].elem.initX, y:_ParticleEngine.lights[0].elem.initY},{yoyo:true, repeat:-1, ease:Power1.easeInOut, scaleX:2, scaleY:0.7});
        TweenMax.fromTo(_ParticleEngine.lights[1].elem, 12, { x:_ParticleEngine.lights[1].elem.initX, y:_ParticleEngine.lights[1].elem.initY},{delay:5, yoyo:true, repeat:-1, ease:Power1.easeInOut, scaleY:2, scaleX:2, y:_ParticleEngine.totalHeight/2-50, x:_ParticleEngine.totalWidth/2+100});
        TweenMax.fromTo(_ParticleEngine.lights[2].elem, 8, { x:_ParticleEngine.lights[2].elem.initX, y:_ParticleEngine.lights[2].elem.initY},{delay:2, yoyo:true, repeat:-1, ease:Power1.easeInOut, scaleY:1.5, scaleX:1.5, y:_ParticleEngine.totalHeight/2, x:_ParticleEngine.totalWidth/2-200});
      }
      
      var blurFilter;
      function drawParticles(){
  
        for (var i = 0, len = _ParticleEngine.particleSettings.length; i < len; i++) {
          var ball = _ParticleEngine.particleSettings[i];
  
          var circle;
          for (var s = 0; s < ball.num; s++ )
          {
            circle = new createjs.Shape();
            if(ball.fill){
              circle.graphics.beginFill(ball.color).drawCircle(0, 0, ball.ballwidth);
              blurFilter = new createjs.BlurFilter(ball.ballwidth/2, ball.ballwidth/2, 1);
              circle.filters = [blurFilter];
              var bounds = blurFilter.getBounds();
              circle.cache(-50+bounds.x, -50+bounds.y, 100+bounds.width, 100+bounds.height);
            }else{
              circle.graphics.beginStroke(ball.color).setStrokeStyle(1).drawCircle(0, 0, ball.ballwidth);
            }
            
            circle.alpha = range(0, 0.1);
            circle.alphaMax = ball.alphamax;
            circle.distance = ball.ballwidth * 2;
            circle.ballwidth = ball.ballwidth;
            circle.flag = ball.id;
            _ParticleEngine.applySettings(circle, ball.fromX, ball.toX, ball.areaHeight);
            circle.speed = range(2, 10);
            circle.y = circle.initY;
            circle.x = circle.initX;
            circle.scaleX = circle.scaleY = range(0.3, 1);
  
            _ParticleEngine.stage.addChild(circle);
            
  
            animateBall(circle);
  
            _ParticleEngine.particleArray.push(circle);
          }
        }	
      }
  
      this.applySettings = function(circle, positionX, totalWidth, areaHeight)
      {
        circle.speed = range(1, 3);
        circle.initY = weightedRange(0, _ParticleEngine.totalHeight , 1, [_ParticleEngine.totalHeight * (2-areaHeight/2)/4, _ParticleEngine.totalHeight*(2+areaHeight/2)/4], 0.8 );
        circle.initX = weightedRange(positionX, totalWidth, 1, [positionX+ ((totalWidth-positionX))/4, positionX+ ((totalWidth-positionX)) * 3/4], 0.6);
      }
  
      function animateBall(ball)
      {
        var scale = range(0.3, 1);
        var xpos = range(ball.initX - ball.distance, ball.initX + ball.distance);
        var ypos = range(ball.initY - ball.distance, ball.initY + ball.distance);
        var speed = ball.speed;
        TweenMax.to(ball, speed, {scaleX:scale, scaleY:scale, x:xpos, y:ypos, onComplete:animateBall, onCompleteParams:[ball], ease:Cubic.easeInOut});	
        TweenMax.to(ball, speed/2, {alpha:range(0.1, ball.alphaMax), onComplete:fadeout, onCompleteParams:[ball, speed]});	
      }	
  
      function fadeout(ball, speed)
      {
        ball.speed = range(2, 10);
        TweenMax.to(ball, speed/2, {alpha:0 });
      }
  
      drawBgLight();
      drawParticles();
    }
  
    ParticleEngine.prototype.render = function()
    {
      this.stage.update();
    }
  
    ParticleEngine.prototype.resize = function()
    {
      this.totalWidth = this.canvasWidth = document.getElementById(this.canvas_id).width = document.getElementById(this.canvas_id).offsetWidth;
      this.totalHeight = this.canvasHeight = document.getElementById(this.canvas_id).height = document.getElementById(this.canvas_id).offsetHeight;
      this.render();
  
      for (var i= 0, length = this.particleArray.length; i < length; i++)
      {
        this.applySettings(this.particleArray[i], 0, this.totalWidth, this.particleArray[i].areaHeight);
      }
  
      for (var j = 0, len = this.lights.length; j < len; j++) {
        this.lights[j].elem.initY = this.totalHeight/2 + this.lights[j].offsetY;
        this.lights[j].elem.initX =this.totalWidth/2 + this.lights[j].offsetX;
        TweenMax.to(this.lights[j].elem, .5, {x:this.lights[j].elem.initX, y:this.lights[j].elem.initY});			
      }
    }
  
    return ParticleEngine;
  
  }());
  
  
  ////////////////////////UTILS//////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  
  function range(min, max)
  {
    return min + (max - min) * Math.random();
  }
      
  function round(num, precision)
  {
     var decimal = Math.pow(10, precision);
     return Math.round(decimal* num) / decimal;
  }
  
  function weightedRange(to, from, decimalPlaces, weightedRange, weightStrength)
  {
    if (typeof from === "undefined" || from === null) { 
        from = 0; 
    }
    if (typeof decimalPlaces === "undefined" || decimalPlaces === null) { 
        decimalPlaces = 0; 
    }
    if (typeof weightedRange === "undefined" || weightedRange === null) { 
        weightedRange = 0; 
    }
    if (typeof weightStrength === "undefined" || weightStrength === null) { 
        weightStrength = 0; 
    }
  
     var ret
     if(to == from){return(to);}
   
     if(weightedRange && Math.random()<=weightStrength){
      ret = round( Math.random()*(weightedRange[1]-weightedRange[0]) + weightedRange[0], decimalPlaces )
     }else{
      ret = round( Math.random()*(to-from)+from, decimalPlaces )
     }
     return(ret);
  }
  

  
});
