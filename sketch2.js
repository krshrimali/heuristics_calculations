var numberOfRows;
var numberOfColumns; 

var xStep;
var yStep; 

var positions = []; 
var items = [];
function Euclidean(){
  // console.log("YOu are typing: ", this.value());
  // console.log("Items is: ", items);
  if(items.length >= 2){
    var item1 = items.pop();
    var item2 = items.pop();
    // console.log(item1, item2);
    // strokeWeight(3);
    line(item1.x, item1.y, item2.x, item2.y);
    distance = sqrt(pow((item1.x - item2.x),2) + pow((item2.y - item1.y),2));
    string_e = "SLD: " + str(round(distance));
    text(string_e, (item1.x + item2.x)/2, (item1.y + item2.y)/2);

    console.log("Euclidean distance is: ", distance);
  }
}

function Manhattan(){
  if(items.length >= 2){
    var item1 = items.pop();
    var item2 = items.pop();
    // strokeWeight(2);
    line(item1.x, item1.y, item2.x, item1.y);
    // strokeWeight(5);
    // stroke(155);
    line(item2.x, item1.y, item2.x, item2.y);
    distance1 = abs(item1.x - item2.x) + abs(item1.y - item2.y);
    string = "MD : " + str(round(distance1));
    text(string, (item1.x + item2.x)/2, item1.y - 20);
    console.log("Manhattan distance is: ", distance1); 
  }
}
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
  // var inp = createInput('Enter two values: ');
  // inp.input(Euclidean);
} 

function draw(){
  // console.log(positions);
  fill(250, 100, 100); 
  // alphabet =  1;
  for(var i = 0; i < positions.length; i++){ //go through all our positions
    // line(positions[i].x, positions[i].y, positions[i].x + height, positions[i].y); //put a circle at each of them
    // line(positions[i].x, positions[i].y, positions[i].x, positions[i].y + width);
    ellipse(positions[i].x, positions[i].y, 3, 3);
    // text(positions[i].z, positions[i].x, positions[i].y);
    // text(alphabet, positions[i].x, positions[i].y + 3);
    // alphabet += 1;
  }
  line(500, 0, 500, 500);
  // canvas.mouseOver(showElement);
}

function keyPressed() {
  if(keyCode == RETURN) {
    Manhattan();
  }
  else if(keyCode == ESCAPE) {
    Euclidean();
  }
}

// function showElement(A, B){
//   text("Kush", A, B);
//   console.log(A, B);
// }

function mousePressed(){
  var flagA = 0;
  var flagB = 0;
  console.log("Mouse pressed");
  console.log(mouseX, mouseY);
  console.log("xStep is: ", xStep);
  console.log("yStep is: ", yStep);
  for(var i = 0; i < positions.length; i++){
    if(abs(mouseX - positions[i].x) < xStep && flagA == 0 && abs(mouseY - positions[i].y) < yStep && flagB == 0){
      var A = positions[i].x;
      flagA = 1;
      console.log("flagA, A", flagA, A);
      var B = positions[i].y;
      flagB = 1;      // console.log("")
      var index = i;
      var p = createVector(A, B);
      items.push(p);
      // console.log("Items is: ", items);
      console.log("Index is: ", i);
      text(positions[index].z, A, B);
    }
  }
  // if(mouseX in positions){
  //   console.log("Yes!")
  // }
  // text(positions[index].z, A, B);
}