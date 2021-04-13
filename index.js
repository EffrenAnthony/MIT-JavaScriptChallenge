var velocityX = 5;
var velocityY = 7;
var positionX = 0;
var positionY = 0;
var current_color = "rgb(255,255,255)";
var ball = document.getElementById('ball');
var counter = 0;

var create = function(x,y,color, radius, id){
  // set div attributes
  var div = document.createElement('div');
  div.id = 'ball';
  div.style.zIndex = '10';
  div.style.position = 'absolute';    
  div.style.left = x + 'px';    
  div.style.top = y + 'px';    
  div.style.width = '50px';    
  div.style.height = '50px';    
  div.style.borderRadius = radius;
  div.style.background = color;    

  // Then append the whole thing onto the body
  div.setAttribute("id", id);
  document.getElementsByTagName('body')[0].appendChild(div);  

  return div;        
};


function moveBall() {
  var r = Math.floor(255*(Math.random()));
  var g = Math.floor(255*(Math.random()));
  var b = Math.floor(255*(Math.random()));        
  var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  if (positionX >= 750) {
    counter++;
    ball.style.background = color
    ball.style.borderRadius = Math.floor(50*(Math.random())).toString() + '%';
    create(positionX,positionY, color, Math.floor(50*(Math.random())).toString() + '%',counter.toString())
    velocityX *= -1
    
  } else if (positionX === 0){
    counter++;
    ball.style.background = color
    ball.style.borderRadius = Math.floor(50*(Math.random())).toString() + '%';
    create(positionX,positionY, color, Math.floor(50*(Math.random())).toString() + '%',counter.toString())
    velocityX *= -1
  }
  if (positionY >= 1200) {
    counter++;
    ball.style.background = color
    ball.style.borderRadius = Math.floor(50*(Math.random())).toString() + '%';
    create(positionX,positionY, color, Math.floor(50*(Math.random())).toString() + '%',counter.toString())
    velocityY *= -1
  } else if (positionY === 0){
    counter++;
    ball.style.background = color
    ball.style.borderRadius = Math.floor(50*(Math.random())).toString() + '%';
    create(positionX,positionY, color, Math.floor(50*(Math.random())).toString() + '%',counter.toString())
    velocityY *= -1
  }
  positionX = positionX - velocityX;
  positionY = positionY - velocityY;
  ball.style.left = positionX + 'px';
  ball.style.top = positionY + 'px';
}


const buildFrame = setInterval(moveBall, 0.1)


const printMonaLisa = () => {
  var length = data.length;
  var i = 0;
  var interval = setInterval(function () {
    createMagic(data[i].x, data[i].y, data[i].color)
    i++;
  
    if (i == length) {
      window.clearInterval(interval)
      window.clearInterval(buildFrame)
    }
  }, 0.1)
}
// setTimeout(printMonaLisa, 4200000);
setTimeout(printMonaLisa, 10000);

