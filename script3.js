let particles = [];
const num = 10000;
let timer = 10;

const noiseScale = 0.008;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    for (let i = 0; i < num; i++) {
        particles.push(createVector(random(width), random(height)))
    }
    stroke(97, 117, 237);
}

function draw() {
    background(0, 10);
    for(let i = 0; i < num; i ++) {
        let p = particles[i];
        point(p.x, p.y);

        let n = noise(p.x * noiseScale, p.y * noiseScale);
        let a = 2*PI * n;
        p.x += cos(a);
        p.y += sin(a);

        if (!onScreen(p)) {
            p.x = random(width);
            p.y = random(height);
        }
    }
}

function mouseReleased() {
    noiseSeed(millis());
}

function onScreen(v) {
    return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}