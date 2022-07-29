document.getElementById("1").addEventListener("click", function() {
    rest ();
    bs = new Buble (gr.g); 
    bs.start ();
  });
  document.getElementById("2").addEventListener("click", function() {
    rest ();
    bs = new Selection (gr.g); 
    bs.start ();
  });
  document.getElementById("3").addEventListener("click", function() {
    rest ();
    bs = new Insertion (gr.g); 
    bs.start ();
  });
  document.getElementById("4").addEventListener("click", function() {
    rest ();
    bs = new Counting (gr.g); 
    bs.start ();
  });
  document.getElementById("5").addEventListener("click", function() {
    rest ();
    bs = new Merge (gr.g); 
    bs.start ();
  });
  document.getElementById("6").addEventListener("click", function() {
    rest ();
    bs = new Quick (gr.g); 
    bs.start ();
  });
  document.getElementById("7").addEventListener("click", function() {
    rest ();
    bs = new Cocktail (gr.g); 
    bs.start ();
  });
  document.getElementById("8").addEventListener("click", function() {
    rest ();
    bs = new Radix (gr.g); 
    bs.start ();
  });
  document.getElementById("9").addEventListener("click", function() {
    rest ();
    bs = new Heap (gr.g); 
    bs.start ();
  });
  
  
  // document.getElementById("p").addEventListener("click", function() {
  //   if (bs)
  //     bs.pause ();
  // });
  document.getElementById("r").addEventListener("click", function() {
    gr = new Graph ();
    bs = undefined;
  });
  
  
  function rest () {
    if (bs && bs.stop)
      gr = new Graph ();
  }
  
  
  