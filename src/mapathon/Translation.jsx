// src/Canvas.js
import React, { useRef, useEffect } from 'react';
import bg from './assets/mole.jpg'; // Import your background image
import cloud from './assets/cloud.png'; // Import your cloud image

const mapW = 1920;
const mapH = 1080;

const Canvas = ({ p, img }) => {
  const canvasRef = useRef(null);
  const balls = useRef([]);
  const ballCount = p;
  const objectsRef = useRef([]);

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

    draw(context) {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.fill();
      context.closePath();
    }

    update(context) {
      // Check for wall collisions
      if (this.x + this.radius > mapW || this.x + this.radius < mapW * 0.3) {
        this.dx = -this.dx;
      }
      if (this.y + this.radius > mapH - 80 || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      if (Math.sqrt(Math.pow(this.x - (mapW * 0.7), 2) + Math.pow(this.y - (mapH * 0.85), 2)) > 500) {
        this.dx = -this.dx;
        this.dy = -this.dy;
      }

      // Check for collisions with other balls
      for (let i = 0; i < balls.current.length; i++) {
        if (this === balls.current[i]) continue;
        const dx = this.x - balls.current[i].x;
        const dy = this.y - balls.current[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.radius + balls.current[i].radius) {
          this.dx = -this.dx;
          this.dy = -this.dy;
        }
      }

      // Update ball position
      this.x += this.dx;
      this.y += this.dy;
      this.draw(context);
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = mapW;
    canvas.height = mapH;

    // Initialize balls with random properties only once
    if (balls.current.length === 0) {
      for (let i = 0; i < ballCount; i++) {
        const radius = random(10, 20);
        const x = random(radius + mapW * 0.25, mapW - radius);
        const y = random(radius, mapH - radius);
        const dx = random(-2, 2);
        const dy = random(-2, 2);
        balls.current.push(new Ball(x, y, radius, dx, dy));
      }
    }

    // Initialize clouds with random properties only once
    const numberOfObjects = 5;
    for (let i = 0; i < numberOfObjects; i++) {
      const image = new Image();
      image.src = img; // Replace with your image path
      image.onload = () => {
        const obj = {
          image,
          x: Math.random() * (canvas.width - 100), // 100 is the max width
          y: Math.random() * (canvas.height - 100), // 100 is the max height
          velocity: {
            x: Math.random() * 0.5 - 1,
            y: Math.random() * 0.5 - 1,
          },
          width: Math.random() * 50 + 150, // Random width between 50 and 100
          height: Math.random() * 50 + 150, // Random height between 50 and 100
        };
        objectsRef.current.push(obj);

        // Draw initial image
        drawObjects(context);
      };
    }

    const background = new Image();
    background.src = bg;

    const drawBackground = () => {
      context.drawImage(background, 0, 0, canvas.width, canvas.height);
    };

    const drawObjects = (ctx) => {
      objectsRef.current.forEach((obj) => {
        ctx.drawImage(obj.image, obj.x, obj.y, obj.width, obj.height);
      });
    };

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground(); // Draw the constant background image first

      // Update and draw clouds
      objectsRef.current.forEach((obj) => {
        obj.x += obj.velocity.x;
        obj.y += obj.velocity.y;

        // Check for wall collision
        if (obj.x <= 0 || obj.x + obj.width >= context.canvas.width) {
          obj.velocity.x = -obj.velocity.x;
        }
        if (obj.y <= 0 || obj.y + obj.height >= context.canvas.height) {
          obj.velocity.y = -obj.velocity.y;
        }

        context.drawImage(obj.image, obj.x, obj.y, obj.width, obj.height);
      });

      // Update and draw balls
      balls.current.forEach(ball => ball.update(context));

      requestAnimationFrame(animate);
    };

    background.onload = () => {
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

  return <canvas ref={canvasRef} width={800} height={600}></canvas>;
};

export default Canvas;
