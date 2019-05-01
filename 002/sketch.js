let V = [];
let vertexs = ['a', 'b', 'c', 'd', 'e'];
let edges = [
    ['a', 'b'],
    ['a', 'd'],
    ['b', 'c'],
    ['c', 'e']
];

function setup() {
    createCanvas(700, 700);
    background(0);
    for (let i = 0; i < vertexs.length; i++) {
        V[i] = new Vertex(random(width), random(height));
        V[i].setName(vertexs[i]);
        V[i].draw();
    }

    for(let e of edges){        
        let v1;
        let v2;
        for(let i = V.length - 1; i >=0; i--){
            if(e[0] == V[i].name)
                v1 = V[i];
            if(e[1] == V[i].name)
                v2 = V[i];            
        }
        v1.drawEdge(v2);
    }


}

function draw() {
    

}

