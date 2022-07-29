

class Counting {
  
    constructor (ar) {
      this.l = ar.length;
      this.I = 0;
      this.s = 0;
      this.ar = ar;
      this.nar = [];
      this.sar = [];
      this.b = 0;
      this.max = -1;
      this.stop = 1;
      this.stepc = 0;
      this.ans = [];
      this.sd = C (this.l);
      
    }
    
    start () {
      for (let i = 0; i < this.l; i++) {
        this.sar[i] = this.ar[i] = floor (this.ar[i]);
      }
      this.stop = 0;
      this.stepc = 0;
    }
    
    pause () {
      this.stop = 1;
    }
    
    step () {
      if (this.stop) return;
      this.I = this.s;
      
      if (this.stepc == 0) {
        
        if (this.ar[this.s] > this.max) 
          this.max = this.ar[this.s];  
        this.s++;
        if (this.s == this.l) {
          this.s = 0;
          this.stepc++;  
          for (let i = 0; i <= this.max; i++) {
            this.nar[i] = 0;
          }
        }
        
      } else if (this.stepc == 1) {
        
        this.nar[this.sar[this.s]]++;
        this.s++;
        if (this.s == this.l) {
          this.s = 0;
          this.stepc++;  
          
          for (let i = 1; i <= this.max; i++) {
            this.nar[i] += this.nar[i - 1];
          }
        }
        
      } else if (this.stepc == 2) {
        this.I = this.nar[this.sar[this.s]];
        
        this.ar[this.nar[this.sar[this.s]] - 1] = this.sar[this.s]; 
        this.nar[this.sar[this.s]]--; 
        this.s++;
        
        if (this.s == this.l) {
          this.stop = 1;
          
        }
      }
      
      
    }
    
    
  }
  
  
  