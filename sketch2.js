var numberOfRows;
var numberOfColumns; 

var xStep;
var yStep; 

var positions = []; 

function setup(){
  createCanvas(500, 500);
  console.log(width);
  console.log(height);
  numberOfColumns = 16; 
  numberOfRows = 16; 
  
  xStep = width/numberOfColumns; 
  yStep = height/numberOfRows; 
  
  for(var x = 0; x <= width; x += xStep){
    for(var y = 0; y <= height; y += yStep){
      var p = createVector(x, y);      
      positions.push(p);
    }
  }
}

function draw(){
  fill(250, 100, 100); 
  
  for(var i = 0; i < positions.length; i++){ //go through all our positions
    line(positions[i].x, positions[i].y, positions[i].x + height, positions[i].y); //put a circle at each of them
    line(positions[i].x, positions[i].y, positions[i].x, positions[i].y + width);
  }
}
