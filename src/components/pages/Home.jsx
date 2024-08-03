// Home.jsx
import React, { useEffect } from 'react';
import '../../App.css';

function Home() {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load the background image
    const backgroundImage = new Image();
    backgroundImage.src = 'src/Winkel_triple_projection_SW.jpg'; // Replace with the path to your image
    backgroundImage.onload = () => {
      ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  return (
    <>
      <canvas id="canvas" style={{ border: '1px solid black' }}></canvas>
    </>
  );
}

export default Home;
