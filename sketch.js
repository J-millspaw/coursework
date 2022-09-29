function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100, 50, 'aqua');
    drawCircle(300, 100, 100, 'red');
    drawCircle(500, 100, 50, 'aqua');
    drawCircle(700, 100, 80, 'aqua'); 

    // Exercise 2: 
    drawOval(200, 200, 75, 100,'blue');
    drawOval(400, 200, 150, 75,'purple');
    drawOval(600, 200, 75, 100,'pink');
    drawOval(800, 200, 150, 75,'darkblue');
  

    // Exercise 3:
    drawBullseye(100, 300, 100, 'red', 'green');
    drawBullseye(300, 300, 100, 'red', 'blue');
    drawBullseye(500, 300, 100, 'red', 'green');
    drawBullseye(700, 300, 100, 'orange', 'lightblue');

    // Exercise 4:
    drawFace(350, 450, 50);
    drawFace(500, 500, 100);
    drawFace(725, 550, 150);
    drawFace(100, 500, 100)

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor,) {
    fill(fillColor);
    circle(centerX, centerY, size);

}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor,) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size, color1, color2) {
    fill(color1);
    circle(centerX, centerY, size);
    fill(color2);
    circle(centerX, centerY, size * .75);
    fill(color1);
    circle(centerX, centerY, size * .50);
    fill(color2);
    circle(centerX, centerY, size * .25);


}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size) {
    strokeWeight(size * .03)
    fill('yellow');
    circle(centerX, centerY, size);
    strokeWeight(1)
    fill('black');
    circle(centerX - size * .25, centerY - size * .2, size * .2);
    circle(centerX + size * .25, centerY - size * .2, size * .2);
    noFill()
    stroke('black');
    strokeWeight(size * .03);
    curve(
        centerX, centerY - size,       
        centerX - size * .25, centerY + size * .1, 
        centerX + size * .25, centerY + size * .1,
        centerX, centerY - size ,        
    );
   
   
}
