

let Q = 50;
let steps = 1;
let maxQ = 1000, maxS = 1000;
let currQ = 200, currS = 100;

let gr;
let bs;
let sl1, sl2;

function setup() {
  createCanvas(400, 400);
  
  gr = new Graph ();
  
  applySlider ();
  
  //bs.start ();
  
}

function draw() {
  background(151);
  
  
  sliderW ();
  
  if (!bs) {
    gr.show ();
    return;
  }
  
  gr.g = bs.ar;
  gr.show (bs.I, bs.w);
  
  if (bs.sd)
    steps /= bs.sd;
  for (let i = 0; i < steps; i++)
    bs.step ();
  
}


function applySlider () {
  sl1 = createSlider(2, maxQ, currQ, 1);
  sl1.position(10, height + 60);
  sl1.style('width', '150px');
  
  sl2 = createSlider(1, maxS, currS, 1);
  sl2.position(210, height + 60);
  sl2.style('width', '150px');
}

function sliderW () {
  
  let sQ = Q;
  
  Q = sl1.value ();
  
  if (Q != sQ) {
    gr = new Graph ();
    bs = undefined;
  }
  
  steps = sl2.value ();
    
}

function C (n) {
  return n;
}





