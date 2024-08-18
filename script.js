//poetry made to print for XOXO
let logo;
let qr;
let canvas;
function preload() {
  logo = loadImage("https://assets.codepen.io/4559259/logo120px.png");
  qr = loadImage("https://assets.codepen.io/4559259/fkQR.png");
}
function setup() {
  s = 1.5;
  r = 8.5 / 11;
  canvas = createCanvas(1100 * s, 850 * s);
  // canvas.parent(document.getElementById('sketch-container'));
  // canvas.class(document.getElementById('scaled-canvas')); // Add the CSS class to scale the canvas
  canvas.class('scaled-canvas'); // Add the CSS class to scale the canvas
  canvas.parent('sketch-container');
  background(255);
  textFont("palitino");
  textSize(30)
  noLoop();
  // rectMode(CENTER)
}
function draw() {
  translate(width / 2, height / 2);
  templateLines();
  page1();
  page2();
  page3();
  page4();
  page5();
  page6();
  page7();
  page8();
}

function templateLines() {
  stroke(0);
  line(-width / 2, 0, -width / 4, 0);
  line(width / 2, 0, width / 4, 0);
  stroke(190);
  line(-width / 4, 0, width / 4, 0);
  stroke(0);
  for (let i = -1; i < 2; i++) {
    line((i * width) / 4, -height / 2, (i * width) / 4, height / 2);
  }
}

function page1() {
  push();
  translate(-width / 4 + 30, 110);
  str1 = w1[int(random(0, w1.length))];
  str2 = " " + p1[int(random(0, p1.length))];
  text(str1 + str2, 0, 0);

  str3 = p2[int(random(0, p2.length))] + ", " + p1[int(random(0, p1.length))];
  l1 = str3.length;
  while (l1 > 28) {
    str3 = p2[int(random(0, p2.length))] + ", " + p1[int(random(0, p1.length))];
  }
  text(str3, 0, 40);
  str1 = w1[int(random(0, w1.length))];
  str2 = "– " + p1[int(random(0, p1.length))];
  text(str1 + str2, 0, 80);
  pop();
  push();
  noFill();
  n = int(random(2000, 4000));
  fill(0);
  noFill();
  noStroke();
  for (let i = 0; i < n; i++) {
    fill(0, 0, 0, 20);
    x = randomGaussian(-width / 4 + width / 8, width / 30);
    y = randomGaussian(height / 3.5, height / 20);
    if (
      x > -width / 4 + 10 &&
      x < 0 - 10 &&
      y > height / 5.5 &&
      y < height / 2 - 40
    ) {
      j5 = randomGaussian(5, 10)
      circle(x, y, j5);
      circle(-x - width / 4, y, j5);

    }
  }
  pop();
  push();
  textSize(36)
  text("randomness", -width / 4 + 80, 40);
  textSize(23)
  text("a generative zine by sophia wood", -width / 4 + 30, 70);
  pop();

  line(-width / 4, 80, 0, 80);
  text(str(n), -width / 4 + 50, height / 2 - 20 + 12);
}
function page2() {
  oldx = random(10, width / 4 - 10);
  oldy = random(10, height / 2);
  for (j = 0; j < 10; j++) {
    push();
    n = int(random(50000, 100000));
    stroke(0, 0, 0, 20);
    fill(0, 0, 0, 200);
    ran = [random(-3, -2), random(0.1, 2), random(-2, -0.1), random(-1, 0.1)];
    for (let i = 0; i < n; i++) {
      x =
        sin(ran[0] * oldx - oldy) -
        sin(ran[1] * oldx + ran[2]) * cos(ran[3] * oldy - ran[2]);
      y = sin(ran[2] * oldy - ran[0]) - cos(ran[3] * oldx) * sin(oldy * ran[0]);
      scalex = map(x, -2, 2, 10, width / 4 - 10);
      scaley = map(y, -2, 2, 40, height / 2 - 60);
      point(scalex, scaley);
      oldx = x;
      oldy = y;
    }
    pop();
  }
  push();
  text("strangely attracted", width / 16, 40);
  str2 = str(n * 10);
  text(str2, width / 16 + 50, height / 2 - 20 + 12);
  pop();
}
function page3() {
  push();
  text("finding shapes within", width / 4 + 20, 30);
  pop();
  push();
  translate(width / 4, 0);
  translate(width / 8, height / 4);
  noFill();
  strokeWeight(0.2);
  rad1 = random(width / 40, width / 12);
  rad2 = random(width / 15, width / 8);
  rad3 = random(width / 15, width / 8);

  rad4 = random(width / 20, width / 8);
  n3 = int(random(500, 1000));
  stroke(0);
  for (let i = 0; i < n3; i++) {
    a1 = random(0, 2 * PI);
    a2 = random(0, 2 * PI);
    line(rad1 * cos(a1), rad2 * sin(a1), rad3 * cos(a2), rad4 * sin(a2));
  }
  pop();
  text(str(n3), (width / 4) * 1.5 + 20, height / 2 - 20 + 12);
}
function page4() {
  push();
  fill(0);
  translate(width / 2.2 - 20, -20);
  rotate(PI);
  text("embrace your chaos", 0, 12);
  pop();
  push();
  translate((width / 4) * 1.5, -height / 4 - 10);
  n4 = int(random(200, 600));
  strokeWeight(0.5);
  noFill();
  for (let i = 0; i < n4; i++) {
    a1 = random(0, 2 * PI);
    a2 = random(0, 2 * PI);
    x2 = random(10, width / 4 - 10);
    y2 = random(10, height / 2 - 40);
    strokeWeight(random(0.2, 0.5));
    arc(0, 0, x2, y2, a2 + a1, a1 / a2);

  }
  pop();
  push();
  translate((width / 4) * 1.5 - 70, -height / 2 + 20);
  scale(-1, -1);
  text(str(n4), 0, 0);
  pop();
}
function page5() {
  push();
  translate(0, -height / 2);
  fill(255);
  rect(0, 0, width / 4, height / 2);
  n51 = int(random(1000, 3000));
  fill(0, 0, 0, 4);
  push();

  noStroke();
  for (let i = 0; i < n51; i++) {
    x = randomGaussian(width / 8, width / 20);
    y = randomGaussian(height / 4, height / 30);
    circle(x, y, random(4, 30));
  }
  pop();
  fill(0);
  noStroke();
  n5 = int(random(300, 500));
  for (let i = 0; i < n5; i++) {
    x = random(0, width / 4);
    y = random(0, height / 2);
    circle(x, y, random(2, 4));
  }
  pop();
  push();

  translate(width / 4 - 20, -15);
  rotate(PI);
  fill(255)
  rect(-20, -15, width / 4, 40)
  fill(0)
  text("in this existence", 40, 20);

  pop();
  push();

  translate(width / 4 - 10, -height / 2 + 20);
  scale(-1, -1);
  text(str(n5 + n51), 0, 0);

  pop();
}
function page6() {
  push();
  stroke(0);
  fill(0);
  translate(-100, -25);
  rotate(PI);
  text("to walk about", 0, 10);
  pop();
  push();
  translate(-width / 4, -height / 2);
  let walk = [];
  minx = width;
  maxx = 0;
  miny = width;
  maxy = 0;
  n6 = int(random(4000, 5000));
  x1 = 0;
  y1 = 0;

  for (let i = 0; i < n6; i++) {
    x1 += random(-0.5, 0.5);
    y1 += random(-0.5, 0.5);
    minx = min(x1, minx);
    maxx = max(x1, maxx);
    miny = min(y1, miny);
    maxy = max(y1, maxy);
    walk[i] = { x: x1, y: y1 };
  }
  x1 = walk[0].x;
  y1 = walk[0].y;
  h5 = int(random(10, 100))
  for (let i = 1; i < walk.length - 2; i++) {
    x = map(walk[i].x, minx, maxx, 20, width / 4 - 20);
    y = map(walk[i].y, miny, maxy, 40, height / 2 - 40);
    if (i > 1) {
      strokeWeight(random(0.2, 0.5));
      line(x1, y1, x, y);
      if (i % h5 === 0) {
        push()
        fill(0)
        circle(x, y, random(2, 9))
        pop()
      }
    }

    x1 = x;
    y1 = y;
  }
  pop();
  push();

  translate(-50, -height / 2 + 20);
  scale(-1, -1);
  text(str(n6), 0, 0);

  pop();
}
function page7() {
  n7 = random([3, 5, 6, 7, 8, 9, 10, 11, 12, 15, 19, 20, 21]);
  push();
  stroke(0);

  fill(0);
  translate(-width / 4 - 10, -5);
  rotate(PI);
  text("and find the beauty", 50, 25);
  pop();
  push();
  strokeWeight(0.5);
  translate((-width / 4) * 1.5, -height / 4);
  t = 0;
  angle = PI / 6;
  for (let i = 0; i < n7; i++) {
    push();
    rotate((i * TWO_PI) / n7);
    drawTree();
    pop();
    push();
    scale(0.5);
    rotate((i * TWO_PI) / n7);
    drawTree();
    pop();
  }

  function drawTree() {
    x = width / 4;
    val = 0.65;
    v2 = 5 * Math.sin(t / n);
    v3 = 9;
    fractal(width / 24, -1);
  }

  function fractal(len, refl) {
    tmp = len * refl;
    line(0, 0, 0, min(-20, tmp));
    translate(0, tmp);
    if (len > v3) {
      push();
      rotate(angle - angle * v2);
      fractal(len * val, refl);
      fill(0, 0, 0);
      circle(0, 0, random(1, 10));
      pop();
      push();
      rotate(-angle + angle * v2);
      fractal(len * val, refl);
      noStroke();
      fill(0);
      circle(0, 0, random(1, 10));

      pop();
    }
  }
  pop();
  push();

  translate(-width / 4 - 50, -height / 2 + 20);
  scale(-1, -1);
  text(str(n7), 0, 0);

  pop();
}
function page8() {
  push();
  translate(-width / 2 + 10, 40);
  str1 = w1[int(random(0, w1.length))];
  str2 = " " + p1[int(random(0, p1.length))];
  text(str1 + str2, 0, 0);

  str3 = p2[int(random(0, p2.length))] + ", " + p1[int(random(0, p1.length))];
  l1 = str3.length;
  while (l1 > 28) {
    str3 = p2[int(random(0, p2.length))] + ", " + p1[int(random(0, p1.length))];
  }
  text(str3, 0, 40);
  str1 = w1[int(random(0, w1.length))];
  str2 = "– " + p1[int(random(0, p1.length))];
  text(str1 + str2, 0, 80);
  pop();
  line(-width / 2, height / 2 - 80, -width / 4, height / 2 - 80)
  textSize(20)
  text("made with p5.js", -width / 2 + 20, height / 2 - 50);
  textSize(30)
  text("fractalkitty.com", -width / 2 + 100, height / 2 - 10);
  image(logo, -width / 4 - 100, height / 2 - 60, 50, 50);
  // image(qr, -width / 2 + 10, height / 2 - 100, 100, 100);
  push();
  translate((-width / 4) * 1.5, height / 4);
  n8 = random(9, 20);
  r8 = [random([3, 4, 5, 6]), random(0, PI), random(2, 5)];
  noFill();
  strokeWeight(0.5);
  for (let i = 0; i < n8; i++) {
    push();
    rotate(r8[1] + (i * TWO_PI) / n8);
    circle((r8[2] * width) / 62, 0, random(50, 100));
    circle((r8[2] * width) / 62, 0, random(50, 100));
    circle((r8[2] * width) / 62, 0, random(50, 100));
    circle((r8[2] * width) / 62, 0, random(2, 30));
    line((r8[2] * width) / 62, 0, (-r8[2] * width) / 62, 0);
    pop();
  }
  pop();
}

w1 = [
  "here",
  "oh –",
  "so",
  "if",
  "when",
  "how",
  "where",
  "why",
  "who",
  "which",
  "this",
  "that",
  "then",
  "thus",
  "though",
  "yet",
  "still",
  "but",
  "so",
  "once",
  "while",
  "just",
  "now",
  "since",
  "with",
  "from",
  "by",
  "in",
  "on",
  "to",
  "up –",
  "down –",
  "for",
  "out",
  "near",
  "through",
  "till",
  "past",
  "next",
  "first",
  "last",
  "one",
  "too",
  "more",
  "less",
  "much",
  "each",
  "some"
];

p1 = [
  "you are random",
  "dancing with trees",
  "listen to noise",
  "randomly here",
  "you are chaos",
  "chance or design",
  "you are guided",
  "you are ordered",
  "you chose one",
  "ancient is time",
  "is this as is",
  "is beautiful",
  "variables",
  "randomness is",
  "organic growth",
  "parametric",
  "gentle chaos"
];

p2 = [
  "curves are we",
  "randomness",
  "artistry",
  "what you are",
  "radiance",
  "blossoming",
  "creative",
  "but designed",
  "here and now",
  "linear",
  "weighted time",
  "attractor",
  "uniquely",
  "a number",
  "distribute",
  "we're clustered",
  "together",
  "in this time",
  "like small stars",
  "ancient light"
];

function mousePressed() {
  setup();
  draw();
}

function keyPressed() {
  save(canvas, "gen_zine", "png");
}