
class Merge { 
  
    constructor (ar) {
      this.l = ar.length;
      this.I = 0;
      this.s = 0;
      this.ar = ar;
      this.b = 0;
      this.stop = 1;
      this.sm = [];
      this.k = 0;
      this.i = 0;
      this.j = 0;
      this.ra = [];
      this.rb = [];
      this.sd = C (this.l);
      
    }
    
    start () {
      this.stop = 0;
      this.mergeS (0, this.l - 1);
      this.k = this.i = this.j = 0;
      
      let sm = this.sm[0];
      let n1 = sm.m - sm.l + 1; 
      let n2 = sm.r - sm.m; 
      
      for (let i = 0; i < n1; i++)
        this.ra[i] = this.ar[sm.l + i];
      for (let i = 0; i < n2; i++) 
        this.rb[i] = this.ar[sm.m + 1 + i];
      
    }
    
    pause () {
      this.stop = 1;
    }
    
    step () {
      if (this.stop) return;
      this.I = this.k;
      
      let sm = this.sm[this.s];
      let fsm = this.sm[this.s + 1];
      if (this.merge (sm.l, sm.m, sm.r)) {
        this.s++;
        
        if (fsm) {
          this.i = this.j = 0;
          this.k = fsm.l;
  
          let n1 = fsm.m - fsm.l + 1; 
          let n2 = fsm.r - fsm.m; 
  
          for (let i = 0; i < n1; i++)
            this.ra[i] = this.ar[fsm.l + i];
          for (let i = 0; i < n2; i++) 
            this.rb[i] = this.ar[fsm.m + 1 + i];
        }
        
      }
      
      
      
      //this.s++;
      if (this.s == this.sm.length)
        this.stop = 1;
    }
    
    merge (l, m, r) {
      let ar = this.ar;
      
      let n1 = m - l + 1; 
      let n2 = r - m; 
      
      //let i = 0, j = 0; //, k = l;
      if (this.i < n1 && this.j < n2) { 
        if (this.ra[this.i] <= this.rb[this.j]) { 
          this.ar[this.k] = this.ra[this.i]; 
          this.i++; 
        } 
        else { 
          this.ar[this.k] = this.rb[this.j]; 
          this.j++; 
        } 
        this.k++; 
        
      } else if (this.i < n1) { 
        this.ar[this.k] = this.ra[this.i]; 
        this.i++; 
        this.k++; 
        
      } else if (this.j < n2) { 
        this.ar[this.k] = this.rb[this.j]; 
        this.j++; 
        this.k++; 
        
      }
      
      
      if (this.i == n1 && this.j == n2)
        return 1;
      
    }
    
    mergeS (l, r) {
      if (r <= l) return;
      
      let m = l + int ((r - l) / 2);
      
      this.mergeS (l, m);
      this.mergeS (m + 1, r);
      
      this.sm.push ({ l: l, m: m, r: r });
      //this.merge (l, m, r);
      
    }
    
    
    
    
  }
  
  
  
  
  
  
  
  
  
  
  