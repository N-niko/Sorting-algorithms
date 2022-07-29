
class Insertion {
  
    constructor (ar) {
      this.l = ar.length;
      this.s = 1;
      this.ar = ar;
      this.b = 1;
      this.stop = 1;
      this.sd = 1.5;
      
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
      
      if (this.ar[this.s] < this.ar[this.s - 1]) 
        this.swap (this.s, this.s - 1);
      else 
        this.s = -1;
      
      this.s--;
      
      if (this.s < 0) {
        this.b++;
        this.s = this.b;
      }
      
      if (this.b == this.l)
        this.stop = 1;
      
    }
    
    swap (i, j) {
      let a = this.ar[i];
      this.ar[i] = this.ar[j];
      this.ar[j] = a;
    }
    
    
  }
  
  
  
  
  
  