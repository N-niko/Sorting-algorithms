
class Radix {
  
  constructor (ar) {
    this.l = ar.length;
    this.I = 0;
    this.s = 0;
    this.b = 0;
    this.ar = ar;
    this.nar = [];
    this.sar = [];
    this.stop = 1;
    this.m = height + 1;
    this.j = 1;
    this.stepc = 0;
    this.sd = C (this.l);
    
  }
  
  start () {
    this.stop = 0;
    
    
    for (let i = 0; i < this.l; i++) {
      this.sar[i] = this.ar[i] = floor (this.ar[i]);
    }
    for (let i = 0; i < this.m; i++) {
      this.nar.push (0);
    }
    
    //this.radix ();
  }
  
  pause () {
    this.stop = 1;
  }
  
  step () {
    if (this.stop) return;
    this.I = this.s;
    
    if (this.stepc == 0) {
      this.nar[floor (this.sar[this.s] / this.j) % 10]++;
      this.s++;
      
      if (this.s == this.l) {
        for (let i = 1; i < this.m; i++) {
          this.nar[i] += this.nar[i - 1];
        }
        this.s--;
        this.stepc++;
      }
    } else if (this.stepc == 1) {
      
      this.sar[this.nar[floor (this.ar[this.s] / this.j) % 10] - 1] = this.ar[this.s]; 
      this.nar[floor (this.ar[this.s] / this.j) % 10]--; 
      this.s--;
      
      if (this.s == -1) {
        this.stepc++;
      }
    } else if (this.stepc == 2) {
      
      this.ar[this.s] = this.sar[this.s];
      this.s++;
      if (this.s == this.l) {
        this.stepc = 0;
        this.j *= 10;
        this.s = 0;
        
        this.nar = [];
        for (let i = 0; i < this.m; i++) {
          this.nar.push (0);
        }
        
        if (this.j > 101) {
          this.stop = 1;
        }
      }
    }
    
    
    
  }
  
}


