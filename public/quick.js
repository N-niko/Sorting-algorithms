
class Quick {
  
    constructor (ar) {
      this.l = ar.length;
      this.I = 0;
      this.w = 0;
      this.s = 0;
      this.ar = ar;
      this.sar = [];
      this.sws = [];
      this.stop = 1;
      this.sd = C (this.l);
      
    }
    
    start () {
      this.stop = 0;
      for (let i = 0; i < this.ar.length; i++)
        this.sar.push (this.ar[i]);
      
      this.quick (0, this.l - 1);
    }
    
    pause () {
      this.stop = 1;
    }
    
    step () {
      if (this.stop) return;
      this.I = this.sws[this.s].i;
      this.w = this.sws[this.s].j;
      
      this.swap (this.sws[this.s].i, this.sws[this.s].j);
      this.s++;
      
      if (this.s == this.sws.length)
        this.stop = 1;
      
    }
    
    quick (l, h) {
      if (l >= h) return;
      
      let p = this.partition (l, h);
      
      this.quick (l, p - 1);
      this.quick (p + 1, h);
      
    }
    
    partition (l, h) {
      let ar = this.sar;
      let piv = ar[h];
      let i = l - 1;
      
      for (let j = l; j < h; j++) {
        
        if (ar[j] < piv) {
          i++;
          let a = this.sar[i];
          this.sar[i] = this.sar[j];
          this.sar[j] = a;
          
          this.sws.push ({ i: i, j: j });
          
        }
      }
      let a = this.sar[i + 1];
      this.sar[i + 1] = this.sar[h];
      this.sar[h] = a;
      
      this.sws.push ({ i: i + 1, j: h });
      return i + 1;
    }
    
  
    swap (i, j) {
      let a = this.ar[i];
      this.ar[i] = this.ar[j];
      this.ar[j] = a;
    }
    
    
  }
  
  
  
  