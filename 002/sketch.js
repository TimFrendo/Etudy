 
 let boundaries;
 let vertexs = [];  
 let V = 49;

  function preload() {    
    boundaries = new symbolGraph('boundaries.txt');
  }
  function setup() {
    createCanvas(700, 700);
    background(0);
    boundaries.getAllVertex();
    boundaries.getListAdj();
    boundaries.getKeys();

    

    for(let i = 0; i < V; i++){
      vertexs[i] = new Vertex(random(width), random(height));
      vertexs[i].setName(boundaries.allVertex[i]);
      //vertexs[i].draw()
    }
    for(let i = 0; i < V; i++){
      //print(boundaries.keys[i] +  ":");let s = " ";
      for(let b of boundaries.adj[i]){
        
        //s += boundaries.keys[b] + " ";
        
        vertexs[i].drawEdge(vertexs[b]);        
      }
      //print(s)
    }

    for(let v of vertexs)
      v.draw();

    
    /*print(boundaries.allVertex)
    print(boundaries.adj)
    print(boundaries.keys)*/
    
  }
  
  function draw() {
    
}

function mouseIsPressed(){
  
}
  
  

  