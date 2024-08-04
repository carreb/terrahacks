// Represents the population

import React, { useRef, useEffect } from 'react';
import Cloud from "./Translation.jsx"
import bg from './assets/mole.jpg'; // Import your background image

const mapW = 1920;
const mapH = 1080;

export default function Canvas({p}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const image = new Image();
    image.src = bg;
    canvas.width = mapW;
    canvas.height = mapH;

    const balls = [];
    const ballCount = p;

    // Utility function to generate random number in a range
    const random = (min, max) => Math.random() * (max - min) + min;

    // Ball class to manage each ball's properties and methods
    class Ball {
      constructor(x, y, radius, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = 'black';
        context.fill();
        context.closePath();
      }

      update() {
        // Check for wall collisions
        //console.log(this.x)
        if (this.x >= mapW * 0.85  || this.x <= mapW * 0.4) {
          this.dx = -this.dx;
          this.dy = -this.dy;        
        }
        if (this.y >= mapH * 0.65 || this.y <= mapH * 0.1) {
          this.dx = -this.dx;
          this.dy = -this.dy;        
        }


        // Check for collisions with other balls
        for (let i = 0; i < balls.length; i++) {
          if (this === balls[i]) continue;
          const dx = this.x - balls[i].x;
          const dy = this.y - balls[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < this.radius + balls[i].radius) {
            this.dx = -this.dx;
            this.dy = -this.dy;
          }
        }

        // Update ball position
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    // Initialize balls with random properties
    //console.log(ballCount);
    for (let i = 0; i < ballCount; i++) {
      const radius = 10;
      const x = random(radius+mapW*0.35, mapW*0.8 - radius);
      const y = random(radius+mapH*0.25, mapH*0.55 - radius);

      const dx = random(-2, 2);
      const dy = random(-2, 2);
      //console.log({x, y, dx, dy})

      balls.push(new Ball(x, y, 10, dx, dy));
    }
   console.log(balls);


    // Draw background image
    const drawBackground = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    // Animation loop
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground(); // Draw the background image first
      context.globalCompositeOperation = 'source-over'; // Ensure the canvas drawing is applied over the image

      balls.forEach(ball => ball.update());
      requestAnimationFrame(animate);
    };

    image.onload = () => {
      animate();
    };

    // Adjust canvas size on window resize
    const handleResize = () => {
      canvas.width = mapW;
      canvas.height = mapH;
      drawBackground(); // Redraw the background image on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} style={{ display: 'block' }}></canvas>;
}