/*let boundaries = [
    ['a', 'b'],
    ['a', 'e'],
    ['b', 'c'],
    ['b', 'f'],
    ['c', 'd'],
    ['c', 'i'],
    ['d', 'j'],
    ['e', 'f'],
    ['f', 'l'],
    ['j', 'n'],
    ['k', 'l'],
    ['l', 'm'],
    ['m', 'p'],
    ['o', 'p']
];*/
 let boundaries = []; 

  function preload() {
    boundaries = loadStrings('boundaries.txt');
  }

  let b = new Map();
  let boundary = [];
  
  let adj = [];
  let keys = [];
  
  function setup() {
    createCanvas(400, 400);
    //print(boundaries)

    for (let line of boundaries){
      let points = split(line, ' ');
      for(let point of points){
        if(!boundary.includes(point))
          boundary.push(point)
      }
    }
    
  
    for (let i of boundary) {
      b.set(i, b.size);      
    }
    for(let i = 0; i < boundary.length; i++){
     adj[i] = []; 
    }
    
    for(let line of boundaries){
       let s = split(line, ' ');       
      addEdge(index(s[0]), index(s[1]))
    }

    for(let key of b.keys()){
      keys[b.get(key)] = key;
    }
    
    print(b)
   
    print(adj)
    print(keys)
  }
  
  function draw() {
    background(220);
  }
  
  function addEdge(v, w) {
    adj[v].push(w)
    adj[w].push(v)
  }
  
  function index(s){
    return b.get(s)
  }

  