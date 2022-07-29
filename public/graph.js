
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
          fill (30, 110, 200);
        else if (p && p == i)
          fill (30, 200, 140);
        else
          fill (150, 150, 170);
        
        noStroke ();
        rect (i * this.w, height, this.w * 0.8, -this.g[i]);
        
      }
      
    }
    
    
    
  }
  
  
  