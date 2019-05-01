let V = [];
let v;
let vertexs = ['a', 'b', 'c', 'd', 'e'];
let ee = [
  ['a', 'b'],
  ['a', 'd'],
  ['b', 'c']
];

function setup() {  
  createCanvas(700, 700);
  background(0);
 
  //v1 = new Vertex(random(width), random(height));
  for(let i = 0; i < vertexs.length; i++){
    
    V[i] = new Vertex(random(width), random(height));
    V[i].setName(vertexs[i]);
    V[i].draw();
  }
  
 
  
}

function draw() {
  //background(0);
 
}

function colored(){
 //v.setColor(100);
}