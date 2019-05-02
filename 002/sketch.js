let V = [];
let vertexs = ['a', 'b', 'c', 'd', 'e', 'f'];
let edges = [
    ['a', 'b'],
    ['a', 'd'],
    ['b', 'c'],
    ['b', 'e'],
    ['c', 'f'],
    ['d', 'e']
];

function setup() {
    createCanvas(700, 700);
    background(0);
    for (let i = 0; i < vertexs.length; i++) {
        V[i] = new Vertex(random(width), random(height));
        V[i].setName(vertexs[i], i);
        print(V[i].dict.name);
        V[i].draw();
    }

    for(let e of edges){        
        let v1;
        let v2;
        //print()
        for(let i = 0; i < vertexs.length; i++){
            if(e[0] == V[i].dict.name)
                v1 = V[i];
            if(e[1] == V[i].dict.name)
                v2 = V[i];
        }
        v1.drawEdge(v2);
    }


}

function draw() {
    

}

