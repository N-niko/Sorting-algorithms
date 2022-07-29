
class Selection {
  
    constructor (ar) {
      this.l = ar.length;
      this.I = 0;
      this.s = 0;
      this.b = 0;
      this.ar = ar;
      this.stop = 1;
      this.m = height + 1;
      this.w = 0;
    }
    
    start () {
      this.stop = 0;
    }
    
    pause () {
      this.stop = 1;
    }
    
    step () {
      if (this.stop) return;
      this.I = this.s;
      
      if (this.ar[this.s] < this.m) {
        this.m = this.ar[this.s];
        this.w = this.s;
      }
      
      this.s++;
      if (this.s == this.l) {
        
        if (this.ar[this.b] != this.ar[this.w]) 
          this.swap (this.b, this.w);
      
        this.b++;
        this.s = this.b;
        this.m = height + 1;
        this.w = this.b;
        
      }
      
      if (this.b == this.l) {
        this.stop = 1;
      }
      
    }
    
    swap (i, j) {
      let a = this.ar[i];
      this.ar[i] = this.ar[j];
      this.ar[j] = a;
    }
    
  }
  
  
  
  