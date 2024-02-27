/**
 * @type {HTMLCanvasElement}
 */
let canvas = document.getElementById("Canvas");
/**
 * @type {CanvasRenderingContext2D}
 */
let ctx = canvas.getContext("2d");
/**
 * @type {Image}
 */
let img = new Image();
img.src = "images/pentagon.png";
ctx.drawImage(img, 0, 0, 150, 150);
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

let counter = 0;

class Color{
    constructor(red, green, blue, alpha){
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    getColorString(){
        return `rgba(${this.red},${this.green},${this.blue},${this.alpha}`;
    }
}

class Ball{
    constructor(x,xSpeed,y,ySpeed,color){
        this.x = x;
        this.xSpeed = xSpeed;
        this.y = y;
        this.ySpeed = ySpeed;
        this.color = color
    }
}

let balls = [];

function generateBalls(count){
    for (let i = 0; i < count; i++) {
        balls.push(new Ball(
            Math.round(Math.random() * canvas.width), 
            Math.round(Math.random() * canvas.width / 10),
            Math.round(Math.random() * canvas.height), 
            Math.round(Math.random() * canvas.height / 10),
            new Color(Math.random() * 255, Math.random() * 255, Math.random() * 255, 1)
        ));
    }
}

function move(delta){
    counter += delta;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
        ball.x += ball.xSpeed * delta;
        ball.xSpeed += Math.cos(counter) * 5 * Math.random();
        if(ball.x > canvas.width  || ball.x < 0){
            ball.x = clamp(ball.x, 0, canvas.width)
            ball.xSpeed *= -0.8;
        }
        
        if(ball.y > canvas.height || ball.y < 0){
            ball.y = clamp(ball.y, 0, canvas.height)
            ball.ySpeed *= -0.8;
        }
        ball.y += ball.ySpeed * delta;

        ball.ySpeed += Math.sin(counter) * 20 * Math.random();
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, 4, 0, 2 * Math.PI, false);
        ctx.fillStyle = ball.color.getColorString();
        ctx.fill();
        ctx.lineWidth = (ball.xSpeed + ball.ySpeed) * 0.003;
        ctx.strokeStyle = ball.color.getColorString();
        ctx.stroke();
    });
}

//setInterval(applyForce, 3000);
generateBalls(1000);

//This makes the logic framerate 
let lastTime = performance.now();

function tick(nowish) {
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    const delta = nowish - lastTime;
    lastTime = nowish;
    move(delta / 5000);
    window.requestAnimationFrame(tick);
}
window.requestAnimationFrame(tick);
