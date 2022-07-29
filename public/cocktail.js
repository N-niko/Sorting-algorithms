
class Cocktail {
  
    constructor (ar) {
      this.l = ar.length;
      this.I = 0;
      this.s = 0;
      this.ar = ar;
      this.b = 0;
      this.stop = 1;
      this.c = this.l;
      this.m = 0;
      this.dif = 1;
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
      this.s += this.dif;
      
      if (this.s == this.c && this.dif == 1 || this.s == this.m && this.dif == -1) {
        if (this.dif == 1)
          this.c--;
        else 
          this.m++;
        
        this.dif = -this.dif;
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
  
  
  