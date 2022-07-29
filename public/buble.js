
class Buble {
  
    constructor (ar) {
      this.l = ar.length;
      this.I = 0;
      this.s = 0;
      this.ar = ar;
      this.b = 0;
      this.stop = 1;
      this.c = this.l;
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
      
      let s = this.s;
      if (this.ar[s] > this.ar[s + 1]) {
        this.swap (s, s + 1);
        
        this.b = 1;
      }
      this.s++;
      
      if (this.s == this.c) {
        this.c--;
        this.s = 0;
        if (!this.b)
          this.stop = 1;
        this.b = 0;
      }
    }
    
    swap (i, j) {
      let a = this.ar[i];
      this.ar[i] = this.ar[j];
      this.ar[j] = a;
    }
    
    
  }
  
  