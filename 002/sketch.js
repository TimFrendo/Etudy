 
 let boundaries;
 let vertexs = [];  
 let V = 49;
 let choice;
 let x = [50, 190, 50, 125, 50, 190, 190, 305, 305, 305, 305, 390, 390, 390, 390, 390, 390, 495, 495, 495, 495, 495, 605, 605, 720, 720, 605, 720, 605, 720, 605, 720, 720, 825, 825, 825, 825, 825, 945, 945, 945, 945, 945, 1060, 1060, 1060, 1175, 1175, 1175]
 let y = [40, 40, 150, 150, 230, 230, 150, 40, 150, 230, 325, 150, 40, 230, 425, 325, 540, 40, 150, 230, 320, 425, 40, 150, 320, 430, 430, 40, 225, 130, 540, 540, 615, 130, 225, 315, 430, 540, 40, 130, 225, 320, 430, 40, 130, 225, 130, 225, 40]

  function preload() {    
    boundaries = new symbolGraph('boundaries.txt');
  }
  function setup() {
    createCanvas(1300, 700);
    
    boundaries.getAllVertex();
    boundaries.getListAdj();
    boundaries.getKeys();
    
    for(let i = 0; i < V; i++){
      vertexs[i] = new Vertex(x[i], y[i]);
      vertexs[i].setName(boundaries.allVertex[i]);
    }    
  }
  
  function draw() {
    background(0);
 
    for(let i = 0; i < V; i++){
      for(let b of boundaries.adj[i]){
        vertexs[i].drawEdge(vertexs[b]);        
      }
    }

    for(let v of vertexs)
      v.draw();
  }
      
function mousePressed() { 
 for(let v of vertexs)
    if(v.clicked(mouseX, mouseY))
      choice = v
  }
  
  function mouseDragged(){
    choice.setXY(mouseX, mouseY);
  }



  

  