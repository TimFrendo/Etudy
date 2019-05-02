class Vertex{
  
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.diameter = 50;
    this.color = 255;
    this.dict = {name : 'a', iter : 0};
    //this.dict = new Map();
  }
 
  setDiameter(diameter){
    this.diameter = diameter;
  }
  
  setColor(color){
    this.color = color;
  }
  
  setName(name, iter){
    this.dict = {name : name, iter : iter};
    //this.dict.set(iter, name);
  }

  draw(){
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
    this.showName();
  }

  clicked(x, y){
    let d = dist(this.x, this.y, x, y);    
    if(d <= this.diameter/2){
      print('it is vertex');
    }
  }

  showName(){
    fill(this.color - this.color);
    textSize(this.diameter/2);
    textAlign(CENTER, CENTER);
    text(this.dict.name, this.x, this.y);
  }

  drawEdge(vertex) {
    stroke('red');
    strokeWeight(4);
    line(this.x, this.y, vertex.x, vertex.y);
  }


}