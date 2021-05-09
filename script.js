
/*var x = 0;

let box = document.querySelector('.box');
        for(let x = 0; x<4; x++){
            let clone = box.cloneNode(true);
            document.body.appendChild(clone)
            clone.style.top = "10px";
            clone.style.left = "150px";
            clone.style.backgroundColor = "blue";

    
        }*/


  for(i=0; i < 4; i++){
      var cont = document.querySelector('#box');
      var box = document.createElement("div");
      box.id = "box";
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      box.style = "position:absolute;height: 80px;width: 80px;  ";
      box.style.top = Math.floor(Math.random() * 60) + "px";
      box.style.left = Math.floor(Math.random() * 60) + "px";
      box.style.background = "#" + randomColor;
      cont.append(box);
    }
    
    var box = document.querySelector("#box");
    var animate = setInterval(move, 1);
    var dx = 1;
    var dy = 1;
    positionX = 0;
    positionY = 200;
    
    function move() {
      positionX += dx;
      positionY += dy;
      box.style.left = positionX + "px";
      box.style.top = positionY + "px";
    
      if (positionX == 215 && positionY == 415) {
        dy = -1;
      }
      if (positionX == 420) {
        dx = -1;
        dy = -1;
      }
      if (positionY == 0) {
        dx = -1;
        dy = 1;
      }
      if (positionX == 0) {
        dy = +1;
        dx = +1;
      }
    
      if (positionY == 425) {
        dy = -1;
      }
    }
    
       
