
class Heap {
  
    constructor (ar) {
      this.l = ar.length;
      this.I = 0;
      this.w = 0;
      this.s = 0;
      this.ar = ar;
      this.stop = 1;
      this.sd = C (this.l);
      this.stepc = 0;
      this.L = 0;
      this.ss = 0;
      this.sto = false;
      
    }
    
    start () {
      this.l = gr.g.length;
      this.I = 0;
      this.w = 0;
      this.s = 0;
      this.ar = gr.g;
      this.stepc = 0;
      this.L = 0;
      this.ss = 0;
      this.sto = false;
      this.stop = 0;
      this.ss = this.s = this.l / 2 - 1;
      this.L = this.l;
      
      //this.heap ();
    }
    
    pause () {
      this.stop = 1;
    }
    
    step () {
      if (this.stop) return;
      this.I = this.s;
      
      if (this.stepc == 0) {
        
        let n1 = this.s * 2 + 1;
        let n2 = this.s * 2 + 2;
        let lar = this.s;
  
        if (n1 < this.L && this.ar[n1] > this.ar[lar])
          lar = n1;
  
        if (n2 < this.L && this.ar[n2] > this.ar[lar])
          lar = n2;
  
        if (lar != this.s) {
          
          this.swap (this.s, lar);
          this.s = lar;
          
        } else {
          if (this.sto) {
            this.stepc = 1;
            this.ss--;
            this.L = this.ss;
            return;
          }
          
          this.ss--;
          this.s = this.ss;
          if (this.s < 0) {
            this.ss = this.s = this.l - 1;
            this.stepc++;
            this.sto = true;
          }
        }
        
      } else if (this.stepc == 1) {
        
        this.swap (0, this.ss);
        this.s = 0;
        
        let n1 = this.s * 2 + 1;
        let n2 = this.s * 2 + 2;
        let lar = this.s;
  
        if (n1 < this.L && this.ar[n1] > this.ar[lar])
          lar = n1;
  
        if (n2 < this.L && this.ar[n2] > this.ar[lar])
          lar = n2;
  
        if (lar != this.s) {
          
          this.swap (this.s, lar);
          this.s = lar;
          this.stepc = 0;
          
        } else {
          this.ss--;
          this.L = this.ss;
        }
        
        if (!this.ss) {
          this.stepc = 0;
          this.stop = 1;
        }
        
        
      }
      
      
      
    }
    
    heapify (l, i) {
      let n1 = i * 2 + 1;
      let n2 = i * 2 + 2;
      let lar = i
      
      if (n1 < l && this.ar[n1] > this.ar[lar])
        lar = n1;
      
      if (n2 < l && this.ar[n2] > this.ar[lar])
        lar = n2;
      
      if (lar != i) {
        
        this.swap (i, lar);
        
        this.heapify (l, lar);
      }
      
    }
    
    heap () {
      
      for (let i = this.l / 2 - 1; i >= 0; i--)
        this.heapify (this.l, i);
      
      for (let i = this.l - 1; i >= 0; i--) {
        this.swap (0, i);
        this.heapify (i, 0);
      }
      
    }
    
    
    
    
    swap (i, j) {
      let a = this.ar[i];
      this.ar[i] = this.ar[j];
      this.ar[j] = a;
    }
    
  }
  
  
  
  
  
  
  
  
  