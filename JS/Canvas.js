
let canvas;
let ctx;
let flowField;
let flowFieldAnimation;

window.addEventListener('load', function () {

    canvas = document.getElementById('canvas1');
    window = document.getElementById('canvas-div');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 120;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate(0);
});

window.onresize = function () {
    cancelAnimationFrame(flowFieldAnimation);
    canvas.width = window.innerWidth;
    canvas.height = 120;
    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height);
    flowField.animate(0);
};



class FlowFieldEffect {
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.lineWidth = 1;
        this.#height = height;
        this.#width = width;
        this.lastTime = 0;
        this.interval = 1000 / 60;
        this.timer = 0;
        this.cellSize = 7;
        this.gradient;
        this.#createGradient();
        this.#ctx.strokeStyle = this.gradient;
        this.radius = 0;
        this.vr = 0.03;
    }

    #createGradient() {
        this.gradient = this.#ctx.createLinearGradient(0, 0, this.#width, this.#height);
        this.gradient.addColorStop("0.1", "#A3A901");
        this.gradient.addColorStop("0.2", "#FFDC26");
        this.gradient.addColorStop("0.4", "#FFF699");
        this.gradient.addColorStop("0.6", "#FFFFBF");
        this.gradient.addColorStop("0.8", "#FFDC26");
        this.gradient.addColorStop("0.9", "#FFD300");

    }

    #drawLine(angle, x, y) {
        const length = 100;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + Math.cos(angle) * 20, y + Math.sin(angle) * 10);
        this.#ctx.stroke();
    }

    animate(timeStamp) {
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        if (this.timer > this.interval) {
            this.#ctx.clearRect(0, 0, this.#width, this.#height);
            this.radius += this.vr;
            if (this.radius > 5 || this.radius < -5) this.vr *= -1;


            for (let y = 0; y < this.#height; y += this.cellSize) {
                for (let x = 0; x < this.#width; x += this.cellSize) {
                    const angle = (Math.cos(x * 0.04) + Math.sin(y * 0.05)) * this.radius;
                    this.#drawLine(angle, x, y);
                }
            }
            this.timer = 0;
        } else {
            this.timer += deltaTime;
        }

        flowFieldAnimation = requestAnimationFrame(this.animate.bind(this));
    }
}



