
class Graph {
  
    constructor () {
      this.g = [];
      this.w = width / Q;
      for (let i = 0; i < Q; i++) {
        this.g.push (random (2, height));
      }
      
    }
    
    show (s = undefined, p = undefined) {
      
      for (let i = 0; i < this.g.length; i++) {
        
        if (s && s == i)
          fill (140, 30, 20);
        else if (p && p == i)
          fill (30, 20, 140);
        else
          fill (110, 130, 70);
        
        noStroke ();
        rect (i * this.w, height, this.w, -this.g[i]);
        
      }
      
    }
    
    
    
  }
  
  
  