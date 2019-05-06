class symbolGraph{
    constructor(path) {
        this.path = loadStrings(path);
        this.dict = new Map();
        this.allVertex = new Array();
        this.adj = [];
        this.keys = [];
        this.adjSymbols = [];
        
    }


    getAllVertex(){
        for (let line of this.path){
            let points = split(line, ' ');
            for(let point of points){
              if(!this.allVertex.includes(point))
                this.allVertex.push(point);
            }
        }

        for(let i = 0; i < this.allVertex.length; i++){
            this.adj[i] = []; 
           }
    }
    
  
    strToNumber(){
        for (let i of this.allVertex) {
            this.dict.set(i, this.dict.size);      
          }
    }

    addEdge(v, w){
        this.adj[v].push(w)
        this.adj[w].push(v)
      }

      getListAdj(){
        this.strToNumber();
        for(let line of this.path){
            let s = split(line, ' ');       
            this.addEdge(this.index(s[0]), this.index(s[1]))
         }
      }

      getKeys(){
        for(let key of this.dict.keys()){
          this.keys[this.dict.get(key)] = key;
        }
      }


      

      index(s){
        return this.dict.get(s)
      }
}
  
  
    
    
    

   