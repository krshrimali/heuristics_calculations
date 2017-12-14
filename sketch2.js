var numberOfRows;
var numberOfColumns; 

var xStep;
var yStep; 

var positions = []; 

function setup(){
  canvas = createCanvas(500, 500);
  console.log(width);
  console.log(height);
  numberOfColumns = 16; 
  numberOfRows = 16; 
  
  xStep = width/numberOfColumns; 
  yStep = height/numberOfRows; 
  
  var z = 1;
  for(var x = 0; x <= width; x += xStep){
    for(var y = 0; y <= height; y += yStep){
      z += 1
      var p = createVector(x, y, z);      
      positions.push(p);
    }
  }
} 

function draw(){
  console.log(positions);
  fill(250, 100, 100); 
  // alphabet =  1;
  for(var i = 0; i < positions.length; i++){ //go through all our positions
    line(positions[i].x, positions[i].y, positions[i].x + height, positions[i].y); //put a circle at each of them
    line(positions[i].x, positions[i].y, positions[i].x, positions[i].y + width);
    ellipse(positions[i].x, positions[i].y, 3, 3);
    // text(alphabet, positions[i].x, positions[i].y + 3);
    // alphabet += 1;
  }
  line(500, 0, 500, 500);
  // canvas.mouseOver(showElement);
}

// function showElement(A, B){
//   text("Kush", A, B);
//   console.log(A, B);
// }

function mousePressed(){
  var flagA = 0;
  var flagB = 0;
  console.log("Mouse pressed");
  for(var i = 0; i < positions.length; i++){
    if(mouseX % positions[i].x < xStep){
      var A = positions[i].x;
      flagA = 1;
      console.log(flagA, A);
    }
    if(mouseY % positions[i].y < yStep){
      var B = positions[i].y;
      flagB = 1;
      var index = i;
    }
    
  }
  // if(mouseX in positions){
  //   console.log("Yes!")
  // }
  text(positions[index].z, A, B);
}