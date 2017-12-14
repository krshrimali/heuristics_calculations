var numberOfRows; //determine the number of rows we want
var numberOfColumns; //determine the number of columns we want

var xStep; //determine the size of the gap between two points on the x axis
var yStep; //determine the size of the gap between two points on the y axis

var positions = []; //an array of positions where we will store each of our Vectors

function setup(){
  createCanvas(500, 500);
  console.log(width);
  console.log(height);
  numberOfColumns = 16; //we want 16 columns
  numberOfRows = 16; //we want 9 rows
  
  xStep = width/numberOfColumns; //to make sure they are evenly spaced, we divide the width and height by numberOfColumns
  yStep = height/numberOfRows; //and numberOfRows respectively
  
  for(var x = 0; x <= width; x += xStep){ //start at the first column, where x = 0
  
    for(var y = 0; y <= height; y += yStep){ //go through all the rows (y = 0, y = yStep * 1, y  = yStep * 2, etc.)
    
      var p = createVector(x, y); //we create a vector at this location
      
      positions.push(p); // and then we put the vector into the array
      
    }
    //at the end of the inner for loop, we go back to the first loop, and we increment x
    //now our column is going to be x = xStep*1, and we populate all the rows with the inner for loop
    //and again, and again until x > width
  }
}

function draw(){
  fill(250, 100, 100); //pink is cool
  
  for(var i = 0; i < positions.length; i++){ //go through all our positions
    line(positions[i].x, positions[i].y, positions[i].x + height, positions[i].y); //put a circle at each of them
    line(positions[i].x, positions[i].y, positions[i].x, positions[i].y + width);
  }
}
